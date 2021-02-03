import styles from './projects.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import CustomCursor from '@components/CustomCursor';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export default function Projects() {
  return (
    <>
      <motion.div
        className={styles.single}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.div className={styles.back} variants={backVariants}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}