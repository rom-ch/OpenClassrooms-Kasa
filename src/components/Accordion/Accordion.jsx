import { useState } from "react";
import styles from "./Accordion.module.scss";

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const contentType = Array.isArray(content) ? (
    <ul>
      {content.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ul>
  ) : (
    <p>{content}</p>
  );

  function handleOpen() {
    setIsOpen(o => !o);
  }

  return (
    <div className={styles.accordion}>
      <div className={styles.accordion__header} onClick={handleOpen}>
        <span>{title}</span>
        <span>
          <img
            src="../../../assets/chevron_down.svg"
            alt=""
            style={{ transform: isOpen ? "rotate(180deg)" : "" }}
          />
        </span>
      </div>
      <div
        className={styles.accordion__content}
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div>{contentType}</div>
      </div>
    </div>
  );
}

export default Accordion;
