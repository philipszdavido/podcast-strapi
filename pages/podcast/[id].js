import styles from "../../styles/PodCastView.module.css";
import { useRouter } from "next/router";
import EpisodeCard from "../../components/EpisodeCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function PodCastView() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [podcast, setPodcast] = useState();
  useEffect(async () => {
    const data = await axios.get("http://localhost:1337/podcasts/" + id);
    setPodcast(data?.data);
  }, [id]);

  async function deletePodcast() {
    if (confirm("Do you really want to delete this podcast?")) {
      // delete podcast episodes
      const episodes = podcast?.episodes;
      for (let index = 0; index < episodes.length; index++) {
        const episode = episodes[index];
        await axios.delete("http://localhost:1337/episodes/" + episode?.id);
      }
      await axios.delete("http://localhost:1337/podcasts/" + id);
      router.push("/");
    }
  }

  return (
    <div className={styles.podcastviewcontainer}>
      <div className={styles.podcastviewmain}>
        <div
          style={{ backgroundImage: `url(${podcast?.imageUrl})` }}
          className={styles.podcastviewimg}
        ></div>
        <div style={{ width: "100%" }}>
          <div className={styles.podcastviewname}>
            <h1>{podcast?.name}</h1>
          </div>
          <div className={styles.podcastviewminidet}>
            <div>
              <span style={{ marginRight: "4px", color: "rgb(142 142 142)" }}>
                Created by:
              </span>
              <span style={{ fontWeight: "600" }}>{podcast?.author}</span>
            </div>
            <div style={{ padding: "14px 0" }}>
              <span>
                <button onClick={deletePodcast} className="btn-danger">
                  Delete
                </button>
              </span>
            </div>
          </div>
          <div className={styles.podcastviewepisodescont}>
            <div className={styles.podcastviewepisodes}>
              <h2>Episodes</h2>
            </div>
            <div className={styles.podcastviewepisodeslist}>
              {podcast?.episodes.map((episode, i) => (
                <EpisodeCard key={i} episode={episode} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
