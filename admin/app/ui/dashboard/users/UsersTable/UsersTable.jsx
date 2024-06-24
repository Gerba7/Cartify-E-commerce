import styles from './usersTable.module.css';
import NoUser from '../../../../../public/images/noUser.png';
import Image from 'next/image';
import Button from '../../common/Button/Button';
import { fetchUsers } from '@/app/lib/actions';
import Pagination from '../../common/Pagination/Pagination';
import moment from 'moment';




const UsersTable = async ({query, sort, filter, currentPage}) => {

    const users = await fetchUsers(currentPage, 8, query, sort, filter, { cache: 'no-store' });
    
    const count = users?.count;


  return (
    <>
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
                {users && users?.users?.map((user) => (
                    <tr className={styles.bodyRow} key={user?._id}>
                        <td>
                            <div className={styles.user}>
                                <Image src={user?.img || NoUser} alt={user?.id} width={32} height={32} className={styles.userImage} />
                                <div>{user?.name} {user?.surname}</div>
                            </div>
                        </td>
                        <td>{user?.email}</td>
                        <td>{moment(user?.createdAt).format('LL')}</td>
                        <td>{user?.isAdmin ? 'Admin' : 'Client'}</td>
                        <td>{user?.isActive ? 'Active' : 'Passive'}</td>
                        <td>
                            <Button type={'delete'} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <Pagination currentPage={currentPage} count={count} />
    </>
  )
}

export default UsersTable
