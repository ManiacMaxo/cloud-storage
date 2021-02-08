import React, { FunctionComponent } from 'react'
import { FaFolder } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props {
    file: string
}

const Folder: FunctionComponent<Props> = (props) => {
    const file = props.file
    const name = file.substring(0, 30)
    const dots = name.length !== file.length ? '...' : ''

    return (
        <Link key={file} to={file + '/'} className='dir'>
            <FaFolder />
            {name + dots}
        </Link>
    )
}

export default Folder
