

import styles from './rules.module.css';





const Rules = () => {




  return (
        <div className={styles.container}>
            <h3>Review security rules</h3> 
            <p style={{fontSize: '14px'}}>Your contact would like you to agree to the following security rules:</p>
            <ul style={{marginLeft:'25px', display: 'flex', flexDirection: 'column', gap: '1vh'}}>
                <li style={{fontSize: '14px'}}>Meet in Safe Locations</li>
                <li style={{fontSize: '14px'}}>Bring a Friend</li>
                <li style={{fontSize: '14px'}}>Verify Vehicle Information</li>
                <li style={{fontSize: '14px'}}>Check Seller Reviews</li>
                <li style={{fontSize: '14px'}}>Limit Sharing Personal Details</li>
            </ul>
            <p style={{fontWeight: 'bold', fontSize: '14px'}}>By continuing to the next step, you are agreeing to these security rules.</p>
        </div>
  )
}

export default Rules;
