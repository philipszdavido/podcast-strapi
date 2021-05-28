import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import PodCard from "../components/PodCard";
import { useEffect, useState } from "react";
import axios from "axios";
import AddPodcastDialog from "../components/AddPodcastDialog";

export default function Home() {
  const [podcasts, setPodcasts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(async () => {
    const data = await axios.get("http://localhost:1337/podcasts");
    setPodcasts(data?.data);
  }, []);

  function showAddPodcastDialog() {
    setShowModal(!showModal);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          <h2>Hello, Good Day.</h2>
          <span>
            <button onClick={showAddPodcastDialog}>Add Podcast</button>
          </span>
        </div>

        <div className={styles.podcontainer}>
          <div className={styles.yourpodcasts}>
            <h3>Your Podcasts</h3>
          </div>
          <div>
            {podcasts.map((podcast, i) => (
              <PodCard key={i} podcast={podcast} />
            ))}
          </div>
        </div>
        {showModal ? (
          <AddPodcastDialog closeModal={showAddPodcastDialog} />
        ) : null}
      </main>
    </div>
  );
}
