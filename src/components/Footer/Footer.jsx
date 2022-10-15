import React from "react";
import styles from './Footer.module.css';
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/react-stock-portfolio">
          <img className={styles.logo} src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/future-value">
          <p>Future Value Calculator</p>
        </Link>
        <Link to="/about">
          <p>About Us</p>
        </Link>
      </div>
      <div>
        <Link to="/terms-of-service">
          <p>Terms of Service</p>
        </Link>
        <Link to="/privacy-policy">
          <p>Privacy Policy</p>
        </Link>
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
