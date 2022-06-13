
import styles from "../../styles/Liste/Liste.module.css"
import ListItem from "../../components/ListItem/ListItem"

export default function Liste( { data }) {
  return (
    <div className={`container ${styles.container}`}>
      <h1>La liste des utilisateurs</h1>
      <ul>
        {data.map(obj => <ListItem key={obj.id} userInfos={obj}/>)}
      </ul>
    </div>
  )
}


export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();

  return {
    props: { data : response }
  }
}
