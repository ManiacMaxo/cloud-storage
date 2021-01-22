import React, { FunctionComponent, useEffect, useState } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { File, Folder } from '.'
import './Home.scss'

interface Props {}

const Home: FunctionComponent<Props> = () => {
    const location = useLocation()
    const host = process.env.REACT_APP_HOST + location.pathname

    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState(Array)

    useEffect(() => {
        setLoading(true)
        fetch(host)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('500')
                }
                return res.json()
            })
            .then((data) => {
                setFiles(data)
            })
            .finally(() => {
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
                {loading ? (
                    <li>Loading...</li>
                ) : (
                    files.map((file: any) => {
                        return (
                            <li key={file.name}>
                                {file.dir ? (
                                    <Folder file={file.name} />
                                ) : (
                                    <File file={file.name} host={host} />
                                )}
                                <span className='date'>{file.time}</span>
                                <span className='size'>{file.size} KB</span>
                            </li>
                        )
                    })
                )}
            </ul>
        </div>
    )
}

export default Home
