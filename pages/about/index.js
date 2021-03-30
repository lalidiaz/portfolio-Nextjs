import styles from "./about.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsQuestionCircle } from "react-icons/bs";
import Head from "next/head";

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/code.png" />
        <title>About</title>
      </Head>
      <div className={styles.aboutHero}>
        <motion.div initial="exit" animate="enter" exit="exit">
          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/">
              <a>← Back</a>
            </Link>
          </motion.div>
          <section className={styles.section}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={styles.p}
            >
              Hi! My name is Laura but you can call me Lali. I am a Front End
              Developer from Argentina living in the desert. I believe in
              building self-sustaining, purposeful products. I aim to build
              products that people would enjoy.
            </motion.p>
            <section className={styles.stack}>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, ease: "easeInOut" }}
                className={styles.h3}
              >
                My stack
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, ease: "easeInOut" }}
              >
                HTML5 / CSS3 / Javascript (ES6) / ReactJs / React Apollo /
                NextJs / Jest (Testing) / Axios / Typescript / AWS Amplify /
                Graphql / Git / Material UI / Styled Components / Sass / Browser
                developer tools / Responsive Design.
              </motion.p>
            </section>
          </section>

          <div className={styles.nextjs}>
            <Link href="/whyNextjs">
              <motion.div
                style={{
                  width: 100,
                  height: 100,
                  color: "white",
                  fontSize: "28px",
                  textAlign: "center",
                  width: "100%",
                  cursor: "pointer",
                }}
                whileHover={{
                  scale: 0.8,
                }}
                whileTap={{ scale: 0.8 }}
              >
                <a className={styles.a}>
                  <BsQuestionCircle /> Why I choose NextJs and why I love it?
                </a>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
}
