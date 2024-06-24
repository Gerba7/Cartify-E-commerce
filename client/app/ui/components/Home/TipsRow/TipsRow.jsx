import styles from './tipsRow.module.css';
import Milage from '../../../../../public/images/milage.jpg';
import Verification from '../../../../../public/images/verification.jpg';
import Image from 'next/image';





const TipsRow = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <div className={styles.slide}>
                <div className={styles.background}>
                    <Image className={styles.backgroundImg} src={Verification} alt='offer' />
                </div>
                <div className={styles.jumbotron}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>Used car checklist</h3>
                        <h6 className={styles.description}>Use our comprehensive checklist to ensure you know what to look for when buying a used car.</h6>
                        <button className={styles.button}>View More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.slide}>
                <div className={styles.background}>
                    <Image className={styles.backgroundImg} src={Milage} alt='offer' />
                </div>
                <div className={styles.jumbotron}>
                    <div className={styles.info}>
                        <h3 className={styles.title}>Buying a used car</h3>
                        <h6 className={styles.description}>Looking to buy a used car? Here's some help and advice to get you through to purchase.</h6>
                        <button className={styles.button}>View More</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TipsRow
