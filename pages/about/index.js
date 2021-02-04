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
          <h3>My stuck</h3>
          <RiArrowRightSFill size={60} />
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript (ES6)</li>
            <li>ReactJs</li>
            <li>Jest (Testing)</li>
            <li>Axios</li>
            <li>NextJs</li>
            <li>Typescript</li>
            <li>Axios</li>
            <li>AWS Amplify</li>
            <li>Graphql</li>
            <li>React Apollo</li>
            <li>Git</li>
            <li>Material UI</li>
            <li>Styled Components</li>
            <li>Github</li>
            <li>Sass</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
