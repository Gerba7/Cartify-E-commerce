import styles from './input.module.css';



const Input = ({label, type, name, placeholder, defaultValue, required = false}) => {


  return (
    <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} type={type} placeholder={placeholder} name={name} defaultValue={placeholder} required={required} />
    </div>
  )

}

export default Input
