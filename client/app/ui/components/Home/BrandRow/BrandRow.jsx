import styles from './brandRow.module.css';
import Alfa from '../../../../../public/icons/alfa-romeo.png';
import Audi from '../../../../../public/icons/audi.png';
import Fiat from '../../../../../public/icons/fiat.png';
import Ford from '../../../../../public/icons/ford.png';
import Honda from '../../../../../public/icons/honda.png';
import Jaguar from '../../../../../public/icons/jaguar.png';
import Lamborghini from '../../../../../public/icons/lamborghini.png';
import Lexus from '../../../../../public/icons/lexus.png';
import Maserati from '../../../../../public/icons/maserati.png';
import MercedesBenz from '../../../../../public/icons/mercedes-benz.png';
import Mitsubishi from '../../../../../public/icons/mitsubishi.png';
import Peugeot from '../../../../../public/icons/peugeot.png';
import Porsche from '../../../../../public/icons/porsche.png';
import Ram from '../../../../../public/icons/ram.png';
import Tesla from '../../../../../public/icons/tesla.png';
import Toyota from '../../../../../public/icons/toyota.png';
import Volkswagen from '../../../../../public/icons/volkswagen.png';
import Image from 'next/image';
import Link from 'next/link';




const BrandRow = () => {

    const images = [
        {
            id: '664f7f03d3b51abf3c87a5a5',
            name: 'alfa-romeo',
            src: Alfa
        },
        {
            id: '664f822ad3b51abf3c87a5b7',
            name: 'audi',
            src: Audi
        },
        {
            id: '664f822ad3b51abf3c87a5b9',
            name: 'fiat',
            src: Fiat
        },
        {
            id: '664f822ad3b51abf3c87a5bb',
            name: 'ford',
            src: Ford
        },
        {
            id: '664f822ad3b51abf3c87a5bd',
            name: 'honda',
            src: Honda
        },
        {
            id: '664f822bd3b51abf3c87a5bf',
            name: 'jaguar',
            src: Jaguar
        },
        {
            id: '664f822bd3b51abf3c87a5c1',
            name: 'lamborghini',
            src: Lamborghini
        },
        {
            id: '664f822bd3b51abf3c87a5c3',
            name: 'lexus',
            src: Lexus
        },
        {
            id: '664f822bd3b51abf3c87a5c5',
            name: 'maserati',
            src: Maserati
        },
        {
            id: '664f822bd3b51abf3c87a5c7',
            name: 'mercedes-benz',
            src: MercedesBenz
        },
        {
            id: '664f822bd3b51abf3c87a5c9',
            name: 'mitsubishi',
            src: Mitsubishi
        },
        {
            id: '664f822bd3b51abf3c87a5cb',
            name: 'peugeot',
            src: Peugeot
        },
        {
            id: '664f822bd3b51abf3c87a5cd',
            name: 'porsche',
            src: Porsche
        },
        {
            id: '664f822bd3b51abf3c87a5cf',
            name: 'ram',
            src: Ram
        },
        {
            id: '664f822bd3b51abf3c87a5d1',
            name: 'tesla',
            src: Tesla
        },
        {
            id: '664f822cd3b51abf3c87a5d3',
            name: 'toyota',
            src: Toyota
        },
        {
            id: '664f822cd3b51abf3c87a5d5',
            name: 'volkswagen',
            src: Volkswagen
        },
    ]
    

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row}>
            <div className={styles.rowSlider}>
                {images.map((img) => {
                    return(
                        <Link key={img.id} href={`/search?brand=${img.id}`}>
                            <Image src={img.src} className={styles.logo} alt={img.name} height={100} />
                        </Link>
                    )
                })}
                {images.map((img) => {
                    return(
                        <Link key={img.id + 16} href={`/search?brand=${img.id}`}>
                            <Image src={img.src} className={styles.logo} alt={img.name} height={100} />
                        </Link>
                    )
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default BrandRow
