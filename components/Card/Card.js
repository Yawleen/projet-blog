import styles from "./Card.module.css";
import Link from "next/dist/client/link";

export default function Card({ infosAcc, infosBlog }) {
  if (infosAcc) {
    return (
      <div className={styles.cardArticle}>
        <h5>{infosAcc.h5}</h5>
        <h6>{infosAcc.h6}</h6>
        <p>{infosAcc.p}</p>
        <Link href={infosAcc.a[0]}>{infosAcc.a[1]}</Link>
      </div>
    );
  }
  return (
    <div className={styles.cardArticle}>
      <h5>{infosBlog.title}</h5>
      <p>{infosBlog.body.slice(0, 50).trim() + "..."}</p>
      <Link href={`/blog/${infosBlog.id}`}>Lire cet article</Link>
    </div>
  );
}
