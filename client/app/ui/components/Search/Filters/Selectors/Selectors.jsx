'use client'

import { useState } from 'react';
import styles from './selectors.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';





const Selectors = ({options, selector}) => {

    const [activeSelector, setActiveSelector] = useState('all');
    
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams);


    const handleSetSelector = (e, option) => {
        e.preventDefault()
        
        setActiveSelector(option)
        if(option === 'all') {
            params.delete(`${selector}`)
        } else {
            params.set(`${selector}`, option);
        }

        replace(`${pathname}?${params}`)
    }

  return (
    <div className={styles.condition}>
        <h3 className={styles.subtitle}>{selector}</h3>
        <div className={styles.badges}>
            {options?.map((opt, i) => (
                <div key={i} className={`${styles.badge} ${activeSelector === opt && styles.active}`} onClick={(e) => handleSetSelector(e, opt)}>{opt}</div>
            ))}
        </div>
    </div>
  )
}

export default Selectors
