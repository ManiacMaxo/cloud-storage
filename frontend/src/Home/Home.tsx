import React, { FunctionComponent, useEffect, useState } from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import axios from 'axios'
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
        axios
            .get(host)
            .then((res) => {
                setFiles(res.data)
            })
            .catch((error) => {
                console.log(error.response)
                if (error.response.status === 401) {
                    console.log('401')
                    return window.location.assign('/login')
                }
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
