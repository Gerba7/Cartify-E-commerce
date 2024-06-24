import SaveButton from '@/app/ui/dashboard/common/SaveButton/SaveButton';
import styles from '../../../ui/dashboard/products/newProduct.module.css';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Input from '@/app/ui/dashboard/common/Input/Input';
import Textarea from '@/app/ui/dashboard/common/Textarea/Textarea';
import { createProduct, fetchBrands, fetchCategories } from '@/app/lib/actions';
import ImageInput from '@/app/ui/dashboard/common/ImageInput/ImageInput';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';
import Select from '@/app/ui/dashboard/common/Select/Select';
import Select2 from '@/app/ui/dashboard/common/Select2/Select2';
import SelectRow from '@/app/ui/dashboard/products/SelectRow/SelectRow';



const NewProduct = async () => {
    
    const categories = await fetchCategories();
    
    const brands = await fetchBrands();


  return (
    <form className={styles.container} action={createProduct}>
        <div className={styles.top}>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1vw'}}>
                <Link style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} href={'/dashboard/products'}>
                    <KeyboardArrowLeftIcon />
                </Link>
                <h3 className={styles.title}>Add New Product</h3>
            </div>
            <SaveButton 
                icon={<SaveAsIcon/>} 
                section={'Save Product'} 
                background={'linear-gradient(to right top, #673ab7, #7349bd, #7f58c2, #8a66c8, #9575cd)'} 
                type={'submit'}
            />
        </div>
        <div className={styles.bottom}>
            <div className={styles.left}>
                <div className={styles.leftTop}>
                    <div className={styles.mainImageContainer}>
                        <ImageInput id={'file1'} />
                    </div>
                </div>
                <div className={styles.leftBottom}>
                    <div className={styles.imagesContainer}>
                        <div className={styles.imgContainerUp}>
                            <ImageInput id={'file2'} />
                            <ImageInput id={'file3'} />
                            <ImageInput id={'file4'} />
                        </div>
                        <div className={styles.imgContainerUp}>
                            <ImageInput id={'file5'} />
                            <ImageInput id={'file6'} />
                            <ImageInput id={'file7'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                    <div className={styles.formContainer}>
                        <row className={styles.row}>
                            <Input name={'name'} label={'Name'} type={'text'} required={true} />
                            {/* <Select name={'brand'} label={'Brand'} type={'text'} required={true} options={brands} add={false} />
                            <Select name={'model'} label={'Model'} type={'text'} required={true} add={false} /> */}
                            <SelectRow brands={brands} />
                            <Input name={'year'} label={'Year'} type={'number'} required={true} />
                        </row>
                        <row className={styles.row}>
                            <Input name={'price'} label={'Price ($)'} type={'number'} required={true} />
                            <Select name={'category'} label={'Category'} type={'text'} required={true} options={categories} add={true} />
                            <Select2 name={'condition'} label={'Condition'} type={'text'} required={true} options={['used', 'new']} />
                            <Input name={'mileage'} label={'Mileage'} type={'number'} required={true} />
                        </row>
                        <row className={styles.row}>
                            <Input name={'location'} label={'Location'} type={'text'} required={true} />
                            <Input name={'stock'} label={'Stock'} type={'number'} />
                            <Select2 name={'type'} label={'Type'} type={'text'} options={['fuel', 'electric', 'hybrid', 'diesel']} />  
                            <Select2 name={'transmission'} label={'Transmission'} type={'text'} options={['manual', 'automatic']} />
                        </row>
                        <row className={styles.row} style={{height: '100%'}}>
                            <Textarea name={'description'} label={'Description'} type={'text'} required={true} />
                        </row>
                    </div>
            </div>
        </div>
    </form>
  )
}

export default NewProduct
