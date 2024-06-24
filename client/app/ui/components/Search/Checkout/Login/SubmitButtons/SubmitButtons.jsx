'use client'

import styles from './submitButtons.module.css';
import { useFormStatus } from 'react-dom'



const SubmitButtons = () => {

    const { pending } = useFormStatus()

  return (
    <div className={styles.container}>
      <button type='submit' name='action' value='login' className={styles.formButton} disabled={pending}>Sign In</button>
      <button type='submit' name='action' value='register' className={`${styles.formButton} ${styles.buttonColor}`} disabled={pending}>Register</button>
    </div>
  )
}

export default SubmitButtons
