import React from "react";
import styles from './Footer.module.css';
import Logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/react-stock-portfolio">
          <img className={styles.logo} src={Logo} alt="logo" />
        </a>
      </div>
      <div className={styles.links}>
        <a href="/future-value">
          <p>Future Value Calculator</p>
        </a>
        <a href="/about">
          <p>About Us</p>
        </a>
      </div>
      <div>
        <a href="/terms-of-service">
          <p>Terms of Service</p>
        </a>
        <a href="/privacy-policy">
          <p>Privacy Policy</p>
        </a>
      </div>
      <div className={styles.legal}>
        <p>
          The data returned by Investation is for information and educational purposes only. 
          Before making investment decisions, you should consider risk, timeframe, investment objectives, 
          diversification, and a company’s financial health. 
          The information from our site is not a recommendation to buy or sell a security. 
          All investors should consult a qualified professional before trading in any security. 
          Stock and option trading involves risk and is not suitable for all investors.
        </p>
        <p>Investation, Inc. © 2022</p>
      </div>
    </div>);
};

export default Footer;
