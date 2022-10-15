import React from "react";
import styles from './Header.module.css';
import Logo from '../../assets/logo-img.png';
import Portfolio from "../Portfolio/Portfolio";
import FutureValue from "../FutureValue/FutureValue";
import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div className={styles.container}>
        <div>
            <Link to="//react-stock-portfolio">
              <img className={styles.logo} src={Logo} alt="logo" />
            </Link>
        </div>
        <div className={styles.title}>
          <Link to="/react-stock-portfolio">
            <h1 className={styles.title}>Investation</h1>
          </Link>
        </div>
        <div className={styles.navigation}>
            <Link to="/react-stock-portfolio">
              <button className={styles.navBtn}>Home</button>
            </Link>
            <Link to="/portfolio">
              <button className={styles.navBtn}>Portfolio</button>
            </Link>
            <Link to="/future-value">
              <button className={styles.navBtn}>Future Value</button>
            </Link>
        </div>
        <div>
          <Link to="/profile">
            <button className={styles.profileBtn}>i</button>
          </Link>
        </div>
      </div>
  );
};

export default Header;
