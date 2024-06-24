'use client'

import Image from 'next/image';
import styles from './whyRow.module.css';
import Car from '../../../../../public/images/carwhy.png';
import Wheel from '../../../../../public/images/wheel.png';
import { useEffect, useRef, useState } from 'react';




const WhyRow = () => {

  const [animate, setAnimate] = useState(false);

  const animationRef = useRef();


  useEffect(() => {

    const animationObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (animationRef.current) {
      animationObserver.observe(animationRef.current);
    }

    return () => {

      if (animationRef.current) {
        animationObserver.unobserve(animationRef.current);
      }

    };

  }, [])



  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={`${styles.imgContainer} ${animate ? styles.animateCar : ''}`}>
            <Image src={Car} className={styles.car} alt='audiR8' />
            <Image src={Wheel} className={`${styles.frontWheel} ${animate ? styles.animateWheel : ''}`} ref={animationRef} alt='wheel' />
            <Image src={Wheel} className={`${styles.bottomWheel} ${animate ? styles.animateWheel : ''}`} alt='wheel' />
            <div className={`${styles.frontLight} ${animate ? styles.unhideText : ''}`}></div>
            <div className={`${styles.frontLight2} ${animate ? styles.unhideText : ''}`}></div>
            <div className={`${styles.backLight} ${animate ? styles.unhideText : ''}`}></div>
            <div className={`${styles.backLight2} ${animate ? styles.unhideText : ''}`}></div>
            <div className={`${styles.backLight3} ${animate ? styles.unhideText : ''}`}></div>
        </div>
        <div className={`${styles.textContainer} ${animate ? styles.unhideText : ''}`}>
            <h2 className={styles.title}>Why Shop With Us?</h2>
            <p className={styles.paragraph}>
                Every vehicle is rigorously inspected for safety and performance. 
                Find both new and used cars to suit any need and budget. 
                Enjoy great deals and transparent pricing. 
            </p>
            <p className={styles.paragraph}>
                Our knowledgeable team helps you find the perfect car. 
                Customized financing options to fit your budget. 
                Hassle-free buying experience with excellent after-sales support. 
                Read real reviews from satisfied customers.
            </p>
        </div>
      </div>
    </div>
  )
}

export default WhyRow
