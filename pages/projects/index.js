import styles from './projects.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Back from 'components/Back';
import { getProjectsData } from 'utils/getData';
import Footer from 'components/Footer';
import Head from 'next/head';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const frameVariants = {
  hover: { scale: 0.95 }
};

const imageVariants = {
  hover: { scale: 1.1 }
};

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className={styles.wrapper}
        initial="exit"
        animate="enter"
        exit="exit"
      >
        <div className={styles.hero}>
          <Back />
          <h1 className={styles.h1}>Projects</h1>
          <div className={styles.gallery}>
            <motion.div
              className={styles.thumbnails}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              {Object.values(data).map((element) => (
                <Link href={`/project/${element.slug}`}>
                  <motion.div
                    className={styles.thumbnail}
                    variants={thumbnailVariants}
                    key={element.id}
                  >
                    <motion.div
                      className={styles.frame}
                      whileHover="hover"
                      variants={frameVariants}
                      transition={transition}
                      whileTap={{ scale: 1, x: '-4px', y: '4px' }}
                    >
                      <div className={styles.card}>
                        <motion.img
                          className={styles.image}
                          src={element.image}
                          alt={element.name}
                          variants={imageVariants}
                          transition={transition}
                        />
                        <div className={styles.cardBottom}>
                          <p className={styles.projectName}>{element.name}</p>
                          <a className={styles.a}>Click me!</a>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
export async function getStaticProps() {
  const data = await getProjectsData();
  return {
    props: {
      data
    }
  };
}
