import styles from './ordersTable.module.css';
import NoUser from '../../../../../public/images/noUser.png';
import Image from 'next/image';
import Button from '../../common/Button/Button';
import MP from '../../../../../public/images/mercadopagoLogo.webp';
import PP from '../../../../../public/images/paypalLogo.png';
import ST from '../../../../../public/images/stripeLogo.png';
import { fetchOrders } from '@/app/lib/actions';
import moment from 'moment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import DetailModal from './DetailModal/DetailModal';
import Pagination from '../../common/Pagination/Pagination';




const OrdersTable = async ({query, sort, filter, currentPage}) => {

    const orders = await fetchOrders(currentPage, 8, query, sort, filter, { cache: 'no-store' });

    const count = orders?.count;


  return (
    <>
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
                    {orders && orders?.orders?.map((order) => (
                        <tr className={styles.bodyRow} key={order?._id}>
                            <td>{moment(order?.createdAt).format('LL')}</td>
                            <td>
                                <div className={styles.user}>
                                    <Image src={order?.img || NoUser} alt={order?.id} width={32} height={32} className={styles.userImage} />
                                    <div>{order?.name} {order?.surname}</div>
                                </div>
                            </td>
                            <td>
                                {order?.status === 'paid' && <span className={styles.plus}>+</span>}
                                <div className={`${styles.price} ${order?.status === 'paid' && styles.paidPrice}`}>$ {new Intl.NumberFormat().format(order?.amount)}</div>     
                            </td>
                            <td>
                                <Image className={styles.paymentMethod} src={order?.paymentMethod === 'mercadopago' ? MP 
                                    : order?.paymentMethod === 'paypal' ? PP
                                    : order?.paymentMethod === 'stripe' ? ST
                                    : ''} 
                                    alt='paymentImage'
                                />     
                            </td>
                            <td>    
                                <div 
                                className={`${styles.status} 
                                    ${
                                        order?.status === 'paid' ? styles.paid 
                                        : order?.status === 'pending' ? styles.pending 
                                        : order?.status === 'canceled' ? styles.canceled 
                                        : ''
                                    }`}
                                >
                                    {order?.status}
                                </div>
                            </td>
                            <td style={{display: 'flex', gap: '8px'}}>
                                <Button type={'edit'} route={`/dashboard/orders/${order?._id}`} />
                                <Button type={'delete'} />
                            </td>
                            <td>
                                <div className={styles.orderDetail}>
                                    <DetailModal order={order} icon={<div className={styles.icon}><ListAltIcon color='inherit' fontSize='inherit' /></div>} />
                                    ID: # {order?._id.slice(order?._id.length - 7)}
                                </div>
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

export default OrdersTable
