'use client'

import styles from './modal.module.css';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { BASE_URL } from '../../../../lib/httpRequests';
import { revalidatePath } from 'next/cache';
import { createCategory, deleteCategory } from '@/app/lib/actions';




export default function BasicModal({content, categories}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
      <div onClick={handleOpen}>{content}</div>
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
            <h3>Add Category</h3>
            <form className={styles.inputContainer} action={createCategory}>
                <input className={styles.input} type='text' name='name' />
                <button type='submit' className={styles.addButton}>Add</button>
            </form>
            <div className={styles.categoryContainer}>
                {categories.map((cat) => {
                    return (
                        <div key={cat._id} className={styles.category}>
                            <h3 className={styles.categoryTitle}>{cat.name}</h3>
                            <button className={styles.deleteButton} onClick={() => deleteCategory(cat._id)}>
                                <HighlightOffIcon fontSize='inherit' color='inherit' />
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
      </Modal>
    </div>
  );
}

