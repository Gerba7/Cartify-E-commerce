import styles from '../../ui/components/Search/loadingSearchSingle.module.css';
import Image from 'next/image';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Shift from '../../../public/icons/shift.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const LoadingSingle = () => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topBreadcrumb}>
            <div className={styles.dataContainer} style={{width: '80px'}} />
            |
            <div className={styles.dataContainer} style={{width: '80px'}} />
            |
            <div className={styles.dataContainer} style={{width: '80px'}} />
            |
            <div className={styles.dataContainer} style={{width: '80px'}} />
        </div>
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <div className={styles.mainImg}>
                      <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                    </div>
                    <div className={styles.secondayImgs}>
                        <div className={styles.littleImgContainer}>
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                        </div>
                        <div className={styles.littleImgContainer}>
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                        </div>
                        <div className={styles.littleImgContainer}>
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                        </div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}><div className={styles.dataContainer} /></h2>
                    <p className={styles.paragraph}>
                      <div className={styles.dataContainer} />
                    </p>
                </div>
                <hr className={styles.hr} />
            </div>
            <div className={styles.right}>
                <div className={styles.mainInfo}>
                    <h4 className={styles.topData}><span className={styles.year}><div className={styles.dataContainer} style={{width: '60px'}} /></span> | <span><div className={styles.dataContainer} style={{width: '60px'}} /></span></h4>
                    <h1 className={styles.title}><div className={styles.dataContainer} /></h1>
                    <div className={styles.priceContainer}>
                        <h3 className={styles.price}><div className={styles.dataContainer} /></h3>
                    </div>
                    <div className={styles.buttonContainer}>
                        <div className={styles.button}><div className={styles.dataContainer} /></div>
                        <div className={`${styles.button} ${styles.buttonBorder}`}><div className={styles.dataContainer} /></div>
                    </div>
                    <div className={styles.specsContainer}>
                        <div className={styles.spec}>
                            <div className={styles.icon}><LocalGasStationIcon fontSize='inherit' color='inherit' /></div>
                            <div className={styles.dataContainer} />
                        </div>
                        <div className={styles.spec}>
                            <div className={styles.icon}><Image src={Shift} width={24} height={24} alt='icon' /></div>
                            <div className={styles.dataContainer} />
                        </div>
                        <div className={styles.spec}>
                            <div className={styles.icon}><LocationOnIcon fontSize='inherit' color='inherit' /></div>
                            <div className={styles.dataContainer} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSingle