import Stepper from '@/app/ui/components/Search/Checkout/Stepper/Stepper';
import styles from '../../../ui/components/Search/Checkout/checkout.module.css';
import ProductInfo from '@/app/ui/components/Search/Checkout/ProductInfo/ProductInfo';
import PriceInfo from '@/app/ui/components/Search/Checkout/PriceInfo/PriceInfo';
import { getProduct } from '@/app/lib/actions';
import UserCheck from '@/app/ui/components/Search/Checkout/UserCheck/UserCheck';





const Checkout = async ({ params : {id}}) => {

    const product = await getProduct(id)

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <Stepper stepnum={2} />
            <div className={styles.body}>
                <div className={styles.leftCol}>
                    <ProductInfo product={product} />
                    <PriceInfo product={product} />
                </div>
                <div className={styles.rightCol}>
                    <UserCheck />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout
