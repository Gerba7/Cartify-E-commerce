'use client'

import { useState } from 'react';
import styles from './select.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';




const Select = ({title}) => {

    const [yearRange, setYearRange] = useState([]);

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();


    const params = new URLSearchParams(searchParams);


    function generateYearOptions() {
        const currentYear = new Date().getFullYear();
        const years = [];
    
        for (let year = currentYear; year >= 1980; year--) {
            years.push(<option key={year} value={year}>{year}</option>);
        }
    
        return years;
    }

    
    const handleSelect = (e, index) => {
        setYearRange(prevRange => ({
            ...prevRange, [index]: e.target.value
        }))
    }


    const handleSetRange = (e) => {

        e.preventDefault()
      
        if(yearRange[0]) {
        params.set('minYear', parseInt(yearRange[0]));
        } else {
        params.delete('minYear')
        }
        if(yearRange[1]) {
        params.set('maxYear', parseInt(yearRange[1]));
        } else {
        params.delete('maxYear')
        }

        replace(`${pathname}?${params}`)
        
    }


  return (
    <div className={styles.inputsContainer}>
        <h3 className={styles.subtitle}>{title}</h3>
        <div className={styles.selectorsContainer}>
            <select className={styles.input} id={0} defaultValue={'From'} onChange={(e) => handleSelect(e, 0)} >
                <option disabled>From</option>
                {generateYearOptions()}
            </select>
            -
            <select className={styles.input} id={1} defaultValue={'To'} onChange={(e) => handleSelect(e, 1)} >
                <option disabled>To</option>
                {generateYearOptions()}
            </select>
        </div>
        <button className={styles.button} onClick={(e) => handleSetRange(e)}>Apply</button>
    </div>
  )
}

export default Select
