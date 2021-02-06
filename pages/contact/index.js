import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import Back from 'components/Back';
//import CustomCursor from '@components/CustomCursor';
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Head from 'next/head';

const boxVariants = {
  out: {
    y: 600
  },
  in: {
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 1.2
    }
  }
};
const iconVariants = {
  out: {
    x: -600
  },
  in: {
    x: 0
  }
};

export default function Contact() {
  return (
    <>
      {/* <CustomCursor /> */}
      <Head>
        <title>Contact me!</title>
        <link rel="icon" href="/favicon.ico" />
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
            <p className={styles.p}>
              Striving to create uniqueness.
              <br />
              Always happy to hear from you. ツ
              <br />
              Let's connect!
            </p>

            <motion.div variants={boxVariants} initial="out" animate="in">
              <div className={styles.social}>
                <motion.span variants={iconVariants}>
                  <a href="mailto:contact@lauradiaz.dev" className={styles.a}>
                    <HiOutlineMailOpen size={22} />
                    <span className={styles.span}>contact@lauradiaz.dev</span>
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
