import styles from "./about.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsQuestionCircle } from "react-icons/bs";
import Head from "next/head";
import Back from "../../components/Back";
import TextLoop from "react-text-loop";
import {
  delay05,
  delay1EaseInOut,
  delay15EaseInOut,
} from "../../utils/animations";

export default function About() {
  return (
    <>
      <Head>
        <link rel="icon" href="/red.png" />
        <title>About</title>
      </Head>
      <div className={styles.aboutHero}>
        <motion.div initial="exit" animate="enter" exit="exit">
          <Back />
          <section className={styles.section}>
            <motion.p
              variants={delay05}
              initial="hidden"
              animate="show"
              className={styles.myDescription}
            >
              Hi! Nice to meet you.
            </motion.p>
            <motion.p
              variants={delay05}
              initial="hidden"
              animate="show"
              className={styles.myDescription}
            >
              I am a{" "}
              <TextLoop
                interval={2000}
                children={[
                  "Front-end developer 💻",
                  "plant lover 🌿",
                  "cat fan 🐈",
                  "chillwave addict 🎧",
                ]}
              />{" "}
              from Argentina living in the desert.
            </motion.p>
            <motion.p variants={delay05} initial="hidden" animate="show">
              I specialise in creating interactive experiences and functional
              interfaces using React.
            </motion.p>
            <section className={styles.stack}>
              <motion.h3
                animate={delay1EaseInOut}
                initial="hidden"
                animate="show"
                className={styles.h3}
              >
                My stack
              </motion.h3>
              <motion.p
                variants={delay15EaseInOut}
                initial="hidden"
                animate="show"
              >
                HTML5 • CSS3 / Scss / Material UI / Styled Components •
                Javascript (ES6) • Reactjs • Nextjs • React Native • Typescript
                • Git • Browser developer tools • Responsive Design
              </motion.p>
            </section>
          </section>
        </motion.div>
      </div>
    </>
  );
}
