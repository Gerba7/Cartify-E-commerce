'use client'

import styles from './priceInfo.module.css';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';





const PriceInfo = ({product}) => {




  return (
    <div className={styles.container}>
        <h4>Your price summary</h4> 
        <div className={styles.originalPrice}>
            <div className={styles.totalPrice}>
                <p className={styles.priceText}>Original price</p>
                <p className={`${styles.priceText} ${product?.discount && styles.lineThrough}`}>US${product.price && (product.price).toLocaleString('en-US')}</p>
            </div>
            {product?.discount ? 
                <div className={styles.totalPrice}>
                    <p className={styles.priceText}>Discount price</p>
                    <p className={`${styles.priceText} ${styles.color}`}>US$ {(product?.price * (1 - product?.discountAmount / 100)).toLocaleString('en-US')}</p>
                </div>
                :
                <></>
            }
        </div>
        <div className={styles.total}>
            <div className={`${styles.top}`}>
                <h2>Total</h2>
                <h2 className={styles.color}>US$ {product?.discount ? (product?.price * (1 - product?.discountAmount / 100)).toLocaleString('en-US') : (product?.price).toLocaleString('en-US')}</h2>
            </div>
            <div className={styles.bottom}>
                <p style={{display: 'flex', justifyContent: 'flex-end', fontSize: '14px', color: 'var(--textDark)'}}>Includes taxes and charges</p>
                <p style={{display: 'flex', justifyContent: 'flex-end', fontSize: '14px', color: 'var(--textDark)'}}>In property currency </p>
            </div>
        </div>
        <div className={styles.information}>
            <h4>Price information</h4> 
            <div className={styles.item}>
                <LocalAtmIcon />
                <p className={styles.infoText}>Includes US$ in taxes and charges</p>
            </div>
            <div className={styles.item}>
                <CurrencyExchangeIcon />
                <p className={styles.infoText}>This price is converted to show you the approximate cost in US$. The exchange rate may change before you pay.</p>
            </div>
            <div className={styles.item}>
                <PriceCheckIcon />
                <p className={styles.infoText}>Bear in mind that your card issuer may charge you a foreign transaction fee.</p>
            </div>
        </div>
    </div>
  )
}

export default PriceInfo;
