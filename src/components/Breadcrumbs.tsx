import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumbs = (): JSX.Element => {
    const router = useRouter()
    const items: string[] = router.query.path
        ? typeof router.query.path === 'string'
            ? [router.query.path]
            : router.query.path
        : ['/']

    return (
        <Breadcrumb>
            {items.map((item: string, idx: number) => {
                const href = `/${items.slice(0, idx + 1).join('/')}`
                return (
                    <BreadcrumbItem
                        isCurrentPage={href === router.asPath}
                        key={href}
                    >
                        <BreadcrumbLink href={href}>{item}</BreadcrumbLink>
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}

export default Breadcrumbs
