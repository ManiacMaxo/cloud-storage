import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumbs: React.FC = () => {
    const router = useRouter()
    const items: string[] = router.asPath.slice(1).split('/')
    console.log()

    return (
        <Breadcrumb>
            {items.map((item, idx) => {
                const href = `/${items.slice(0, idx + 1).join('/')}`
                const name = decodeURI(item)
                return (
                    <BreadcrumbItem key={href}>
                        {href === router.asPath ? (
                            <span>{name}</span>
                        ) : (
                            <Link href={href} passHref>
                                <BreadcrumbLink>{name}</BreadcrumbLink>
                            </Link>
                        )}
                    </BreadcrumbItem>
                )
            })}
        </Breadcrumb>
    )
}

export { Breadcrumbs }
