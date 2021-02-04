import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import Link from 'next/link';
import { VscArrowDown } from 'react-icons/vsc';
import CustomCursor from '@components/CustomCursor';

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
      {/* <CustomCursor /> */}
      <motion.div
        className={styles.wrapper}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <motion.div className={styles.back} variants={backVariants}>
          <Link href="/">
            <a className={styles.a}>← Back</a>
          </Link>
        </motion.div>

        <div>
          <p>I am always open to work. ツ</p>
          <p>With passionate creatives striving to create uniqueness.</p>
          <p>Let's connect!</p>
          <div className={styles.social}>
            <a href="mailto:contact@lauradiaz.dev" className="linkEmail">
              contact@lauradiaz.dev
            </a>
            <div className="icon">
              <a href="https://github.com/lalidiaz" target="_blank">
                Github
              </a>
            </div>
            <div className="icon">
              <a href="/LauraDiazCV.pdf" download>
                CV
              </a>
            </div>
            <div className="icon">
              <a
                href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
                target="_blank"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
