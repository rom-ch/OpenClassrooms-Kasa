import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="../../../assets/logo-white.svg" alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
