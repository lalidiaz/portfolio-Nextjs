import styles from './next.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export default function WhyNextjs() {
  return (
    <>
      <Head>
        <title>Why Nextjs?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.aboutNext}>
        <motion.div
          className={styles.wrapper}
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <motion.div className={styles.back} variants={backVariants}>
            <Link href="/about">
              <a className={styles.a}>← Back</a>
            </Link>
          </motion.div>
          <section className={styles.next}>
            <p className={styles.p}>
              You are probably wondering why to choose build your web in
              NextJs...do not worry! I can help you giving you some information
              about this amazing technology (which I love). So lets dig into
              it... Next.js is a React framework for developing single page
              Javascript applications. The benefits of this framework are
              numerous, both for our clients’ applications as well as for the
              developer.The more we, as users, interact digitally, the more
              impatient we become as our expectations are not met by websites
              and apps that fail to load within milliseconds.
              <br />
              Technology decisions play a large part in being able to deliver
              highly performant, scalable, successful applications and as such,
              we have started using Next.js for a number of reasons; for the
              most part related to speed and performance. So what are the
              benefits specifically? Server Side Rendering (SSR), React
              components that make up the user-facing part of a website are all
              initially rendered on the server side. This means that once the
              HTML has been delivered to the client (the user’s browser),
              nothing else needs to happen for the user to be able to read the
              content on the page. This makes page loading times appear much
              faster to the user. This means that once the HTML has been
              delivered to the client (the user’s browser), nothing else needs
              to happen for the user to be able to read the content on the page.
              This makes page loading times appear much faster to the user.
              <br />
              Another advantage is the code splitting, automatic code splitting
              Next.js is clever enough to only load the Javascript and CSS that
              are needed for any given page. This makes for much faster page
              loading times, as a user’s browser doesn't have to download
              Javascript and CSS that it doesn't need for the specific page the
              user is viewing. This increases performance as there is less for
              the user’s browser to download and the user benefits from seeing
              the page content quicker.
            </p>
            <div className={styles.gif}>
              <img className={styles.img} src="/cat.gif" type="gif" />
            </div>
          </section>
        </motion.div>
      </div>
    </>
  );
}
