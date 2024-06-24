import LogModal from '../LogModal/LogModal';
import styles from './userHeader.module.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';




const UserHeader = () => {
  return (
    <div className={styles.info}>
        <div className={styles.icon}>
            <PersonOutlineIcon fontSize='inherit' color='inherit' />
        </div>
        <div className={styles.paragraph}><span className={styles.link}><LogModal link={'Sign in'} /></span> to book with your saved details or <span className={styles.link}><LogModal link={'register'} /></span> to manage your purchases!</div>
    </div>
  )
}

export default UserHeader
