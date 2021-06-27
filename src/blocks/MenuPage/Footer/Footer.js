import React from "react";

import styles from "./Footer.module.scss";

const Footer = ({ content }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}></div>
    </footer>
  );
};

export default Footer;
