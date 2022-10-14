import React from "react";
import styles from './Header.module.css';
import Logo from '../../assets/logo-img.png';
import Portfolio from "../Portfolio/Portfolio";
import FutureValue from "../FutureValue/FutureValue";

const Header = () => {
  return (
      <div className={styles.container}>
        <div>
            <a href="//react-stock-portfolio">
              <img className={styles.logo} src={Logo} alt="logo" />
            </a>
        </div>
        <div className={styles.title}>
          <a href="/react-stock-portfolio">
            <h1 className={styles.title}>Investation</h1>
          </a>
        </div>
        <div className={styles.navigation}>
            <a href="/react-stock-portfolio">
              <button className={styles.navBtn}>Home</button>
            </a>
            <a href="/portfolio">
              <button className={styles.navBtn}>Portfolio</button>
            </a>
            <a href="/future-value">
              <button className={styles.navBtn}>Future Value</button>
            </a>
        </div>
        <div>
          <a href="/profile">
            <button className={styles.profileBtn}>i</button>
          </a>
        </div>
      </div>
  );
};

export default Header;
