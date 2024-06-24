import Textarea from '../../../Common/Textarea/Textarea';
import styles from './commentsForm.module.css';




const CommentsForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Textarea />
        <button className={styles.button}>Ask</button>
      </form>
    </div>
  )
}

export default CommentsForm
