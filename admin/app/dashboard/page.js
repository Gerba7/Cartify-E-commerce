import styles from '../ui/dashboard/dashboard.module.css';
import TopCard from '../ui/dashboard/home/TopCard/TopCard';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MainChart from '../ui/dashboard/home/MainChart/MainChart';
import Table from '../ui/dashboard/home/Table/Table';
import MostViewedItem from '../ui/dashboard/home/MostViewedItem/MostViewedItem';


const cardContent = [
  {
    id: 0,
    name: 'Users',
    percentage: '15%',
    icon: <PersonIcon style={{fontSize: 'inherit'}} />,
    value: 12345
  },
  {
    id: 1,
    name: 'Sales',
    percentage: '15%',
    icon: <AccountBalanceIcon style={{fontSize: 'inherit'}} />,
    value: 234345
  },
  {
    id: 2,
    name: 'Sales',
    percentage: '15%',
    icon: <AttachMoneyIcon style={{fontSize: 'inherit'}} />,
    value: 1234
  },
  {
    id: 3,
    name: 'Sales',
    percentage: '15%',
    icon: <CreditCardIcon style={{fontSize: 'inherit'}} />,
    value: 123452
  },
]


const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <div className={styles.top}>
        {cardContent.map((card) => {
          return(
            <TopCard key={card.id} card={card} />
          )
        })}
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <div className={styles.chart}>
            <MainChart />
          </div>
          <div className={styles.leftBottom}>
            <div className={styles.box1}>
              <MostViewedItem />
            </div>
            <div className={styles.box2}>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Table />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Dashboard
