import styles from './terms.module.css';





const Terms = () => {




  return (
        <div className={styles.container}>
            <h3>Terms & conditions</h3> 
            <p style={{fontSize: '14px'}}>Your contact would like you to agree to the following security rules:</p>
            <ul style={{marginLeft:'25px', display: 'flex', flexDirection: 'column', gap: '1vh'}}>
                <li style={{fontSize: '14px'}}>You must be at least 18 years of age to use our website.</li>
                <li style={{fontSize: '14px'}}>All bids placed on our website are legally binding.</li>
                <li style={{fontSize: '14px'}}>Buyers are responsible for any taxes, fees, or shipping costs associated with the purchase.</li>
                <li style={{fontSize: '14px'}}>All vehicles are sold "as-is" and "where-is."</li>
                <li style={{fontSize: '14px'}}>We strive to provide accurate and detailed information about each vehicle listed on our website.</li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '14px'}}>By continuing to the next step, you are agreeing to these terms & conditions.</p>
        </div>
  )
}

export default Terms;
