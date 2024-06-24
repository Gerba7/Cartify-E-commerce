'use client'

import Link from 'next/link';
import styles from './button.module.css';



const Button = ({type, fn, prodId, route}) => {

    const handleClick = (e) => {
        e.preventDefault()
        fn(prodId)
    }


  return (
    <>
      {type === 'delete' ? 
          <button 
            className={`${styles.button} ${
                type === 'delete' ? styles.delete
              : type === 'create product' ? styles.save
              : type === 'apply' ? styles.apply
              : ''}`} 
            onClick={(e) => handleClick(e)}
          >
              {type}
          </button>
        : type === 'edit' ?
          <Link className={`${styles.button} ${styles.edit}`} href={route}>
            {type}
          </Link>
        :
        <></>
    }
    </>
  )
}

export default Button
