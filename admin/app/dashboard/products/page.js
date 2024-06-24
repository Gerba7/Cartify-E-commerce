import ProductsTable from '@/app/ui/dashboard/products/ProductsTable/ProductsTable';
import styles from '../../ui/dashboard/products/products.module.css';
import SearchBar from '@/app/ui/dashboard/common/SearchBar/SearchBar';
import AddButton from '@/app/ui/dashboard/common/AddButton/AddButton';
import AddIcon from '@mui/icons-material/Add';
import { Suspense } from 'react';
import ProductsTableSkeleton from '@/app/ui/dashboard/products/ProductsTableSkeleton/ProductsTableSkeleton';
import Filter from '@/app/ui/dashboard/common/Filter/Filter';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CategoryIcon from '@mui/icons-material/Category';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { fetchCategories } from '@/app/lib/actions';



const Products = async ({searchParams}) => {

  const query = searchParams?.query || '';

  const sort = searchParams?.sort || '';

  const filter = searchParams?.filter || '';

  const currentPage = Number(searchParams?.page) || 1;

  const categories = await fetchCategories();

  const categoryNames = categories.map(category => category.name);

  categoryNames.unshift('All')
  

  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.tools}>
              <SearchBar />
              <Filter 
                title={'Sort by'} 
                icon={<FilterListIcon fontSize='inherit' color='inherit' />} 
                icon2={<SwapVertIcon fontSize='inherit' color='inherit' />}
                filters={['Newest', 'A-Z', 'Z-A', 'Price (lowest first)', 'Price (highest first)']}
                defaultValue={'Newest'}
                type={'sort'}
              />
              <Filter 
                title={'By Category'} 
                icon={<CategoryIcon fontSize='inherit' color='inherit' />} 
                icon2={<CheckBoxIcon fontSize='inherit' color='inherit' />}
                filters={categoryNames}
                defaultValue={'All'}
                type={'filter'}
              />
            </div>
            <AddButton route={'/dashboard/products/new'} icon={<AddIcon/>} section={'New Product'} background={'linear-gradient(to right top, #673ab7, #7349bd, #7f58c2, #8a66c8, #9575cd)'} />
        </div>
        <div className={styles.bottom}>
          <Suspense key={query + currentPage + sort + filter} fallback={<ProductsTableSkeleton />}>
            <ProductsTable query={query} sort={sort} filter={filter} currentPage={currentPage} />
          </Suspense>
        </div>
    </div>
  )
}

export default Products
