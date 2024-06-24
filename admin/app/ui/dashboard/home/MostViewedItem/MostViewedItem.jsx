import styles from './mostViewedItem.module.css';
import Image from 'next/image';




const MostViewedItem = () => {
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>Most Viewed Item</h3>
        <Image   alt='mostViewed' />
    </div>
  )
}

export default MostViewedItem
