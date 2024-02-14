import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Api from "../../Services/api";
import SkeletonAccomodation from "../../components/Skeleton/SkeletonAccomodation";
import Error from "../../components/Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag";
import Accordion from "../../components/Accordion/Accordion";
import Rating from "../../components/Rating/Rating";
import styles from "./Accomodation.module.scss";
import PageNotFound from "../PageNotFound/PageNotFound";

function Accomodation() {
  const [accomodation, setAccomodation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const api = new Api();
        const dataResult = await api.getAccomodationById(id);
        setAccomodation(dataResult);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      fetchData();
    }, 2500);
  }, [id]);

  if (!accomodation && !isLoading) return <PageNotFound />;

  return (
    <>
      <main className={`${styles.main} pad`}>
        {isLoading && <SkeletonAccomodation />}
        {error && <Error />}
        {accomodation && !isLoading && (
          <>
            <section>
              <Carousel slides={accomodation.pictures} />
            </section>
            <section className={styles.infos}>
              <div className={styles.acc}>
                <h2>{accomodation.title}</h2>
                <p>{accomodation.location}</p>
                <div className={styles.tag_wrapper}>
                  {accomodation.tags.map((tag, index) => (
                    <Tag key={index} tag={tag} />
                  ))}
                </div>
              </div>
              <div className={styles.host}>
                <div className={styles.host_infos}>
                  <span>{accomodation.host.name}</span>
                  <img
                    src={accomodation.host.picture}
                    alt={`Photo ${accomodation.host.name}`}
                  />
                </div>

                <Rating rating={accomodation.rating} />
              </div>
            </section>
            <section className={styles.accordion_wrapper}>
              <Accordion
                title="Description"
                content={accomodation.description}
              />
              <Accordion
                title="Équipements"
                content={accomodation.equipments}
              />
            </section>
          </>
        )}
      </main>
    </>
  );
}

export default Accomodation;
