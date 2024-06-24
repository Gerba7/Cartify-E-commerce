import Rules from '../Rules/Rules';
import styles from './form.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Paypal from '../../../../../../public/images/paypalLogo.png';
import MP from '../../../../../../public/images/mercadopagoLogo.webp';
import Stripe from '../../../../../../public/images/stripeLogo2.png';
import Image from 'next/image';



const Form = ({userData}) => {



  return (

        <div className={styles.formContainer}>
            <form id='contactForm' className={styles.container}>
                <h3>Enter your details</h3> 
                <div className={styles.info}>
                    <InfoOutlinedIcon style={{color: '#673ab7'}} />
                    <p style={{fontSize: '14px', fontWeight: 400}}>Almost done! Just fill in the * required info</p>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>First Name *</label>
                        <input className={styles.input} type='text' name='firstName' defaultValue={userData?.name} required/>
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Last Name *</label>
                        <input className={styles.input} type='text' name='lastName' defaultValue={userData?.surname} required/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Email Address *</label>
                        <input className={styles.input} type='text' name='email' defaultValue={userData?.email} required/>
                        <p style={{fontSize: '14px', fontWeight: 400, color: 'var(--textDark)', marginTop: '2px'}}>Confirmation email goes to this address</p>
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <hr className={styles.hr} />
                <h4>Your address</h4>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Address *</label>
                        <input className={styles.input} type='text' name='address' required/>
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>City *</label>
                        <input className={styles.input} type='text' name='city' required/>
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Zip Code</label>
                        <input style={{width: '50%'}} className={styles.input} type='text' name='zip' />
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Country/region *</label>
                        <input className={styles.input} type='text' name='country' required/>
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.inputContainer}>
                        <label className={styles.label}>Telephone *</label>
                        <input className={styles.input} type='text' name='phone' required/>
                    </div>
                    <div className={styles.inputContainer}>
                    </div>
                </div>
                <div className={styles.row} style={{flexDirection: 'column', gap: '0px'}}>
                    <div className={styles.inputContainer} style={{flexDirection: 'row', alignItems: 'center', gap: '16px'}}>
                        <input className={styles.input} type='checkbox' />
                        <p style={{fontSize: '14px', fontWeight: 400, color: 'var(--textDark)', marginTop: '2px'}}>Yes, I'd like free paperless recipt (recommended)</p>
                    </div>
                </div>
                <hr className={styles.hr} />
                <div className={`${styles.row} ${styles.paymentContainer}`}>
                    <h4>Payment Method</h4>
                    <div className={styles.paymentMethod} >
                        <div className={styles.paymentInputCont}>
                            <input className={`${styles.input} ${styles.paymentInput}`} id='paypal' name='paymentMethod' value='paypal' type='radio' />
                            <label htmlFor='paypal'><Image width={170} height={50} src={Paypal} alt='paypal' /></label>
                        </div>
                        <div className={styles.paymentInputCont}>
                            <input className={`${styles.input} ${styles.paymentInput}`} id='stripe' name='paymentMethod' value='stripe' type='radio' />
                            <label htmlFor='stripe'><Image width={120} height={50} src={Stripe} alt='stripe' /></label>
                        </div>
                        <div className={styles.paymentInputCont}>
                            <input className={`${styles.input} ${styles.paymentInput}`} id='mercadopago' name='paymentMethod' value='mercadopago' type='radio' />
                            <label htmlFor='mercadopago'><Image width={180} height={50} src={MP} alt='mercadopago' /></label>
                        </div>
                    </div>
                </div>
            </form>
            <Rules />
            <button type='submit' form='contactForm' className={styles.button}>Buy</button>
        </div>
  )
}

export default Form;
