'use client'

import styles from './searchBar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


const SearchBar = ({placeholder = 'Search...'}) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();


  const handleSearch = useDebouncedCallback((e) => {

    const params = new URLSearchParams(searchParams);

    params.set('page', 1);

    if(e.target.value) {
      params.set('query', e.target.value)   // e.target.value.length > 2 &&
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)

  }, 300)


  return (
    <div className={styles.search}>
        <SearchIcon />
        <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} defaultValue={searchParams.get('query')?.toString()} />
    </div>
  )
}

export default SearchBar
