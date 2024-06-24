import { createProduct, fetchBrands, fetchCategories } from '../lib/actions';
import ImageInput from '../ui/components/Common/ImageInput/ImageInput';
import Input from '../ui/components/Common/Input/Input';
import Select from '../ui/components/Common/Select/Select';
import Select2 from '../ui/components/Common/Select2/Select2';
import Textarea from '../ui/components/Common/Textarea/Textarea';
import SelectRow from '../ui/components/Sell/SelectRow/SelectRow';
import Terms from '../ui/components/Sell/Terms/Terms';
import styles from '../ui/components/Sell/sell.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Car from '../../public/images/jumbotron.jpg';
import Image from 'next/image';
import { cookies } from 'next/headers';
import SellButton from '../ui/components/Sell/SellButton/SellButton';




const Sell = async () => {

  const categories = await fetchCategories();
    
  const brands = await fetchBrands();

  const user = cookies().get('user')?.value;

  const userId = user ? JSON.parse(user)?._id : null;

  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles.background}>
              <Image className={styles.backgroundImg} src={Car} alt='offer' />
          </div>
          <div className={styles.jumbotron}>
            <h2>Sell now</h2>
          </div>
        </div>
        <form className={styles.body} action={createProduct}>
          <div className={styles.leftCol}>
            <div className={styles.imgInputs}>
              <h3>Select images</h3>
              <div className={styles.images}>
                <div className={styles.imgTop}>
                  <ImageInput id={'file1'} />
                </div>
                <div className={styles.imgBottom}>
                  <ImageInput id={'file2'} />
                  <ImageInput id={'file3'} />
                  <ImageInput id={'file4'} />
                </div>
                <div className={styles.imgBottom}>
                  <ImageInput id={'file5'} />
                  <ImageInput id={'file6'} />
                  <ImageInput id={'file7'} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.formContainer}>
              <h3>Enter the car details</h3> 
              <div className={styles.info}>
                  <InfoOutlinedIcon style={{color: '#009688'}} />
                  <p style={{fontSize: '14px', fontWeight: 400}}>Fill in the * required info</p>
              </div>
              <div className={styles.row}>
                  <Input name={'name'} label={'Name *'} type={'text'} required={true} />
                  <div style={{flex: 1}}></div>
              </div>
              <div className={styles.row}>
                  <SelectRow brands={brands} />
              </div>
              <hr className={styles.hr} />
              <div className={styles.row}>
                  <Input name={'price'} label={'Price ($) *'} type={'number'} required={true} />
                  <Select name={'category'} label={'Category *'} type={'text'} required={true} options={categories} />
              </div>
              <div className={styles.row}>
                  <Select2 name={'condition'} label={'Condition *'} type={'text'} required={true} options={['used', 'new']} />
                  <Input name={'mileage'} label={'Mileage *'} type={'number'} required={true} />
              </div>
              <div className={styles.row}>
                  <Input name={'location'} label={'Location *'} type={'text'} required={true} />
                  <Input name={'year'} label={'Year *'} type={'number'} required={true} />
              </div>
              <div className={styles.row}>
                  <Select2 name={'type'} label={'Type *'} type={'text'} options={['fuel', 'electric', 'hybrid', 'diesel']} />  
                  <Select2 name={'transmission'} label={'Transmission *'} type={'text'} options={['manual', 'automatic']} />
              </div>
              <div className={styles.row} style={{height: '100%'}}>
                  <Textarea name={'description'} label={'Description'} type={'text'} required={true} />
                  <input name='user' value={userId} style={{display: 'none'}} required={true} />
              </div>
            </div>
            <Terms />
            <SellButton />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sell
