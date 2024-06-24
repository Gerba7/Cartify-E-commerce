'use client'

import { useState } from 'react';
import styles from './filter.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';




const Filter = ({title, icon, icon2, filters, defaultValue, type}) => {
  
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const sortInitialValue = searchParams.get('sort');
  const filterInitialValue = searchParams.get('filter');
  
  const params = new URLSearchParams(searchParams);

  const [openFilters, setOpenFilters] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    type === 'sort' ? (sortInitialValue !== null ? sortInitialValue : defaultValue) : (filterInitialValue !== null ? filterInitialValue : defaultValue)
  );


  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  }



  const handleFilter = (filter) => {

    setSelectedFilter(filter)

    params.set('page', 1);

    if(type === 'sort')  {
      
      params.set('sort', filter.toString())

    } else if (type === 'filter') {

      params.set('filter', filter.toString())

    } 

    replace(`${pathname}?${params.toString()}`)

  }
  

  return (
    <div className={`${styles.container} ${defaultValue !== selectedFilter ? `${styles.selectedContainer} ${styles.active}` : ''}`} onClick={handleOpenFilters}>
      <div className={`${styles.icon} ${defaultValue !== selectedFilter ? styles.selectedColor : ''}`}>{icon}</div>
      <h4 className={`${styles.filterTitle} ${defaultValue !== selectedFilter ? styles.selectedColor : ''}`}>{title}: <span style={{textTransform: 'capitalize'}}>{selectedFilter}</span></h4>
      <div className={`${styles.icon} ${defaultValue !== selectedFilter ? styles.selectedColor : ''}`}>{icon2}</div>
      {openFilters &&
        <div className={styles.filtersContainer}>
          {filters.map((filter) => {
            return(
              <div key={filter} className={styles.filter} onClick={() => handleFilter(filter)}>{filter}</div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Filter
