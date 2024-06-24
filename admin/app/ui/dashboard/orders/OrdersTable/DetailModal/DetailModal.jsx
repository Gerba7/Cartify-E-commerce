'use client'

import styles from './detailModal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import moment from 'moment';




export default function DetailModal({icon, order}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{icon}</div>
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
            <h3>Order Detail</h3>
            <h6 className={styles.subtitle}>Order Id: <span style={{fontWeight: '500'}}># {order?._id.slice(order?._id.length - 7)}</span></h6>
            <div className={styles.detailContainer}>
                <div className={styles.item}><span className={styles.li}>Date:</span> {moment(order?.createdAt).format('LL')}</div>
                <div className={styles.item}><span className={styles.li}>Client:</span> {order?.name} {order?.surname}</div>
                <div className={styles.item}><span className={styles.li}>Payment Method:</span> {order?.paymentMethod}</div>
                <div className={styles.item}><span className={styles.li}>Status:</span> {order?.status}</div>
                <div className={styles.item}><span className={styles.li}>Adress:</span> {order?.street} {order?.adressNum}, {order?.floor ? `${order?.floor} floor,` : ''} {order?.apartment ? `apartment ${order?.apartment},` : ''} {order?.city}, {order?.country}</div>
                <div className={styles.item}><span className={styles.li}>Postal:</span> {order?.postal}</div>
                <div className={styles.item}><span className={styles.li}>Phone:</span> {order?.phone}</div>
                <div className={styles.item}><span className={styles.li}>Email:</span> {order?.email}</div>
                <div className={styles.item}><span className={styles.li}>Personal ID:</span> {order?.personalId}</div>
                <div className={styles.item}><span className={styles.li}>Products:</span></div>
                <div className={styles.productContainer}>
                  {order?.products?.map((prod) => {
                    return (
                      <span className={styles.product} key={prod._id}>{prod.quantity} x {prod.name}</span>
                    )
                  })}
                </div>
            </div>
        </div>
      </Modal>
    </div>
  );
}

