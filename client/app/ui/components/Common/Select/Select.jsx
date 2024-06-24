import BasicModal from '../Modal/Modal';
import styles from './select.module.css';
import ControlPointIcon from '@mui/icons-material/ControlPoint';



const Select = async ({label, type, name, required = true, placeholder = null, options, add}) => {

    

  return (
    <div className={styles.container}>
        <div className={styles.labelContainer}>
            <label className={styles.label}>{label}</label>
            {add ? 
                <BasicModal 
                    categories={options} 
                    content={<span className={styles.add}><ControlPointIcon fontSize='10px' style={{marginBottom: '1px'}} /> Add Category</span>} 
                />
                :
                <></>
            }
        </div>
        <select className={styles.select} type={type} name={name} required={required}>
            {placeholder ? 
                <option defaultValue={placeholder}>{placeholder}</option>
                :
                <option></option>
            }
            {options?.map((cat) => {
                return(
                    <option value={cat._id} key={cat._id} className={styles.options}>{cat.name}</option>
                )
            })}
        </select>
    </div>
  )
}

export default Select
