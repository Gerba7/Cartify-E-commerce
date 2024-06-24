import styles from './row.module.css';
import Image from 'next/image';
import Sedan from '../../../../../public/icons/sedan.png';
import Hatchback from '../../../../../public/icons/hatchback.png';
import MiniVan from '../../../../../public/icons/minivan.png';
import PickUp from '../../../../../public/icons/pick-up.png';
import Sport from '../../../../../public/icons/sport.png';
import Jeep from '../../../../../public/icons/jeep.png';
import SUV from '../../../../../public/icons/suv.png';
import Link from 'next/link';



const Row = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href={`/search?category=6655e58c8d5ce4a0b0695837`} className={styles.iconContainer}>
            <Image src={Sedan} alt='Sedan' width={100} height={100} />
            <h3 className={styles.iconName}>Sedan</h3>
            <div className={styles.light}></div>
            <div className={styles.light2}></div>
        </Link>
        <Link href={`/search?category=664e3c2c8374276dd7468ae7`}  className={styles.iconContainer}>
            <Image src={Hatchback} alt='Hatchback' width={100} height={100} />
            <h3 className={styles.iconName}>Hatchback</h3>
            <div className={styles.light} style={{top: '43%', left: '5%'}}></div>
            <div className={styles.light2}></div>
        </Link>
        <Link href={`/search?category=664e3c1c8374276dd7468ae4`}  className={styles.iconContainer}>
            <Image src={SUV} alt='SUV' width={100} height={100} />
            <h3 className={styles.iconName}>SUV</h3>
            <div className={styles.light} style={{top: '43%', left: '4%'}}></div>
            <div className={styles.light2} style={{top: '43%', right: '7%'}}></div>
        </Link>
        <Link href={`/search?category=663bbce2f202b64cef24bca1`}  className={styles.iconContainer}>
            <Image src={MiniVan} alt='Vans' width={100} height={100} />
            <h3 className={styles.iconName}>Vans</h3>
            <div className={styles.light} style={{top: '43%', left: '5%'}}></div>
            <div className={styles.light2} style={{top: '40%', right: '1%'}}></div>
        </Link>
        <Link href={`/search?category=664e3c3e8374276dd7468aea`}  className={styles.iconContainer}>
            <Image src={PickUp} alt='PickUp' width={100} height={100} />
            <h3 className={styles.iconName}>Pick-Up</h3>
            <div className={styles.light} style={{top: '40%', left: '5%'}}></div>
            <div className={styles.light2} style={{top: '39%', right: '3%'}}></div>
        </Link>
        <Link href={`/search?category=664e3c088374276dd7468ada`}  className={styles.iconContainer}>
            <Image src={Sport} alt='Sport' width={100} height={100} />
            <h3 className={styles.iconName}>Sport</h3>
            <div className={styles.light} style={{top: '42%', left: '5%'}}></div>
            <div className={styles.light2} style={{top: '39%', right: '2%'}}></div>
        </Link>
        <Link href={`/search?category=664e3c468374276dd7468aed`}  className={styles.iconContainer}>
            <Image src={Jeep} alt='Jeep' width={100} height={100} />
            <h3 className={styles.iconName}>Jeep</h3>
            <div className={styles.light}></div>
            <div className={styles.light2}></div>
        </Link>
      </div>
    </div>
  )
}

export default Row
