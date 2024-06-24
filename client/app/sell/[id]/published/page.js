import Link from 'next/link';
import styles from '../../../ui/components/Sell/Published/published.module.css';



const Published = ({ params: {id} }) => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.top}>
                <h3>Congratulations!</h3>
                <h2>Your car has been published</h2>
            </div>
            <div className={styles.bottom}>
                <p className={styles.paragraph}>
                    Your vehicle has been successfully published on our platform. It's now visible to potential buyers.
                </p>
                <div className={styles.buttons}>
                    <Link href={'/'} className={styles.button2}>Home</Link>
                    <Link href={`/search/${id}`} className={styles.button}>See publication</Link>
                    <Link href={'/search'} className={styles.button}>Buy</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Published
