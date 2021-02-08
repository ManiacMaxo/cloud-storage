import React, { FunctionComponent } from 'react'
import { FaRegFileAlt } from 'react-icons/fa'

interface Props {
    file: string
    host: string
}

const File: FunctionComponent<Props> = (props) => {
    const file = props.file
    const name = file.substring(0, 30)
    const dots = name.length !== file.length ? '...' : ''

    return (
        <a href={props.host + file} className='file'>
            <FaRegFileAlt />
            {name + dots}
        </a>
    )
}

export default File
