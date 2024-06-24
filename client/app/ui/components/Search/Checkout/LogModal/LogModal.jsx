'use client'

import styles from './logModal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import UserCheck from '../Login/Login';
import CloseIcon from '@mui/icons-material/Close';




export default function LogModal({link}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={styles.link} onClick={handleOpen}>{link}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.box}>
          <div className={styles.closeButton} onClick={handleClose}>
              <CloseIcon color='inherit' /> 
          </div>
          <UserCheck />
        </div>
      </Modal>
    </div>
  );
}
