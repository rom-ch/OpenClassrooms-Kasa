import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../../assets/logo.svg";

function Header() {
  return (
    <header className={`${styles.header} pad`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
