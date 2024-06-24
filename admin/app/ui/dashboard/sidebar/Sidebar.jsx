import MenuLink from './menuLink/MenuLink';
import styles from './sidebar.module.css';
import PersonIcon from '@mui/icons-material/Person';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'next/image';
import AustralisLogo from '../../../../public/images/Australis_Mark.png';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReceiptIcon from '@mui/icons-material/Receipt';




const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <SpaceDashboardIcon />,
  },
  {
    title: "Users",
    path: "/dashboard/users",
    icon: <PersonIcon />,
  },
  {
    title: "Products",
    path: "/dashboard/products",
    icon: <InventoryIcon />,
  },
  {
    title: "Orders",
    path: "/dashboard/orders",
    icon: <ReceiptIcon />,
  },
  {
    title: "Analytics",
    path: "/dashboard/analytics",
    icon: <QueryStatsIcon />,
  },
  {
    title: "Settings",
    path: "/dashboard/settings",
    icon: <SettingsIcon />,
  },
];



const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src={AustralisLogo} alt='Australis' width={200} priority={true} />
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
            <MenuLink item={cat} key={cat.title} />
        ))}
      </ul>
      <div className={styles.logoutContainer}>
        <button className={styles.logout}>
          <LogoutIcon />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
