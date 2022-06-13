import Container from "../../containers/ContainerCards/Container";
import Card from "../../components/Card/Card"
import styles from "../../styles/Blog/Blog.module.css";


export default function Blog( { data } ) {

  
  return (
    <div className={`container ${styles.container}`}>
      <h1>Bienvenue sur le Blog.</h1>
      <p>Voici les articles</p>
      <Container id={'container-blog'}>
        {data.map(article => <Card key={article.id} infosBlog={article}/>)}
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await data.json();

  return {
    props: { data : response }
  }
}
