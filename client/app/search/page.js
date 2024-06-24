import { Suspense } from 'react';
import SearchBar from '../ui/components/Common/SearchBar/SearchBar';
import SearchResults from '../ui/components/Search/SearchResults/SearchResults';
import styles from '../ui/components/Search/search.module.css';
import FilterListIcon from '@mui/icons-material/FilterList';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import SearchResultsSkeleton from '../ui/components/Search/SearchResults/SearchResultsSkeleton/SearchResultsSkeleton';
import CloseIcon from '@mui/icons-material/Close';
import InputsContainer from '../ui/components/Search/Filters/InputsContainer/InputsContainer';
import Selectors from '../ui/components/Search/Filters/Selectors/Selectors';
import Dropdowns from '../ui/components/Search/Filters/Dropdowns/Dropdowns';
import { fetchBrands, fetchCategories } from '../lib/actions';
import Select from '../ui/components/Search/Filters/Select/Select';
import Filter from '../ui/components/Common/Filter/Filter';
import Link from 'next/link';




const Search = async ({searchParams}) => {

    const brand = searchParams?.brand || '';

    const model = searchParams?.model || '';

    const condition = searchParams?.condition || '';

    const category = searchParams?.category || '';

    const query = searchParams?.query || '';

    const sort = searchParams?.sort || '';

    const filter = searchParams?.filter || '';

    const minPrice = searchParams?.minPrice || '';

    const maxPrice = searchParams?.maxPrice || '';

    const minMileage = searchParams?.minMileage || '';

    const maxMileage = searchParams?.maxMileage || '';

    const minYear = searchParams?.minYear || '';

    const maxYear = searchParams?.maxYear || '';

    const currentPage = Number(searchParams?.page) || 1;

    const categories = await fetchCategories();

    const brands = await fetchBrands();
    
    
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.top}>
                <SearchBar />
            </div>
            <div className={styles.bottom}>
                <div className={styles.left}>
                    <div className={styles.filters}>
                        <div className={styles.top}>
                            <h2 className={styles.title}>Filter By:</h2>
                        </div>
                        <hr className={styles.hr}></hr>
                        <Selectors options={['all', 'new', 'used']} selector={'condition'} />
                        <hr className={styles.hr}></hr>
                        <InputsContainer title={'Price'} money={true} />
                        <hr className={styles.hr}></hr>
                        <InputsContainer title={'Mileage'} />
                        <hr className={styles.hr}></hr>
                        <Dropdowns options={categories} selector={'category'} />
                        <hr className={styles.hr}></hr>
                        <Dropdowns options={brands} selector={'brand'} />
                        <hr className={styles.hr}></hr>
                        <Selectors options={['all', 'manual', 'automatic']} selector={'transmission'} />
                        <hr className={styles.hr}></hr>
                        <Select title={'Year'} />
                        <hr className={styles.hr}></hr>
                        <Selectors options={['all', 'fuel', 'diesel', 'electric']} selector={'type'} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.tools}>
                    <Link href={'/search'} className={styles.clear}>
                        <span className={styles.icon}><CloseIcon color='inherit' fontSize='inherit' /></span>
                        <h4 className={styles.filterTitle}>Clear filters</h4>
                    </Link>
                    <Filter 
                        title={'Sort by'} 
                        icon={<FilterListIcon fontSize='inherit' color='inherit' />} 
                        icon2={<SwapVertIcon fontSize='inherit' color='inherit' />}
                        filters={['Newest', 'A-Z', 'Z-A', 'Price (lowest first)', 'Price (highest first)']}
                        defaultValue={'Newest'}
                        type={'sort'}
                    />
                    </div>
                    <Suspense key={currentPage + query + sort + filter + brand + model + condition + category + minPrice + maxPrice + minMileage + maxMileage + minYear + maxYear} fallback={<SearchResultsSkeleton />}>
                        <SearchResults 
                            currentPage={currentPage} 
                            query={query}
                            sort={sort}
                            filter={filter}
                            brand={brand} 
                            model={model} 
                            condition={condition} 
                            category={category}
                            minPrice={minPrice}
                            maxPrice={maxPrice}
                            minMileage={minMileage}
                            maxMileage={maxMileage}
                            minYear={minYear}
                            maxYear={maxYear}
                        />
                    </Suspense>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
