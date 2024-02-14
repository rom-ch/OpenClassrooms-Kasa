import { Link } from "react-router-dom";
import styles from "./Thumbnail.module.scss";

function Thumbnail({ title, cover, id }) {
  return (
    <Link
      to={`/accomodation/${id}`}
      className={styles.thumbnail}
      style={{ backgroundImage: `url(${cover})` }}
    >
      <h3>{title}</h3>
    </Link>
  );
}

export default Thumbnail;
