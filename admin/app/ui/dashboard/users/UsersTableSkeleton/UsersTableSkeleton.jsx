import styles from './usersTableSkeleton.module.css';


const users = [
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



const UsersTableSkeleton = () => {


  return (
    <div className={styles.container}>
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <td className={styles.headers}>Name</td>
                    <td className={styles.headers}>Email</td>
                    <td className={styles.headers}>Created At</td>
                    <td className={styles.headers}>Role</td>
                    <td className={styles.headers}>Status</td>
                    <td className={styles.headers}>Action</td>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {users && users?.map((user) => (
                <tr className={styles.bodyRow} key={user?.id}>
                    <td>
                        <div className={styles.user}>
                            <div className={styles.userImage}></div>
                            <div className={styles.data}></div>
                        </div>
                    </td>
                    <td><div className={styles.data}></div></td>
                    <td><div className={styles.data}></div></td>
                    <td><div className={styles.data}></div></td>
                    <td><div className={styles.data}></div></td>
                    <td>
                        <div className={styles.data}></div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default UsersTableSkeleton
