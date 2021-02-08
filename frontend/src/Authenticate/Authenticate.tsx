import React, { FunctionComponent } from 'react'
import { useLocation } from 'react-router-dom'
import { Input } from '../components'
import styles from './Authenticate.module.scss'
import axios from 'axios'

interface Props {}

const Authenticate: FunctionComponent<Props> = (props) => {
    const location = useLocation()
    const host = process.env.REACT_APP_HOST + location.pathname

    return (
        <form className={styles.root}>
            <h1>Login</h1>
            <Input name='email' type='email' required />
            <Input name='password' type='password' required />
            <button type='submit' className={styles.button}>
                Submit
            </button>
        </form>
    )
}

export default Authenticate
