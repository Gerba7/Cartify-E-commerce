'use client'

import styles from './discountInput.module.css';
import { toggleProduct } from '@/app/lib/actions';



const DiscountInput = ({bool, id, discountAmount}) => {


    const handleDiscount = (formData) => {
        let newDiscountAmount = formData.get('discount')
            
        if(newDiscountAmount) {
            toggleProduct(id, !bool, 'discount', newDiscountAmount)
        } else {
            console.log('No discount to apply')
        }
    }


    const handleCancelDiscount = () => {
        if(discountAmount) {
            toggleProduct(id, false, 'discount', 0)
        } else {
            console.log('No discount to cancel')
        }
    }


  return (
    <>
        {bool && discountAmount > 0 ? 
            <>
                <span className={styles.discountBadge}>- {discountAmount} %</span>
                <button className={`${styles.button} ${styles.cancel}`} onClick={handleCancelDiscount}>
                    Cancel
                </button>
            </>
        :
            <form action={handleDiscount}>
                <input className={styles.discountInput} id="discount" type="number" name='discount' max='99' min='1' maxLength='2' pattern='[0,9]*' /> 
                <span style={{marginRight: '8px'}}>%</span>
                <button type='submit' className={`${styles.button} ${styles.apply}`}>
                    Apply
                </button>
            </form>
        }
    </>
  )
}

export default DiscountInput
