import Filter from '@/app/ui/dashboard/common/Filter/Filter';
import styles from '../../ui/dashboard/orders/orders.module.css';
import SearchBar from '@/app/ui/dashboard/common/SearchBar/SearchBar';
import OrdersTable from '@/app/ui/dashboard/orders/OrdersTable/OrdersTable';
import OrdersTableSkeleton from '@/app/ui/dashboard/orders/OrdersTableSkeleton/OrdersTableSkeleton';
import { Suspense } from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PaymentIcon from '@mui/icons-material/Payment';
import DoneIcon from '@mui/icons-material/Done';



const Orders = ({searchParams}) => {

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
              filters={['Newest', 'Client (A-Z)', 'Client (Z-A)', 'Price (lowest first)', 'Price (highest first)']}
              defaultValue={'Newest'}
              type={'sort'}
            />
            <Filter 
              title={'By Status'} 
              icon={<DoneIcon fontSize='inherit' color='inherit' />} 
              icon2={<CheckBoxIcon fontSize='inherit' color='inherit' />}
              filters={['all', 'paid', 'pending', 'canceled']}
              defaultValue={'all'}
              type={'filter'}
            />
            <Filter 
              title={'By Payment'} 
              icon={<PaymentIcon fontSize='inherit' color='inherit' />} 
              icon2={<CheckBoxIcon fontSize='inherit' color='inherit' />}
              filters={['all', 'stripe', 'paypal', 'mercadopago']}
              defaultValue={'all'}
              type={'filter'}
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <Suspense key={query + currentPage + sort + filter} fallback={<OrdersTableSkeleton />}>
            <OrdersTable query={query} sort={sort} filter={filter} currentPage={currentPage} />
          </Suspense>
        </div>
    </div>
  )
}

export default Orders