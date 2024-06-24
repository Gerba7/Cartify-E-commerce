import styles from './footer.module.css';
import Image from 'next/image';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';




const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <h1 className={styles.title}>cartify</h1>
                {/* <Image src={Sabbia_Logo} alt='sabbia logo' width={200} height={40} /> */}
                <h3 className={styles.subtitle}>Connect with us</h3>
                <div className={styles.socialContainer}>
                    <Link href='https://api.whatsapp.com/send?phone=' className={`${styles.socialIcon} ${styles.whatsapp}`}>
                        <WhatsAppIcon />
                    </Link>
                    <Link href='' className={`${styles.socialIcon} ${styles.facebook}`}>
                        <FacebookIcon />
                    </Link>
                    <div className={`${styles.socialIcon} ${styles.instagram}`}>
                        <InstagramIcon />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.linkedin}`}>
                        <LinkedInIcon />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.youtube}`}>
                        <YouTubeIcon />
                    </div>
                    <div className={`${styles.socialIcon} ${styles.x}`}>
                        <XIcon />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>PRODUCTS</div>
                <Link className={styles.link} href='/search?condition=new' >New cars</Link>
                <Link className={styles.link} href='/search?condition=used' >Used cars</Link>
                <Link className={styles.link} href='/sell' >Sell car</Link>
                <Link className={styles.link} href='/search?category=electric' >Electric</Link>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>RESOURCES</div>
                <Link className={styles.link} href='' >Blog</Link>
                <Link className={styles.link} href='' >FAQ</Link>
                <Link className={styles.link} href='' >Contact Us</Link>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionTitle}>ABOUT</div>
                <Link className={styles.link} href='' >Cartify</Link>
                <Link className={styles.link} href='' >Team</Link>
                <Link className={styles.link} href='' >Carrers</Link>
                <Link className={styles.link} href='' >Investors</Link>
                <Link className={styles.link} href='' >Sponsors</Link>
                <Link className={styles.link} href='' >Developers</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
