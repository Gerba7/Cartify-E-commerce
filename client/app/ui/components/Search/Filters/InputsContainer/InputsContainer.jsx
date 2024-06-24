'use client'

import { useEffect, useState } from 'react';
import RangeSlider from '../RangeSlider/RangeSlider';
import styles from './inputsContainer.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';





const InputsContainer = ({title, money}) => {

    const [value, setValue] = useState([0, 200000]);

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();


    const params = new URLSearchParams(searchParams);

    
    const handleSetRange = (type, newValue) => {
        if (type === true) {
          if(newValue[0] > 0) {
            params.set('minPrice', parseInt(newValue[0]));
          } else {
            params.delete('minPrice')
          }
          if(newValue[1] < 200000) {
            params.set('maxPrice', parseInt(newValue[1]));
          } else {
            params.delete('maxPrice')
          }
        } else {
          if(newValue[0] > 0) {
            params.set('minMileage', parseInt(newValue[0]));
          } else {
            params.delete('minMileage')
          }
          if(newValue[1] < 200000) {
            params.set('maxMileage', parseInt(newValue[1]));
          } else {
            params.delete('maxMileage')
          }
        }

        replace(`${pathname}?${params}`)
        
    }



  return (
    <div className={styles.inputsContainer}>
        <h3 className={styles.subtitle}>{title}</h3>
        <div className={styles.selectorsContainer}>
            <input className={styles.input} value={`${money ? '$' : ''} ${(value[0])?.toLocaleString('en-US')} +`} />
            to
            <input className={styles.input} value={`${money ? '$' : ''} ${(value[1])?.toLocaleString('en-US')} +`} />
        </div>
        <RangeSlider value={value} setValue={setValue} money={money} handleSetRange={handleSetRange} />
    </div>
  )
}

export default InputsContainer
