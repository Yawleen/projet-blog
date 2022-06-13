import styles from "./Container.module.css";

export default function ContainerCards({ children, id }) {

  if(id) {
    return <div className={`${styles.containerArticles} center`}>{children}</div>;
  }
  return <div className={styles.containerArticles}>{children}</div>;
}
 