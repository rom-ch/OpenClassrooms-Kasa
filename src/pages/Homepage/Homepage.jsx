import { useEffect, useState } from "react";
import Api from "../../Services/api";
import Hero from "../../components/Hero/Hero";
import Error from "../../components/Error/Error";
import Thumbnail from "../../components/Thumbnail/Thumbnail";
import styles from "./Homepage.module.scss";
import SkeletonGallery from "../../components/Skeleton/SkeletonGallery";
import heroImg from "../../../assets/homepage-hero.png";

function Homepage() {
  const [accomodationList, setAccomodationList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      setIsLoading(true);
      try {
        const api = new Api();
        const data = await api.getAccomodations();
        setAccomodationList(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2500);
  }, []);

  return (
    <>
      <Hero
        type="home"
        heroImg={heroImg}
        title="Chez vous, partout et ailleurs"
      />
      <main className={`${styles.main} pad`}>
        {isLoading && <SkeletonGallery />}
        {error && <Error />}
        {accomodationList &&
          accomodationList.map(acc => (
            <Thumbnail
              key={acc.id}
              title={acc.title}
              id={acc.id}
              cover={acc.cover}
            />
          ))}
      </main>
    </>
  );
}

export default Homepage;
