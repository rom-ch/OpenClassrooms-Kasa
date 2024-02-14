import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <>
      <main className={styles.main}>
        <h1>404</h1>
        <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </main>
    </>
  );
}

export default PageNotFound;
