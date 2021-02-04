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

          <div className={styles.social}>
            <a href="mailto:contact@lauradiaz.dev" className={styles.a}>
              <HiOutlineMailOpen />{' '}
              <span className={styles.span}>contact@lauradiaz.dev</span>
            </a>

            <a
              href="https://github.com/lalidiaz"
              target="_blank"
              className={styles.a}
            >
              <GoMarkGithub />
              <span className={styles.span}>Github</span>
            </a>

            <a className={styles.a} href="/LauraDiazCV.pdf" download>
              <IoDocumentAttachOutline />
              <span className={styles.span}>CV</span>
            </a>

            <a
              href="https://www.linkedin.com/in/laura-diaz-a661a617a/"
              target="_blank"
              className={styles.a}
            >
              <IoLogoLinkedin />
              <span className={styles.span}>Linkedin</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
