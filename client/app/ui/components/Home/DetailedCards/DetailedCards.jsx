'use client'

import styles from './detailedCards.module.css';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from 'next/link';
import Image from 'next/image';
import SpeedIcon from '@mui/icons-material/Speed';




const DetailedCards = ({title, data, length}) => {

    const [slideIndex, setSlideIndex] = useState(0);

    
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : data.products.length - 1)
        } else {
            setSlideIndex(slideIndex < data.products.length - 4 ? slideIndex + 1 : 0)
        }

    }


  return (
    <div className={styles.container}>
        <div className={styles.headers}>
            <h2 className={styles.topTitle}>{title}</h2>
        </div>
        <div className={styles.wrapper}>
            {slideIndex > 0 ?
                <div className={`${styles.arrow} ${styles.left}`} onClick={() => handleClick("left")} >
                    <KeyboardArrowLeftIcon />
                </div>
                : <></>
            }
            <div className={styles.row}>
                <div className={`${styles.rowSlider}`}>
                    {data?.products && data?.products?.map((prod) => (
                        <div key={prod?._id} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                            <Link key={prod?._id} href={`/search/${prod._id}`} className={styles.content}>
                                <div className={styles.background}>
                                    <Image className={styles.backgroundImg} width={300} height={300} src={prod?.img && prod?.img[0]} alt={prod?.name} />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <div className={styles.data}>
                                            <h4 className={styles.title}>{prod?.name}</h4>
                                            <div className={styles.ratings}>
                                                <div className={styles.year}>{prod?.year || 0}</div>
                                                <div className={styles.comments}>· <span className={styles.mileageIcon}><SpeedIcon color='inherit' fontSize='inherit' /></span>{prod?.mileage > 0 ? prod?.mileage : 0} miles</div>
                                            </div>
                                        </div>
                                        <div className={styles.badges}>
                                            {/* <div className={`${styles.badge} ${styles.green}`}>{prod?.transmission}</div> */}
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
                    ))}
                    {data?.products && data?.products?.map((prod) => (
                        <div key={prod?._id} className={styles.card} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                            <Link key={prod?._id} href={`/search/${prod._id}`} className={styles.content}>
                                <div className={styles.background}>
                                    <Image className={styles.backgroundImg} width={300} height={300} src={prod?.img && prod?.img[0]} alt={prod?.name} />
                                </div>
                                <div className={styles.info}>
                                    <div className={styles.top}>
                                        <div className={styles.data}>
                                            <h4 className={styles.title}>{prod?.name}</h4>
                                            <div className={styles.ratings}>
                                                <div className={styles.year}>{prod?.year || 0}</div>
                                                <div className={styles.comments}>· <span className={styles.mileageIcon}><SpeedIcon color='inherit' fontSize='inherit' /></span>{prod?.mileage > 0 ? prod?.mileage : 0} miles</div>
                                            </div>
                                        </div>
                                        <div className={styles.badges}>
                                            {/* <div className={`${styles.badge} ${styles.green}`}>{prod?.transmission}</div> */}
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
                    ))}
                </div>
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
