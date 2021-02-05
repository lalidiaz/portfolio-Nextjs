import styles from './back.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export default function Back() {
  return (
    <>
      <motion.div className={styles.back} variants={backVariants}>
        <Link href="/">
          <a>← Back</a>
        </Link>
      </motion.div>
    </>
  );
}
