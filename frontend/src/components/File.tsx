import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'

interface Props {
    file: string
    host: string
}

const File: React.FC<Props> = (props) => {
    const file = props.file

    return (
        <a href={props.host + file} className='file'>
            <FaRegFileAlt />
            {file}
        </a>
    )
}

export default File
