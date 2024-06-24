import styles from './ordersTableSkeleton.module.css';


const orders = [
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



const OrdersTableSkeleton = () => {


  return (
    <div className={styles.container}>
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <td className={styles.headers}>Date</td>
                    <td className={styles.headers}>Client</td>
                    <td className={styles.headers}>Total</td>
                    <td className={styles.headers}>Payment Method</td>
                    <td className={styles.headers}>Status</td>
                    <td className={styles.headers}>Action</td>
                    <td className={styles.headers}>Detail</td>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {orders && orders?.map((order) => (
                    <tr className={styles.bodyRow} key={order?.id}>
                        <td>{order?.date}</td>
                        <td>
                            <div className={styles.user}>
                                <div className={styles.userImage}></div>
                                <div className={styles.data}></div>
                            </div>
                        </td>
                        <td>
                            <div className={styles.data}></div>     
                        </td>
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
                        <td><div className={styles.data}></div></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default OrdersTableSkeleton
