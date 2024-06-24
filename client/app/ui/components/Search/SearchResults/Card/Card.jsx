import Link from 'next/link';
import styles from './card.module.css';
import Image from 'next/image';
import SpeedIcon from '@mui/icons-material/Speed';




const Card = ({prod}) => {



  return (
    <div key={prod?._id} className={styles.card}>
        <Link href={`/search/${prod._id}`} className={styles.content}>
            <div className={styles.background}>
                <Image className={styles.backgroundImg} width={300} height={300} src={prod?.img && prod?.img[0]} alt={prod?.name} />
            </div>
            <div className={styles.info}>
                <div className={styles.top}>
                    <div className={styles.data}>
                        <h4 className={styles.title}>{prod?.name}</h4>
                        <div className={styles.ratings}>
                            <div className={styles.year}>{prod?.year || 0}</div>
                            <div className={styles.comments}>· <span className={styles.mileageIcon}><SpeedIcon color='inherit' fontSize='inherit' /></span>{prod?.mileage > 0 ? (prod?.mileage).toLocaleString('en-US') : 0} miles</div>
                        </div>
                    </div>
                    <div className={styles.badges}>
                        <div className={`${styles.badge} ${styles.blue}`}>{prod?.type}</div>
                        <div className={`${styles.badge} ${styles.yellow}`}>{prod?.category?.name}</div>
                        <div className={`${styles.badge} ${styles.red}`}>{prod?.transmission}</div>
                    </div>
                </div>
                <div className={`${styles.prices} ${prod?.discount && styles.justifyCenter}`}>
                    {prod?.discount ? 
                        <div className={styles.discount}>
                            <h3 className={styles.oldPrice}>US$ {(prod?.price).toLocaleString('en-US')}</h3>
                            <span className={styles.discBadge}>{prod?.discountAmount}% off</span>
                        </div>
                        :
                        <></>
                    }
                    <h3 className={styles.price}>US$ {prod?.discount ? (prod?.price * (1 - prod?.discountAmount / 100)).toLocaleString('en-US') : (prod?.price).toLocaleString('en-US')}</h3>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default Card
