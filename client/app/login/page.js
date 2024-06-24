import Image from 'next/image';
import styles from '../ui/components/LoginPage/loginPage.module.css';
import Cartify from '../../public/images/coverLogin.jpg';
import Login from '../ui/components/Search/Checkout/Login/Login';



const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.background}>
                <Image className={styles.backgroundImg} src={Cartify} alt='cover' width={1980} height={1080} />
            </div>
            <div className={styles.loginContainer}>
                <Login sell={true} />
            </div>
        </div>
    </div>
  )
}

export default LoginPage
