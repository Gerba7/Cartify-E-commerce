'use client'

import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { Person } from '@mui/icons-material';
import SegmentIcon from '@mui/icons-material/Segment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';




const Navbar = () => {


  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <SegmentIcon /> 
        <div className={styles.title}>{pathname.split('/')[2] ? pathname.split('/')[2] : pathname.split('/')[1]}</div>
      </div>
      <div className={styles.icons}>
        <ChatIcon size={20} />
        <NotificationsIcon size={20} />
        <div className={styles.user}>
          <div className={styles.userImage}>
            <Person />
          </div>
          <div className={styles.userDetail}>
            <span className={styles.userName}>John Doe</span>
            <span className={styles.userTitle}>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
