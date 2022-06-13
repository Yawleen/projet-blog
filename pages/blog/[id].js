import styles from "../../styles/Blog/Article.module.css";

export default function Article({ dataBlog }) {
  return (
    <div className={`container ${styles.container}`}>
      <h1>{dataBlog.title[0].toUpperCase() + dataBlog.title.slice(1)}</h1>
      <p>{dataBlog.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await data.json();
  const paths = response.map((item) => ({
    params: { id: item.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = Number(context.params.id);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const response = await data.json();

  return {
    props: {
      dataBlog: response,
    },
  };
}
