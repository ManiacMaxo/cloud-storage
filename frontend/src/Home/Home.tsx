import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFolder, FaRegFileAlt } from 'react-icons/fa'
import { IoReturnDownBack } from 'react-icons/io5'
import './Home.scss'

interface Props {}

const Home: React.FC<Props> = () => {
    const location = useLocation()
    const host = 'http://localhost:8080' + location.pathname

    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState(Array)

    useEffect(() => {
        setFiles([])
        setLoading(true)
        fetch(host)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
            .then((data) => {
                setFiles(renderFiles(data))
                setLoading(false)
            })
    }, [host])

    return (
        <div className='list'>
            <h1>{location.pathname}</h1>
            <ul>
                <li>
                    <Link to='../'>
                        <IoReturnDownBack />
                    </Link>
                    <span className='count'>{files.length} files</span>
                </li>
                {loading ? <li>Loading...</li> : files}
            </ul>
        </div>
    )
}

const renderFiles = (data: []) => {
    if (data === undefined) {
        return []
    }
    const render: JSX.Element[] = []

    data.forEach((file: any) => {
        const icon = file.dir ? <FaFolder /> : <FaRegFileAlt />

        const name = file.name.substring(0, 30)
        const dots = name.length !== file.name.length ? '...' : ''

        render.push(
            <li key={file.name}>
                <Link
                    key={file.name}
                    to={file.name + '/'}
                    className={file.dir ? 'dir' : 'file'}
                >
                    {icon}
                    {name + dots}
                </Link>
                <span className='date'>{file.time}</span>
                <span className='size'>{file.size} KB</span>
            </li>
        )
    })

    return render
}

export default Home
