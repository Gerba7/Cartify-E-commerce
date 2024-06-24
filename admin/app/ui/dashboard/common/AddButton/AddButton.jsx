import styles from './addButton.module.css';
import Link from 'next/link'



const AddButton = ({route, section, icon, background}) => {


  return (
    <Link className={styles.link} href={route} style={{color: 'var(--bgGray)', background: `${background}` }}>
        {icon} {section}
    </Link>
  )
}

export default AddButton
