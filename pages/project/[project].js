import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './project.module.scss';
//Data fetching
import { getProjectsData, getPaths } from 'utils/dataFetch';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const Project = ({ data }) => {
  console.log({ data });
  return (
    <motion.div
      className={styles.single}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <h3>{data.name}</h3>
      <motion.img variants={imageVariants} src={data.image} alt="" />

      <motion.div className={styles.back} variants={backVariants}>
        <Link href="/">
          <a className={styles.a}>← Back</a>
        </Link>
      </motion.div>
    </motion.div>
  );
};


export default Project;
