import SearchBar from '../../Common/SearchBar/SearchBar';
import styles from './searchRow.module.css';



const SearchRow = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <SearchBar />
        </div>  
    </div>
  )
}

export default SearchRow
