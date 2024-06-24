import styles from './topCard.module.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';



const TopCard = ({card}) => {
  return (
    <div 
        className={styles.card} 
        key={card.id}
        style={{
            backgroundImage: `${
                  card.id === 1 ? 'linear-gradient(to right top, #009688, #209e91, #31a69a, #40aea3, #4db6ac)'
                : card.id === 0 ? 'linear-gradient(to right top, #03a9f4, #20b0f5, #32b6f6, #41bdf6, #4fc3f7)'
                : card.id === 2 ? 'linear-gradient(to right top, #ff9800, #ffa01e, #ffa830, #ffb03f, #ffb74d)'
                : card.id === 3 ? 'linear-gradient(to right top, #e91e63, #eb356f, #ed467b, #ef5587, #f06292)'
                : ''
            }`
        }}
    >
        <div className={styles.icon}>
            {card.icon}
        </div>
        <div className={styles.description}>
            <div className={styles.number}>{card.id !== 0 ? '$' : ''} {new Intl.NumberFormat().format(card.value)}</div>
            <div className={styles.bottom}>
                <div className={styles.name}>{card.name}</div>
                <div className={styles.percentage}>{card.percentage}</div>
                <TrendingUpIcon style={{fontSize: '14px'}} />
            </div>
        </div>
    </div>
  )
}

export default TopCard
