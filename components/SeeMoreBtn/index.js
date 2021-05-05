import styles from "./seemore.module.scss";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SeeMoreBtn = ({ url }) => {
  return (
    <a href={url} target="_blank">
      <motion.div
        whileHover={{
          marginRight: "5px",
          transition: { ease: "easeInOut" },
        }}
        className={styles.readMore}
      >
        <p className={styles.readText}>read more</p>

        <HiOutlineArrowNarrowRight color="white" />
      </motion.div>
    </a>
  );
};

export default SeeMoreBtn;
