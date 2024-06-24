import { getProduct } from '@/app/lib/actions';
import styles from '../../ui/components/Search/searchSingle.module.css';
import Link from 'next/link';
import Image from 'next/image';
import NoPhotographyIcon from '@mui/icons-material/NoPhotography';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Shift from '../../../public/icons/shift.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ImageModal from '@/app/ui/components/Search/SingleSearch/ImageModal/ImageModal';
import CommentsForm from '@/app/ui/components/Search/SingleSearch/CommentsForm/CommentsForm';
import Comment from '@/app/ui/components/Search/SingleSearch/Comment/Comment';



const SearchSingle = async ({ params: {id} }) => {

    const product = await getProduct(id)


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.topBreadcrumb}>
            <Link className={styles.link} href='/'>Home</Link>
            |
            <Link className={styles.link} href={`/search?category=${product?.category?._id}`}>{product?.category?.name}</Link>
            |
            <Link className={styles.link} href={`/search?brand=${product?.brand?._id}`}>{product?.brand?.name}</Link>
            |
            <Link className={styles.link} href={`/search?model=${product?.model?._id}`}>{product?.model?.name}</Link>
        </div>
        <div className={styles.header}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <div className={styles.mainImg}>
                        {/* <Image src={product?.img[0]} className={styles.img} width={400} height={400} priority alt={product?.model.name} />  */}
                        <ImageModal product={product} head={<Image src={product?.img[0]} className={styles.img} width={400} height={400} priority alt={product?.model?.name} />} />
                    </div>
                    <div className={styles.secondayImgs}>
                        <div className={styles.littleImgContainer}>
                            {product?.img[0] ?
                            <Image src={product?.img[0]} className={styles.littleImg} width={100} height={100} alt={product?.model?.name} />
                            :
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                            }
                        </div>
                        <div className={styles.littleImgContainer}>
                            {product?.img[1] ?
                            <Image src={product?.img[1]} className={styles.littleImg} width={400} height={400} alt={product?.model?.name} />
                            :
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                            }
                        </div>
                        <div className={styles.littleImgContainer}>
                            {product?.img[2] ?
                                <ImageModal product={product} head={
                                <>
                                    <Image src={product?.img[2]} className={styles.littleImg} width={400} height={400} alt={product?.model?.name} />
                                    <div className={`${styles.moreImg} ${product?.img?.length > 3 ? styles.moreImgVisible: ''}`}>
                                        + {product?.img?.length - 3} photos
                                    </div>
                                </>}
                                />
                            :
                                <div className={styles.noImg}><NoPhotographyIcon fontSize='inherit' color='inherit' /></div>
                            }
                        </div>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>Description</h2>
                    <p className={styles.paragraph}>
                        {product?.description}
                    </p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.description}>
                    <h2 className={styles.descriptionTitle}>Questions</h2>
                </div>
                <CommentsForm />
                <Comment />
            </div>
            <div className={styles.right}>
                <div className={styles.mainInfo}>
                    <h4 className={styles.topData}><span className={styles.year}>{product?.year}</span> | <span>{(product?.mileage)?.toLocaleString('en-US')} mi.</span></h4>
                    <h1 className={styles.title}>{product?.name}</h1>
                    <div className={styles.priceContainer}>
                        <h3 className={styles.price}>$ {(product?.price)?.toLocaleString('en-US')}</h3>
                        {product?.discount ? 
                            <div className={styles.discount}>
                                <span className={styles.discBadge}>{product?.discountAmount}% off</span>
                                <h3 className={styles.oldPrice}>US$ {(product?.price).toLocaleString('en-US')}</h3>
                            </div>
                            :
                            <></>
                        }
                    </div>
                    <div className={styles.buttonContainer}>
                        <Link href={`/search/${product._id}/checkout`} className={styles.button}>Buy</Link>
                        <button className={`${styles.button} ${styles.buttonBorder}`}>Whatsapp</button>
                    </div>
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
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSingle
