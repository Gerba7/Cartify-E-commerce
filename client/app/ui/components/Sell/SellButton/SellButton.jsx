'use client'

import styles from './sellButton.module.css';
import { useFormStatus } from 'react-dom';



const SellButton = () => {

    const { pending } = useFormStatus()

  return (
    <button type='submit' className={styles.button} disabled={pending}>Publish car</button>
  )
}

export default SellButton
