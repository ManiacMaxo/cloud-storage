import React from 'react'
import { FaFolder } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface Props {
    file: string
}

const Folder: React.FC<Props> = (props) => {
    const file = props.file

    return (
        <Link key={file} to={file + '/'} className='dir'>
            <FaFolder />
            {file}
        </Link>
    )
}

export default Folder
