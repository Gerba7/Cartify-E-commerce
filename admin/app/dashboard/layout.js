import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import styles from '../ui/dashboard/LayoutDashboard.module.css';
import Navbar from "../ui/dashboard/navbar/Navbar";





const Layout =({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}



export default Layout