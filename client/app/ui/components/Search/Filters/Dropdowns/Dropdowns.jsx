'use client'

import styles from './dropdowns.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';





const Dropdowns = ({options, selector}) => {

    const [dropOptions, setDropOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const pathname = usePathname();

    const params = new URLSearchParams(searchParams);


    const handleSetOption = (e) => {

        e.preventDefault()

        let selectedOptionsString = selectedOptions.join(',');
        
        if(selectedOptions) {
            params.set(`${selector}`, selectedOptionsString);
        } else {
            params.delete(`${selector}`)
        }

        replace(`${pathname}?${params}`)
        
    }


    const handleCheckboxChange = (option) => {
        setSelectedOptions((prevSelectedOptions) =>
          prevSelectedOptions.includes(option)
            ? prevSelectedOptions.filter((selectedOption) => selectedOption !== option)
            : [...prevSelectedOptions, option]
        );
    };


    

  return (
    <>
        <div className={styles.dropdownContainer} onClick={() => setDropOptions(!dropOptions)}>
            <div className={styles.pressable}>
                <h3 className={styles.subtitle}>{selector}</h3>
                <span className={`${styles.icon} ${dropOptions && styles.rotate}`}><KeyboardArrowDownIcon /></span>
            </div>
        </div>
        <div className={`${styles.hiddenContainer} ${dropOptions && styles.visible}`}>
            {options?.map((opt) => (
                <div key={opt._id} className={styles.inputContainer}>
                    <input className={styles.input} type='checkbox' id={opt._id} checked={selectedOptions.includes(opt._id)} onChange={() => handleCheckboxChange(opt._id)} />
                    <label className={styles.label}>{opt.name}</label>
                </div>
            ))}
            <button className={styles.button} onClick={(e) => handleSetOption(e)}>Apply</button>
        </div>
    </>
    
  )
}

export default Dropdowns
