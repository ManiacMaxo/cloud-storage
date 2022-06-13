import { DateTime } from 'luxon'
import React, { useCallback, useEffect, useState } from 'react'

type DefaultProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
>

interface Props extends Omit<DefaultProps, 'className'> {
    date: DateTime | string
    asDuration?: boolean
    format?: 'short' | 'medium' | 'long' | 'full' | string
    updateInterval?: number
    withTooltip?: boolean

    as?: React.ElementType
    className?: string | ((value: DateTime) => string)
}

const parseInputDate = (date: Props['date']): DateTime => {
    if (typeof date === 'string') return DateTime.fromISO(date)
    return date
}

const formatDate = (
    date: Props['date'],
    format: Required<Props>['format']
): string => {
    let fmt: string

    switch (format) {
        case 'short':
            fmt = 'MMM d, yyyy'
            break
        case 'medium':
            fmt = 'MMMM d, yyyy'
            break
        case 'long':
            fmt = 'MMMM d, yyyy'
            break
        case 'full':
            fmt = 'EEEE, MMMM d, yyyy'
            break
        default:
            fmt = format
            break
    }

    return parseInputDate(date).toFormat(fmt)
}

const getDate = ({
    asDuration,
    format,
    date
}: Pick<Props, 'asDuration' | 'format' | 'date'>) => {
    if (!asDuration) return formatDate(date, format ?? 'medium')
    if (!format) return parseInputDate(date).toRelative()
    return DateTime.now().diff(parseInputDate(date)).toFormat(format)
}

const DateFormat: React.FC<Props> = (props) => {
    const {
        date,
        updateInterval = 1000 * 60,
        withTooltip,
        asDuration,
        format,
        as: Component = 'span',
        className,
        ...rest
    } = props

    const helperText = formatDate(date, 'full')

    const [value, setValue] = useState(getDate(props))

    const getClassName = useCallback(
        (cn: Props['className']): string | undefined => {
            if (!cn) return cn
            if (typeof cn === 'string') return cn

            return cn(parseInputDate(date))
        },
        [date]
    )

    useEffect(() => {
        if (!asDuration) return
        const interval = setInterval(
            () => setValue(getDate({ asDuration, format, date })),
            updateInterval
        )

        return () => {
            clearInterval(interval)
        }
    }, [updateInterval, asDuration, format, date])

    return (
        <Component
            title={helperText}
            className={getClassName(className)}
            {...rest}
        >
            {value}
        </Component>
    )
}

export { DateFormat }
