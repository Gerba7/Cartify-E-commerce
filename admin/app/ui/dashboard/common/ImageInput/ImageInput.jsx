'use client'

import { useState } from 'react';
import styles from './imageInput.module.css';
import Image from 'next/image';
import NoImage from '../../../../../public/images/no-image.png';



const ImageInput = ({id, placeholder}) => {

    const [file, setFile] = useState(placeholder);
    

    const handleChange = (e) => {
        setFile( URL.createObjectURL(e.target.files[0]));
    };
    

  return (
    <div key={id} className={styles.imageWrapper}>
        <label className={styles.imageLabel} htmlFor={id}>
            <Image src={file || NoImage} alt='Image Input' className={styles.image} width={100} height={200} />
        </label>
        <input 
            type='file' 
            name={id} id={id} 
            className={styles.imageInput} 
            onChange={handleChange} 
            style={{display: 'none'}} 
            accept="image/*" 
        />
    </div>
  )
}

export default ImageInput
