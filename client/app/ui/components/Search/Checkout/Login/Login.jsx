'use client'

import styles from './login.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { login } from '@/app/lib/actions';
import SubmitButtons from './SubmitButtons/SubmitButtons';
import { useFormState } from 'react-dom'
import { usePathname } from 'next/navigation';




const Login = ({sell}) => {

    const [formState, formAction] = useFormState(login, {})

    const pathname = usePathname();

    
  return (
    <div className={styles.container}>
        <h4 className={styles.title}>{sell ? 'To sell sign in or create an account' : 'Sign in or create an account'}</h4>
        <div className={`${styles.body} ${sell ? '' : styles.width}`}>
            <form className={styles.form} action={formAction}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Email:</label>
                    <input className={styles.input} id='email' type='email' name='email' placeholder='Enter your email' />
                    <input className={styles.input} id='path' type='hidden' name='path' value={pathname} />
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>Password:</label>
                    <input className={styles.input} id='password' type='password' name='password' placeholder='Enter your password' />
                </div>
                <p aria-live="polite" className={`${styles.error} sr-only`}>{formState?.message}</p>
                <SubmitButtons />
                {/* <button type='submit' name='action' value='login' className={styles.formButton}>Sign In</button>
                <button type='submit' name='action' value='register' className={`${styles.formButton} ${styles.buttonColor}`}>Register</button> */}
                {/* {error ? <span style={{color: 'crimson', fontSize: '12px', justifySelf: 'center'}}>{error.error}</span> : <></>} */}
            </form>
            <div className={styles.others}>
                <hr className={styles.hr} />
                <h4 style={{fontWeight: 400, fontSize: '14px'}}>or use one of this options</h4>
                <hr className={styles.hr} />
            </div>
            <div className={styles.socialsContainer}>
                <div className={styles.socialButton}>
                    <GoogleIcon />
                </div>
                <div className={styles.socialButton}>
                    <FacebookIcon />
                </div>
            </div>
            {sell ?
                <></>
                :
                <>
                    <hr />
                    <h5 style={{textAlign: 'center', fontWeight: 400, fontSize: '11px'}}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</h5>
                </>
            }
            <hr />
            <h6 style={{textAlign: 'center', fontWeight: 400, fontSize: '12px'}}>Copyright (2023 - 2024) - AustralisDevs™</h6>
        </div> 
    </div>
  )
}

export default Login
