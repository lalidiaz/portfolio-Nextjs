import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import Link from 'next/link';

import CustomCursor from '@components/CustomCursor';

//icons
import { IoDocumentAttachOutline } from 'react-icons/io5';
import { IoLogoLinkedin } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import { HiOutlineMailOpen } from 'react-icons/hi';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

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

        <div className={styles.contentWrapper}>
          <div className={styles.text}>
            <p>
              Striving to create uniqueness.
              <br />
              Always happy to hear from you. ツ
              <br />
              Let's connect!
            </p>
          </div>
          <motion.div variants={boxVariants} initial="out" animate="in">
            <div className={styles.social}>
              <motion.span variants={iconVariants}>
                <a href="mailto:contact@lauradiaz.dev" className={styles.a}>
                  <HiOutlineMailOpen />
                  <span className={styles.span}>contact@lauradiaz.dev</span>
                </a>
              </motion.span>
              <motion.span variants={iconVariants}>
                <a
                  href="https://github.com/lalidiaz"
                  target="_blank"
                  className={styles.a}
                >
                  <GoMarkGithub />
                  <span className={styles.span}>Github</span>
                </a>
              </motion.span>
              <motion.span variants={iconVariants}>
                <a className={styles.a} href="/LauraDiazCV.pdf" download>
                  <IoDocumentAttachOutline />
                  <span className={styles.span}>CV</span>
                </a>
              </motion.span>
              <motion.span variants={iconVariants}>
                <a
                  href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
                  target="_blank"
                  className={styles.a}
                >
                  <IoLogoLinkedin />
                  <span className={styles.span}>Linkedin</span>
                </a>
              </motion.span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
