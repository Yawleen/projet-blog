import styles from "./ListItem.module.css"
import Link from "next/link"

export default function ListItem({ userInfos, specificInfo }) {
  if(userInfos) {
    return (
      <li className={styles.item}>
          <p>{userInfos.username}</p>
          <Link href={`/liste/utilisateur/${userInfos.id}`}>Contacter</Link>
      </li>
    )
  }
  
  return (
    <li className={styles.item}>
        <p>{specificInfo.title} : {specificInfo.text}</p>
    </li>
  )
}
