import styles from "./PodCard.module.css";
import Link from "next/link";

export default function PodCard({ podcast }) {
  const { id, name, author, episodes, created_at, imageUrl } = podcast;
  return (
    <Link href={`podcast/${id}`}>
      <div className={styles.podcard}>
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className={styles.podcardimg}
        ></div>
        <div className={styles.podcarddetails}>
          <div className={styles.podcardname}>
            <h3>{name}</h3>
          </div>
          <div className={styles.podcardauthor}>
            <span>{author}</span>
          </div>
          <div className={styles.podcardminidet}>
            <span>{episodes.length} episode(s)</span>
            <span>Created {created_at}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
