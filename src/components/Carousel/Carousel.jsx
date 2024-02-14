import { useState } from "react";
import styles from "./Carousel.module.scss";

function Carousel({ title, slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <div className={styles.carousel}>
      {slides.length > 1 && (
        <>
          <button
            className={`${styles.btn} ${styles.btn_left}`}
            onClick={goToPrevious}
          >
            <img src="../../../assets/chevron_left.svg" alt="chevron left" />
          </button>
          <button
            className={`${styles.btn} ${styles.btn_right}`}
            onClick={goToNext}
          >
            <img src="../../../assets/chevron_right.svg" alt="chevron right" />
          </button>
          <span className={styles.photo_index}>
            {currentIndex + 1}/{slides.length}
          </span>
        </>
      )}

      <img className={styles.slide} src={slides[currentIndex]} alt={title} />
    </div>
  );
}

export default Carousel;
