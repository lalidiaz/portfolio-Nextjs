import { motion } from 'framer-motion';
import styles from '../projects/projects.module.scss';
import Link from 'next/link';

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

export default function Contact() {
  return (
    <>
      <p>SOY CONTACT</p>
      <motion.div
        className={styles.single}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        {/* <motion.img
          variants={imageVariants}
          src={`https://images.unsplash.com/${images[index]}?auto=format&fit=crop&w=1500`}
          alt="The Barbican"
        /> */}
        <motion.div className={styles.back} variants={backVariants}>
          <Link href="/">
            <a>← Back</a>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
