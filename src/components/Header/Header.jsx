import React from "react";
import styles from './Header.module.css';
import Logo from '../../assets/logo-img.png';

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/">
          <img className={styles.logo} src={Logo} alt="logo" />
        </a>
      </div>
      <div className={styles.title}>
        <a href="/">
          <h1>Investation</h1>
        </a>
      </div>
      <div className={styles.navigation}>
        <a href="/">
          <button className={styles.navBtn}>Home</button>
        </a>
        <a href="/diversification">
          <button className={styles.navBtn}>Diversification</button>
        </a>
        <a href="/future-value">
          <button className={styles.navBtn}>Future Value</button>
        </a>
      </div>
      <div>
        <button className={styles.profileBtn}>i</button>
      </div>
    </div>
  );
};

export default Header;
