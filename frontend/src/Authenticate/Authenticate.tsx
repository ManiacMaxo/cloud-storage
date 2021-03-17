import React from 'react'
import { Input } from '../components'
import styles from './Authenticate.module.scss'

interface Props {}

const Authenticate: React.FC<Props> = (props) => {
    const login = () => {}

    return (
        <form className={styles.root} onSubmit={login}>
            <h1>Login</h1>
            <Input name='username' type='text' required />
            <Input
                name='password'
                type='password'
                required
                options={{
                    minLength: 8
                }}
            />
            <button type='submit' className={styles.button}>
                Submit
            </button>
        </form>
    )
}

export default Authenticate
