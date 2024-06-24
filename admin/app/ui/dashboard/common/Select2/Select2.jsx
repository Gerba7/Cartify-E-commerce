import styles from './select2.module.css';



const Select2 = async ({label, type, name, required = true, placeholder = null, options = null}) => {
    

  return (
    <div className={styles.container}>
        <div className={styles.labelContainer}>
            <label className={styles.label}>{label}</label>
        </div>
        <select className={styles.select} type={type} name={name} required={required}>
            {placeholder ? 
                <option defaultValue={placeholder}>{placeholder}</option>
                :
                <option></option>
            }
            {options?.map((opt) => {
                return(
                    <option value={opt.toLowerCase()} key={opt} className={styles.options}>{opt}</option>
                )
            })}
        </select>
    </div>
  )
}

export default Select2
