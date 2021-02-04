import styles from './about.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiArrowRightSFill } from 'react-icons/ri';

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

export default function About() {
  return (
    <div className={styles.aboutHero}>
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

        <section className={styles.section}>
          <p>
            Hi! My name is Laura But you can call me Lali. I am a Front End
            Developer from Argentina living in the desert. I believes in
            building self-sustaining, purposeful products. I aim to build
            products that scratch our itch, products that she want to exist in
            this world. I enjoy blurring the lines of design and engineering.
          </p>
        </section>
        <section className={styles.stack}>
          <div>
            <h3>My stuck</h3>
            HTML5 CSS3 Javascript (ES6) ReactJs Jest (Testing) Axios NextJs
            Typescript Axios AWS Amplify Graphql React Apollo Git Material UI
            Styled Components Github Sass
          </div>
          <div>
            <Link href="/whyNextjs">
              <motion.div whileHover={{ scale: 0.8 }}>
                <a>Why NextJs?</a>
              </motion.div>
            </Link>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
