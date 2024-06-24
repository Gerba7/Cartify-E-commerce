'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './pagination.module.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const Pagination = ({currentPage, count, totalPages}) => {

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get('page') || 1;

  const params = new URLSearchParams(searchParams);
  const itemPerPage = 9;

  const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count;


  const handleChangePage = (type) => {
    if (type === 'prev') {
      params.set('page', parseInt(page) - 1);
    } else {
      params.set('page', parseInt(page) + 1);
    }
    replace(`${pathname}?${params}`)
  }


  const handleSetPage = (page) => {

    params.set('page', parseInt(page));

    replace(`${pathname}?${params}`);

  }


  const getPageRange = (currentPage, totalPages) => {
    if (totalPages < 4) {
      return [];
    }
    let pageRange = [1, 2, 3];
    if (currentPage > 1 && currentPage !== totalPages) {
      pageRange.length = 0;
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
      pageRange.push(currentPage + 1);
    } else if (currentPage === totalPages) {
      pageRange.length = 0;
      pageRange.push(currentPage - 2);
      pageRange.push(currentPage - 1);
      pageRange.push(currentPage);
    }
    return pageRange;
  };

  const renderPageButtons = () => {
    let result = [];
    for (let i = 1; i < totalPages + 1; i++) {
      result.push(
        <button
          key={i}
          className={currentPage === i ? `${styles.button} ${styles.buttonActive}` : `${styles.button}`}
          onClick={() => handleSetPage(i)}
        >
          {i}
        </button>
      );
    }
    return result;
  };


  
  return (
    <div className={styles.container}>
        <button className={styles.button} disabled={!hasPrev} onClick={() => handleChangePage('prev')}><KeyboardArrowLeftIcon fontSize='inherit' /></button>
        {totalPages < 4 && renderPageButtons()}
        {currentPage >= totalPages - 2 && totalPages > 3 && (
          <>
            <button
              className={currentPage === 1 ? `${styles.button} ${styles.buttonActive}` : `${styles.button}`}
              onClick={() => handleSetPage(1)}
            >
              1
            </button>
            <div className={styles.button}>
              <MoreHorizIcon style={{width: '20px'}}/>
            </div>
          </>
        )}
        {getPageRange(currentPage, totalPages).map((page) => (
          <button
            key={page}
            className={page === currentPage ? `${styles.button} ${styles.buttonActive}` : `${styles.button}`}
            onClick={() => handleSetPage(page)}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages - 2 && totalPages > 3 && (
          <>
            <div className={styles.button}>
              <MoreHorizIcon style={{width: '20px'}}/>
            </div>
            <button
              className={
                totalPages === currentPage ? `${styles.button} ${styles.buttonActive}` : `${styles.button}`
              }
              onClick={() => handleSetPage(totalPages)}
            >
              {totalPages}
            </button>
          </>
        )}
        <button className={styles.button} disabled={!hasNext} onClick={() => handleChangePage('next')}><KeyboardArrowRightIcon fontSize='inherit' /></button>
    </div>
  )
}

export default Pagination
