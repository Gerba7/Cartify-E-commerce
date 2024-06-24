'use client'

import styles from './ImageModal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import MiniSlider from '../MiniSlider/MiniSlider';





export default function ImageModal({product, head}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  

  return (
     <>
      <div onClick={handleOpen} style={{cursor: 'pointer'}}>{head}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{outline: 'none'}}
      >
        <div className={styles.box}>
            <div className={styles.closeButton} onClick={handleClose}>
                <CloseIcon color='inherit' /> 
            </div>
            <div className={styles.right}>
                <MiniSlider items={product} />
            </div>
        </div>
      </Modal>
      </>
  );
}

