import { fetchProducts } from '@/app/lib/actions';
import styles from './searchResults.module.css';
import Card from './Card/Card';
import Pagination from './Pagination/Pagination';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';





const SearchResults = async ({query, sort, filter, brand, model, condition, category, currentPage, minPrice, maxPrice, minMileage, maxMileage, minYear, maxYear}) => {
  
  const products = await fetchProducts(currentPage, 9, query, sort, filter, brand, model, condition, category, minPrice, maxPrice, minMileage, maxMileage, minYear, maxYear, { cache: 'no-store' });
  
  const count = products?.count;

  const totalPages = products?.pagesNumber;
    
  return (
    <>
      {products?.count > 0 ?
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className={styles.container}>
          {products?.products?.map((prod) => {
            return(
              <Card key={prod._id} prod={prod} />
            )
          })}
        </div>
        <Pagination currentPage={currentPage} count={count} totalPages={totalPages} />
      </div>
      :
      <div className={styles.noMatches}>
        <span className={styles.noResultsIcon}>
          <MinorCrashIcon color='inherit' fontSize='inherit' />
        </span>
        No results found.
      </div>
      } 
    </>
  )
}

export default SearchResults
