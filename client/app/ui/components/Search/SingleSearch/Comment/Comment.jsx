import styles from './comment.module.css';




const Comment = () => {


  return (
    <div className={styles.container}>
        <div className={styles.commentContainer}>
            <p className={styles.username}>James</p>
            <p className={styles.text}>How much??</p>
            {/* <button className={styles.replyButton}></button> */}
            <p className={styles.commentTime}>12/03/2024</p>
        </div>
        <div className={styles.replyContainer}>
            <div className={styles.commentContainer}>
                <div className={styles.text}></div>
                <div className={styles.text}></div>
                {/* <button className={styles.replyButton}></button> */}
                <div className={styles.commentTime}></div>
            </div>

        </div>
    </div>
  )
}

export default Comment
