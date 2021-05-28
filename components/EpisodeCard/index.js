import styles from "./EpisodeCard.module.css";

export default function EpisodeCard({ episode }) {
  const { name, mp3Link } = episode;
  return (
    <div className={styles.episodeCard}>
      <div className={styles.episodeCardImg}></div>
      <div className={styles.episodeCardDetails}>
        <div className={styles.episodeCardName}>
          <h4>{name}</h4>
        </div>
        <div className={styles.episodeCardAudio}>
          <audio controls src={mp3Link} />
        </div>
      </div>
    </div>
  );
}
