import styles from "../styles/Home.module.css";
import Container from "../containers/ContainerCards/Container";
import Card from "../components/Card/Card";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const infosArticles = [{h5: "Lisez les articles", h6:"Maximisez votre culture web", p: "Chaque auteur tente de vous apporter le plus de valeur possible par article.", a: ["/blog", "Voir le blog"]}, 
  {h5: "Faites un tour vers la liste de membres", h6:"Faites-vous des amis", p: "Ajoutez, invitez et discutez avec les différents membres.", a: ["/liste", "Découvrez la liste de membres"]}];

  return (
    <div className={`container ${styles.container}`}>
      <h1>Bienvenue sur Code.io</h1>
      <p>Le blog communautaire des afficionados de Développement Web.</p>
      <Container>
        {infosArticles.map(article => <Card key={uuidv4()} infosAcc={article}/>)}
      </Container>
    </div>
  );
}
