import styles from './searchSelect.module.css';




const SearchSelect = ({left, options, setOption, category}) => {

  const handleChangeBrand = (e) => {
    setOption(e.target.value)
  }

  return (
    <select className={`${styles.container} ${left ? styles.borderRadius : ''}`} defaultValue="" onChange={handleChangeBrand}>
      <option className={styles.option} value="" disabled>{category}</option>
      {options?.map((opt) => {
        return(
          <option key={opt._id} value={opt._id} className={styles.option}>{opt.name}</option>
        )
      })}
    </select>
  )
}

export default SearchSelect
