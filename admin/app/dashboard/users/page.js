import SearchBar from '@/app/ui/dashboard/common/SearchBar/SearchBar';
import styles from '../../ui/dashboard/users/users.module.css';
import UsersTable from '@/app/ui/dashboard/users/UsersTable/UsersTable';
import { Suspense } from 'react';
import UsersTableSkeleton from '@/app/ui/dashboard/users/UsersTableSkeleton/UsersTableSkeleton';
import Filter from '@/app/ui/dashboard/common/Filter/Filter';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CategoryIcon from '@mui/icons-material/Category';
import CheckBoxIcon from '@mui/icons-material/CheckBox';




const User = async ({searchParams}) => {

  const query = searchParams?.query || '';

  const sort = searchParams?.sort || '';

  const filter = searchParams?.filter || '';

  const currentPage = Number(searchParams?.page) || 1;



  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.tools}>
            <SearchBar />
            <Filter 
                title={'Sort by'} 
                icon={<FilterListIcon fontSize='inherit' color='inherit' />} 
                icon2={<SwapVertIcon fontSize='inherit' color='inherit' />}
                filters={['Newest', 'A-Z', 'Z-A']}
                defaultValue={'Newest'}
                type={'sort'}
              />
              <Filter 
                title={'By Role'} 
                icon={<CategoryIcon fontSize='inherit' color='inherit' />} 
                icon2={<CheckBoxIcon fontSize='inherit' color='inherit' />}
                filters={['All', 'Client', 'Admin']}
                defaultValue={'All'}
                type={'filter'}
              />
          </div>
        </div>
        <div className={styles.bottom}>
          <Suspense key={query + currentPage + sort + filter} fallback={<UsersTableSkeleton />}>
            <UsersTable query={query} sort={sort} filter={filter} currentPage={currentPage} />
          </Suspense>
        </div>
    </div>
  )
}

export default User
