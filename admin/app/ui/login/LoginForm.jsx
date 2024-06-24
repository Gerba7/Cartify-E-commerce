'use client'

import { useState } from 'react';
import styles from './loginForm.module.css';
import { useRouter } from 'next/navigation';


const LoginForm = () => {

    const [credentials, setCredentials] = useState({
        email: undefined,
        password: undefined
    });

    const router = useRouter();


    const handleChange = (e) => {
        setCredentials((prev) => ({...prev, [e.target.id]: e.target.value}))
    }



  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Sign in or create an account</h3>
            <div className={styles.body}>
                <div className={styles.form}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Email:</label>
                        <input className={styles.input} id='email' type='email' placeholder='Enter your email' onChange={handleChange} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Password:</label>
                        <input className={styles.input} id='password' type='password' placeholder='Enter your password' onChange={handleChange} />
                    </div>
                    <button className={styles.formButton}>Sign In</button>
                    {/* {error ? <span style={{color: 'crimson', fontSize: '12px', justifySelf: 'center'}}>{error.error}</span> : <></>} */}
                </div>
                <div className={styles.others}>
                    <hr className={styles.hr} />
                    <h4 style={{fontWeight: 400, fontSize: '14px'}}>or use one of this options</h4>
                    <hr className={styles.hr} />
                </div>
                <hr />
                <h5 style={{textAlign: 'center', fontWeight: 400, fontSize: '11px'}}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</h5>
                <hr />
                <h6 style={{textAlign: 'center', fontWeight: 400, fontSize: '12px'}}>All rights reserved.</h6>
                <h6 style={{textAlign: 'center', fontWeight: 400, fontSize: '12px'}}>Copyright (2023 - 2024) - AustralisDevs™</h6>
            </div>
        </div>
    </div>
  )
}

export default LoginForm
