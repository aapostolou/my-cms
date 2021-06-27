import React from "react";

import styles from "./Header.module.scss";

const Header = ({ content }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>{content.logo}</div>
      </div>
    </header>
  );
};

export default Header;
