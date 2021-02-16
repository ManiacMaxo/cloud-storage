import React, { FunctionComponent, useEffect, useState } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import { Link, useLocation } from 'react-router-dom'
import { File, Folder } from '../components'
import './Home.scss'

interface Props {}

const Home: FunctionComponent<Props> = () => {
    const { pathname } = useLocation()
    const host = process.env.REACT_APP_BACKEND + pathname

    const [loading, setLoading] = useState(true)
    const [files, setFiles] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch(host)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else if (res.status === 401) {
                    return window.location.assign('/login')
                }
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
            <h1>{pathname}</h1>
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
                    files.map((file: any) => (
                        <li key={file.name}>
                            {file.dir ? (
                                <Folder file={file.name} />
                            ) : (
                                <File file={file.name} host={host} />
                            )}
                            <span className='date'>{file.time}</span>
                            <span className='size'>{file.size} KB</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Home
