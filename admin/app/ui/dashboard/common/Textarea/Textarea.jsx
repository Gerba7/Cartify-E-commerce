import styles from './textarea.module.css';



const Textarea = ({label, type, name, placeholder, defaultValue}) => {


  return (
    <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <textarea className={styles.textarea} type={type} placeholder={placeholder} name={name} defaultValue={placeholder} />
    </div>
  )
}

export default Textarea
