import styles from './table.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MP from '../../../../../public/images/mercadopagoLogo.webp';
import PP from '../../../../../public/images/paypalLogo.png';
import ST from '../../../../../public/images/stripeLogo.png';
import Image from 'next/image';
import { fetchOrders } from '@/app/lib/actions';
import moment from 'moment';




const Table = async () => {

    const lastSales = await fetchOrders(1, 8, '', 'Newest', '', { cache: 'no-store' });

    
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Last Sales</h3>
      <table className={styles.mainTable}>
        <tbody className={styles.tableBody}>
            {lastSales?.orders?.map((sale) => {
                return (
                    <tr key={sale._id} className={styles.row}>
                        <td className={styles.column}>
                            <div className={styles.date}>{moment(sale.createdAt).format('LL')}</div>
                        </td>
                        <td className={styles.column}>
                            <Image className={styles.paymentMethod} src={sale.paymentMethod === 'mercadopago' ? MP 
                                : sale.paymentMethod === 'paypal' ? PP
                                : sale.paymentMethod === 'stripe' ? ST
                                : ''} 
                                alt='paymentImage'
                            /> 
                        </td>
                        <td className={styles.column}>
                            {sale.status === 'paid' && <span className={styles.plus}>+</span>}
                            <div className={`${styles.price} ${sale.status === 'paid' && styles.paidPrice}`}>$ {new Intl.NumberFormat().format(sale.amount)}</div> 
                        </td>
                        <td className={styles.column}>
                            <div 
                              className={`${styles.status} 
                                ${
                                      sale.status === 'paid' ? styles.paid 
                                    : sale.status === 'pending' ? styles.pending 
                                    : sale.status === 'canceled' ? styles.canceled 
                                    : ''
                                }`}
                            >
                                {sale.status}
                            </div>
                        </td>
                        <td>
                            <MoreVertIcon />
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
