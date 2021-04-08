// import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

const Breadcrumbs: React.FC = (): JSX.Element => {
    const router = useRouter()
    // const items: string[] = router.asPath.slice(1).split('/')

    return (
        // <Breadcrumb>
        //     {items.map((item: string, idx: number) => {
        //         const href = `/${items.slice(0, idx + 1).join('/')}`
        //         return (
        //             <BreadcrumbItem
        //                 isCurrentPage={href === router.asPath}
        //                 key={href}
        //             >
        //                 <BreadcrumbLink href={href}>{item}</BreadcrumbLink>
        //             </BreadcrumbItem>
        //         )
        //     })}
        // </Breadcrumb>
        <h2>{router.asPath}</h2>
    )
}

export default Breadcrumbs
