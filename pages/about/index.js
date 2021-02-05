import styles from './about.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsQuestionCircle } from 'react-icons/bs';
import Back from 'components/Burger';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
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
        <Back />

        <section className={styles.section}>
          <p className={styles.p}>
            Hi! My name is Laura but you can call me Lali. I am a Front End
            Developer from Argentina living in the desert. I believe in building
            self-sustaining, purposeful products. I aim to build products that
            scratch my itch, products that I would enjoy to build.
          </p>
        </section>

        <section className={styles.stack}>
          <div>
            <h3 className={styles.h3}>My stuck</h3>
            <p>
              HTML5 / CSS3 / Javascript (ES6) / ReactJs / React Apollo / NextJs
              / Jest (Testing) / Axios / Typescript / AWS Amplify / Graphql /
              Git / Material UI / Styled Components / Sass.
            </p>
          </div>
        </section>
      </motion.div>

      <div className={styles.nextjs}>
        <Link href="/whyNextjs">
          <motion.div
            style={{
              width: 100,
              height: 100,
              color: 'white',
              fontSize: '28px',
              textAlign: 'center',
              width: '100%',
              cursor: 'pointer'
            }}
            whileHover={{
              scale: 0.8
            }}
          >
            <a className={styles.a}>
              <BsQuestionCircle /> Why I choose NextJs and why I love it?
            </a>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
