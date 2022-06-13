import styles from "../../styles/Liste/User.module.css";
import ListItem from "../../components/ListItem/ListItem";

export default function User({ dataUser }) {
  const specificInfos = [{title: "Username", text: dataUser.username}, {title: "Email", text: dataUser.email}, {title: "Site Web", text: dataUser.website}, {title: "Téléphone", text: dataUser.phone}];
  
  return (
    <div className={`container ${styles.container}`}>
      <div>
        <h5>{dataUser.name}</h5>
        <h6>Username : {dataUser.username}</h6>
        <ul>
            {specificInfos.map(info => <ListItem key={info.title} specificInfo={info}/>)}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  const paths = response.map((item) => ({
    params: { id: ["utilisateur", item.id.toString()] },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const path = context.params.id;
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + path[1]
  );
  const response = await data.json();

  return {
    props: {
      dataUser: response,
    },
  };
}
