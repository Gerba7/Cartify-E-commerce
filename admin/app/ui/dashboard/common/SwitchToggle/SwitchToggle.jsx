'use client'

import { useState } from 'react';
import styles from './switchToggle.module.css';
import { toggleProduct } from '@/app/lib/actions';



const SwitchToggle = ({bool, id, type}) => {

    const [checked, setChecked] = useState(bool);
    
    const handleChange = () => {
        setChecked(!checked)
        toggleProduct(id, !bool, type)
    }

  return (
    <div className={styles.checkboxWrapper}>
      <input className={styles.checkbox} id={id} type="checkbox" checked={checked} onChange={handleChange} />
      <label className={styles.checkboxLabel} htmlFor={id} />
    </div>
  )
}

export default SwitchToggle
