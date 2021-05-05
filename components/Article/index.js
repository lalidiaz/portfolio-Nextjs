import styles from "./article.module.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import SeeMoreBtn from "../SeeMoreBtn";

const Article = ({ name, topic, lang, url }) => {
  return (
    <motion.div
      className={styles.articleWrapper}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
    >
      <div className={styles.articleInfo}>
        <h4 className={styles.name}> {name}</h4>
        <p className={styles.text}>Topic: {topic}</p>
        <p className={styles.text}>Language: {lang}</p>
      </div>

      <SeeMoreBtn url={url} />
    </motion.div>
  );
};

export default Article;
