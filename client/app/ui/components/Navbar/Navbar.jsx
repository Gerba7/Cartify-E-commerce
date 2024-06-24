'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import Cartify from '../../../../public/images/cartifyLogo.png';
import Image from 'next/image';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { logout } from '@/app/lib/actions';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';





const Navbar = ({user}) => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

    const pathname = usePathname();

    console.log(pathname)
    
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavHeight(true);
        } else {
            setNavHeight(false);
        }
    };

    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
      setDisplayMenu(true);
    }, [pathname]);


    const toggleMenu = (e) => {
      e.preventDefault()
      setDisplayMenu(!displayMenu)
    }


    return (
      <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <div className={styles.burger} onClick={e => toggleMenu(e)}> 
                <div className={styles.menuItem}>
                  {displayMenu ?  <MenuIcon color="#fff" style={{fontSize: 'inherit'}} /> 
                              :  <CloseIcon color="#fff" style={{fontSize: 'inherit'}} /> }
                </div>
              </div>
              <Link href='/' style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <Image src={Cartify} width={36} height={36} alt='logo' />
                  <h1 className={styles.title}>artify</h1>
              </Link>
              {pathname === '/login' ?
                <></>
                :
                <div className={styles.navItems}>
                  <Link className={styles.link} href='/search?condition=new' style={{width: 'max-content'}}>New Cars</Link>
                  <Link className={styles.link} href='/search?condition=used'>Used Cars</Link>
                  <div className={`${styles.link} ${styles.dropdown}`}>
                    About Us
                    <span className={styles.dropdownContent}>
                      <div className={styles.transparent}></div>
                      <Link className={styles.dropdownLink} href='/'>Emprendimientos</Link>
                      <Link className={styles.dropdownLink} href='/'>Viviendas</Link>
                    </span>
                  </div>
                  <Link className={styles.link} href='/contact'>Contact</Link>
                </div>
              }
          </div>
          {pathname === '/login' ?
            <></>
            :
            <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
                <Link href={'/search'} className={styles.navButton}>Buy Now</Link>
                <Link href={'/sell'} className={styles.navButtonSell}>Sell Now</Link>
                <div className={`${styles.dropdown}`}>
                  <div className={styles.icon}>
                    {user ?
                      <AccountCircleIcon className={styles.ico} color='inherit' fontSize='inherit'  />
                    :
                      <AccountCircleOutlinedIcon className={styles.ico} color='inherit' fontSize='inherit'  />
                    }
                  </div>
                  <span className={`${styles.dropdownContent} ${styles.rightContent}`}>
                      <div className={styles.transparent}></div>
                      {user ? 
                        <div className={styles.dropdownLink} onClick={() => logout()}>Logout<LogoutOutlinedIcon /></div>
                      :
                        <Link className={styles.dropdownLink} href={'/login'}>Login/Register<VpnKeyOutlinedIcon /></Link>
                      }
                  </span>
                </div>
            </div>
          }
        </div>
      </div>
    )
}

export default Navbar
