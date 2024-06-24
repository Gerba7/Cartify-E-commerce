import styles from './stepper.module.css';
import DoneIcon from '@mui/icons-material/Done';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CloseIcon from '@mui/icons-material/Close';




const Stepper = ({stepnum, status}) => {


    const steps = ['Your next car', 'Your details', 'Final step']

    const currentStep = stepnum;

  return (
    <div className={styles.container}>
        {steps?.map((step, i) => (
            <div className={`${styles.stepContainer} ${i + 1 < currentStep ? styles.complete : ''} ${currentStep === i + 1 ? styles.active : ''}`} key={step} >
                <div className={`${styles.step} ${currentStep === i + 1 ? styles.active : ''} ${i + 1 < currentStep ? styles.complete : ''}`} stat={status} >
                    {i + 1 < currentStep ? 
                    (status === 'failure' && i === 2 ? <CloseIcon size={24} />
                    : status === 'pending' && i === 2 ? <PriorityHighIcon size={24} />  
                    : <DoneIcon fontSize={'24px'} /> )
                    : i+1}
                </div>
                <p className={styles.stepText}>{step}</p>
            </div>
        ))}
    </div>
  )
}

export default Stepper
