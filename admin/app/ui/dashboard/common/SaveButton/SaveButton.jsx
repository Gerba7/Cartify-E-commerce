import styles from './saveButton.module.css';
import Link from 'next/link'



const SaveButton = ({route, section, icon, background, type, onClick}) => {


  return (
    <button className={styles.link} href={route} style={{color: 'var(--bgGray)', background: `${background}` }} onClick={onClick} type={type}>
        {icon} {section}
    </button>
  )
}

export default SaveButton
