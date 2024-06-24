'use client'

import styles from './detailedCards.module.css';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Image from 'next/image';





const DetailedCards = ({title, data}) => {

    const [slideIndex, setSlideIndex] = useState(0);

    let length = (data?.accomodations && data.accomodations.length)
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items.length - 1)
        } else {
            setSlideIndex(slideIndex < data.accomodations.length - 4 ? slideIndex + 1 : 0)
        }

    }


  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {slideIndex > 0 ?
                <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick("left")} >
                    <KeyboardArrowLeftIcon />
                </div>
                : <></>
            }
            <div className={styles.headers}>
                <h2 className={styles.topTitle}>{title}</h2>
            </div>
            <div className={styles.row}>
                {data?.accomodations && data?.accomodations?.map((ac) => (
                    <div key={ac?._id} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                        <Link href={`/search/${ac._id}`} className={styles.content}>
                            <div className={styles.background}>
                                <Image className={styles.backgroundImg} fill src={ac?.photos && ac?.photos[0]} alt='hotelImage' />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.top}>
                                    <h4 className={styles.title}>{ac?.name}</h4>
                                    <h6 className={styles.description}>{ac?.adress}</h6>
                                    <div className={styles.ratings}>
                                        <div className={styles.rate}>{ac?.rating || 0}</div>
                                        <div className={styles.comments}>· {ac?.reviews > 0 ? ac?.reviews : 0} reviews</div>
                                    </div>
                                </div>
                                <div className={styles.prices}>
                                    <p>From</p>
                                    <h3 className={styles.price}>US$ {new Intl.NumberFormat().format(ac?.startingPrice)}</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {slideIndex === (length) - 4 ?
                <></> :
                length > 4 &&
                <div className={`${styles.arrow} ${styles.right}`} onClick={() => handleClick("right")} >
                    <KeyboardArrowRightIcon />
                </div>
            }
        </div>
    </div>
  )
}

export default DetailedCards
