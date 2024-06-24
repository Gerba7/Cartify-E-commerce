import styles from './searchResultsSkeleton.module.css';


const products = [
    {
        id: 0,
    },
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
    },
]



const SearchResultsSkeleton = () => {
    
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div className={styles.container}>
        {products && products?.map((prod) => (
            <div key={prod?._id} className={styles.card}>
                <div className={styles.content}>
                    <div className={styles.background}>
                        <div className={styles.backgroundImg} width={300} height={300} />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.top}>
                            <div className={styles.data}>
                                <h4 className={styles.title}><div className={styles.dataContainer}></div></h4>
                                <div className={styles.ratings}>
                                    <div className={styles.year}></div>
                                    <div className={styles.comments}></div>
                                </div>
                            </div>
                            <div className={styles.badges}>
                                <div className={`${styles.badge} ${styles.green}`}></div>
                                <div className={`${styles.badge} ${styles.blue}`}></div>
                                <div className={`${styles.badge} ${styles.yellow}`}></div>
                                <div className={`${styles.badge} ${styles.red}`}></div>
                            </div>
                        </div>
                        <div className={styles.prices}>
                            <div className={styles.dataContainer}></div>
                        </div>
                    </div>
                </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default SearchResultsSkeleton