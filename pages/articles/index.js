import Head from "next/head";
import styles from "./articles.module.scss";
import { getArticlesData } from "utils/getData";
import Article from "@components/Article";
import Back from "@components/Back";
import { motion } from "framer-motion";
import { delayOne, delay05 } from "../../utils/animations";

export default function Articles({ data }) {
  const articles = Object.values(data);

  return (
    <>
      <Head>
        <link rel="icon" href="/red.png" />
        <title>Articles</title>
      </Head>

      <motion.div
        className={styles.wrapper}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <Back />
        <div className={styles.title}>
          <motion.h3 variants={delay05} initial="hidden" animate="show">
            Articles
          </motion.h3>
        </div>
        <section>
          <motion.ul
            className={styles.articles}
            variants={delayOne}
            initial="hidden"
            animate="show"
          >
            {articles.map((article) => (
              <li key={article.id}>
                <Article
                  name={article.name}
                  url={article.url}
                  lang={article.lang}
                  topic={article.topic}
                />
              </li>
            ))}
          </motion.ul>
        </section>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const data = await getArticlesData();
  return {
    props: {
      data,
    },
  };
}
