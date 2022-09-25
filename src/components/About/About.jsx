import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>About us</h1>
        <h2 className={styles.subTitle}>Stock Portfolio Tracking Simplified</h2>
      </div>
      <div className='mt-10 grid grid-cols-2'>
        <h2 className='mt-20 ml-60 text-[#9EEFE5]'>Retirement through Dividends.</h2>
        <div className='mt-5'>
          <h2 className='text-[#9EEFE5]'>How do I keep track of my dividend payments?</h2>
          <p className='mt-4'>A simple question that nearly all dividend investors have asked at one time or another.</p>
          <p className='mt-4'>Investation seeks to answer that simple question and give dividend investors the tools to optimize their portfolios.  Beyond simply keeping track of payments, Investation can help you improve diversification, dividend safety, and future income.  We have all the tools you need to analyze and optimize your funds.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
