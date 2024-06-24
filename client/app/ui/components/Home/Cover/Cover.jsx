import Image from 'next/image';
import styles from './cover.module.css';
import Car from '../../../../../public/images/coverCar5.png'
import Link from 'next/link';




const Cover = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.title}>The best way to get<br/>your <span className={styles.titleColor}>dreams car</span></div>
          <div className={styles.buttonContainer}>
            <Link href={'/search'} className={styles.navButton}>Buy Now</Link>
            <Link href={'/sell'} className={styles.navButtonSell}>Sell Now</Link>
          </div>
          <div className={styles.subtitle}></div>
        </div>
        <div className={styles.right}>          
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={Car} alt='Car' priority />
            <div className={styles.light} />
            <div className={styles.light2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cover
