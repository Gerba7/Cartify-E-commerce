import styles from './productsTableSkeleton.module.css';


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
]



const ProductsTableSkeleton = () => {


  return (
    <div className={styles.container}>
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <td className={styles.headers}>Name</td>
                    <td className={styles.headers}>Category</td>
                    <td className={styles.headers}>Price</td>
                    <td className={styles.headers}>Stock</td>
                    <td className={styles.headers}>Discount</td>
                    <td className={styles.headers}>Action</td>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {products && products?.map((product) => (
                    <tr className={styles.bodyRow} key={product?.id}>
                        <td>
                            <div className={styles.user}>
                                <div className={styles.userImage}></div>
                                <div className={styles.data}></div>
                            </div>
                        </td>
                        <td><div className={styles.data}></div></td>
                        <td><div className={styles.data}></div></td>
                        <td>
                            <div className={styles.data}></div>
                        </td>
                        <td>
                            <div className={styles.data}></div>
                        </td>
                        <td style={{display: 'flex', gap: '8px'}}>    
                            <div className={styles.data}></div>
                            <div className={styles.data}></div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductsTableSkeleton
