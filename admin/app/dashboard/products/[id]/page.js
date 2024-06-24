import styles from '../../../ui/dashboard/products/singleProduct.module.css';
import Input from '@/app/ui/dashboard/common/Input/Input';
import Textarea from '@/app/ui/dashboard/common/Textarea/Textarea';
import { fetchBrands, fetchCategories, getProduct, updateProduct } from '@/app/lib/actions';
import ImageInput from '@/app/ui/dashboard/common/ImageInput/ImageInput';
import SaveButton from '@/app/ui/dashboard/common/SaveButton/SaveButton';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Select from '@/app/ui/dashboard/common/Select/Select';
import Select2 from '@/app/ui/dashboard/common/Select2/Select2';
import SelectRow from '@/app/ui/dashboard/products/SelectRow/SelectRow';



const SingleProduct = async ({ params: {id} }) => {

    const product = await getProduct(id);

    const categories = await fetchCategories();

    const brands = await fetchBrands();
    
    
    

  return (
    <form className={styles.container} action={updateProduct}>
        <div className={styles.top}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1vw'}}>
                <Link style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} href={'/dashboard/products'}>
                    <KeyboardArrowLeftIcon />
                </Link>
                <h3 className={styles.title}>{product?.name}</h3>
            </div>
            <SaveButton 
                icon={<SaveAsIcon />} 
                section={'Save Changes'} 
                background={'linear-gradient(to right top, #673ab7, #7349bd, #7f58c2, #8a66c8, #9575cd)'} 
                type={'submit'}
            />
        </div>
        <div className={styles.bottom}>
            <div className={styles.left}>
                <div className={styles.leftTop}>
                    <div className={styles.mainImageContainer}>
                        <ImageInput id={'file1'} placeholder={product?.img[0]} />
                    </div>
                </div>
                <div className={styles.leftBottom}>
                    <div className={styles.imagesContainer}>
                        <div className={styles.imgContainerUp}>
                            <ImageInput id={'file2'} placeholder={product?.img[1]} />
                            <ImageInput id={'file3'} placeholder={product?.img[2]} />
                            <ImageInput id={'file4'} placeholder={product?.img[3]} />
                        </div>
                        <div className={styles.imgContainerUp}>
                            <ImageInput id={'file5'} placeholder={product?.img[4]} />
                            <ImageInput id={'file6'} placeholder={product?.img[5]} />
                            <ImageInput id={'file7'} placeholder={product?.img[6]} />
                        </div>
                        {/* <Image className={styles.image} src={NoImage} alt='ProductImg' priority={true} />
                        <Image className={styles.image} src={NoImage} alt='ProductImg' priority={true} />
                        <Image className={styles.image} src={NoImage} alt='ProductImg' priority={true} /> */}
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                    <div className={styles.formContainer}>
                        <div className={styles.row}>
                            <input name={'id'} defaultValue={product._id} type='text' style={{display: 'none'}} />
                            <Input name={'name'} label={'Product Name'} type={'text'} required={true} placeholder={product?.name} />
                            {/* <Input name={'brand'} label={'Brand'} type={'text'} placeholder={product?.brand} />
                            <Input name={'model'} label={'Model'} type={'text'} placeholder={product?.model} /> */}
                            <SelectRow brands={brands} placeholder1={product?.brand?.name} placeholder2={product?.model} />
                            <Input name={'year'} label={'Year'} type={'number'} placeholder={product?.year} />
                        </div>
                        <div className={styles.row}>
                            <Input name={'price'} label={'Price ($)'} type={'number'} required={true} placeholder={product?.price} />
                            <Select name={'category'} label={'Category'} type={'text'} required={true} placeholder={product?.category?.name} options={categories} add={true} />
                            <Select2 name={'condition'} label={'Condition'} type={'text'} placeholder={product?.condition} options={['used', 'new']} />
                            <Input name={'mileage'} label={'Mileage'} type={'number'} placeholder={product?.mileage} required={true} />
                        </div>
                        <div className={styles.row}>
                            <Input name={'location'} label={'Location'} type={'text'} placeholder={product?.location} />
                            <Input name={'stock'} label={'Stock'} type={'number'} />
                            <Select2 name={'type'} label={'Type'} type={'text'} placeholder={product?.type} options={['fuel', 'electric', 'hybrid', 'diesel']} />
                            <Select2 name={'transmission'} label={'Transmission'} type={'text'} placeholder={product?.transmission} options={['manual', 'automatic']} />
                        </div>
                        <div className={styles.row} style={{height: '100%'}}>
                            <Textarea name={'description'} label={'Description'} type={'text'} required={true} placeholder={product?.description} />
                        </div>
                    </div>
            </div>
        </div>
    </form>
  )
}

export default SingleProduct
