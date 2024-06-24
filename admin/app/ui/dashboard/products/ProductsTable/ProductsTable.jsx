import styles from './productsTable.module.css';
import NoUser from '../../../../../public/images/noUser.png';
import Image from 'next/image';
import Button from '../../common/Button/Button';
import SwitchToggle from '../../common/SwitchToggle/SwitchToggle';
import { fetchProducts } from '@/app/lib/httpRequests';
import { deleteProduct } from '@/app/lib/actions';
import Pagination from '../../common/Pagination/Pagination';
import DiscountInput from './DiscountInput/DiscountInput';





const ProductsTable = async ({query, sort, filter, currentPage}) => {

    const products = await fetchProducts(currentPage, 8, query, sort, filter, { cache: 'no-store' });
    
    const count = products?.count;

  return (
    <>
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
                {products && products?.products?.map((product) => (
                    <tr className={styles.bodyRow} key={product?._id}>
                        <td>
                            <div className={styles.product}>
                                <Image src={product?.img[0] || NoUser} alt={product?.name} width={32} height={32} className={styles.productImage} />
                                {product?.name}
                            </div>
                        </td>
                        <td style={{textTransform: 'capitalize'}}>{product?.category?.name}</td>
                        <td>$ {new Intl.NumberFormat().format(product?.price)}</td>
                        <td>
                            <SwitchToggle bool={product?.inStock} id={product?._id} type={'inStock'} />
                        </td>
                        <td>
                            <DiscountInput bool={product?.discount} id={product?._id} discountAmount={product?.discountAmount} />
                        </td>
                        <td style={{display: 'flex', gap: '8px'}}>    
                            <Button type={'edit'} route={`/dashboard/products/${product?._id}`} />
                            <Button type={'delete'} fn={deleteProduct} prodId={product?._id} />
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

export default ProductsTable
