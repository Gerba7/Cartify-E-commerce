'use client'

import styles from './productInfo.module.css';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Shift from '../../../../../../public/icons/shift.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';





const HotelInfo = ({product}) => {


  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p className={styles.subText}>{product?.brand?.name} {product?.model?.name}</p>
            {/* <div style={{marginLeft: '5px'}}>
                {accommodation?.stars > 0 && Array.from({ length: accommodation?.stars }, (_, index) => (
                    <span className={styles.stars} key={index}><StarIcon color='inherit' fontSize='inherit'/></span>
                ))} 
            </div> */}
        </div>
        <h4>{product?.name}</h4>
        {/* <h4 style={{fontSize: '14px', fontWeight: 400}}>{product?.location}</h4> */}
        <div className={styles.imgContainer}>
            <Image className={styles.img} src={product.img[0]} width={200} height={100} alt={product.name} />
        </div>
        <div className={styles.ratings}>
            <div className={styles.year}>{product?.year}</div>
            <p className={styles.subText}>· {product?.mileage || 0} mi.</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5vh'}}>
            <div className={styles.specsContainer}>
                <div className={styles.spec}>
                    <div className={styles.icon}><LocalGasStationIcon fontSize='inherit' color='inherit' /></div>
                    <p className={styles.text}>{product?.type}</p>
                </div>
                <div className={styles.spec}>
                    <div className={styles.icon}><Image src={Shift} width={24} height={24} alt='icon' /></div>
                    <p className={styles.text}>{product?.transmission}</p>
                </div>
                <div className={styles.spec}>
                    <div className={styles.icon}><LocationOnIcon fontSize='inherit' color='inherit' /></div>
                    <p className={styles.text}>{product?.location}</p>
                </div>
            </div>
            {/* {accommodation?.services?.map((service) => {
            const matchingService = icons.find((icon) => icon.value === service);
            return (
                <div className={styles.service} key={matchingService.id}>
                    <span style={{color: '#673ab7', fontSize: '18px'}}>{matchingService?.icon}</span>
                    <span style={{fontSize:'14px'}}>{service}</span>
                </div>
            );
            })} */}
        </div>
    </div>
  )
}

export default HotelInfo
