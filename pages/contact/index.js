import { motion } from "framer-motion";
import styles from "./contact.module.scss";
import Back from "components/Back";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import Head from "next/head";
import { boxVariants, iconVariants } from "../../utils/animations";
import { delayOne } from "../../utils/animations";

export default function Contact() {
  return (
    <>
      <Head>
        <link rel="icon" href="/red.png" />
        <title>Contact</title>
      </Head>
      <motion.div
        className={styles.wrapper}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <Back />

        <div className={styles.contentWrapper}>
          <div className={styles.text}>
            <motion.h3
              className={styles.h3}
              variants={delayOne}
              initial="hidden"
              animate="show"
            >
              Let's chat!
            </motion.h3>

            <motion.div variants={boxVariants} initial="out" animate="in">
              <div className={styles.social}>
                <motion.span variants={iconVariants}>
                  <a href="mailto:lauradiaz1586@gmail.com" className={styles.a}>
                    <HiOutlineMailOpen size={22} />
                    <span className={styles.span}>lauradiaz1586@gmail.com</span>
                  </a>
                </motion.span>
                <motion.span variants={iconVariants}>
                  <a
                    href="https://github.com/lalidiaz"
                    target="_blank"
                    className={styles.a}
                  >
                    <GoMarkGithub size={22} />
                    <span className={styles.span}>Github</span>
                  </a>
                </motion.span>
                <motion.span variants={iconVariants}>
                  <a className={styles.a} href="/LauraDiazCV.pdf" download>
                    <IoDocumentAttachOutline size={22} />
                    <span className={styles.span}>CV</span>
                  </a>
                </motion.span>
                <motion.span variants={iconVariants}>
                  <a
                    href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
                    target="_blank"
                    className={styles.a}
                  >
                    <IoLogoLinkedin size={22} />
                    <span className={styles.span}>Linkedin</span>
                  </a>
                </motion.span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
