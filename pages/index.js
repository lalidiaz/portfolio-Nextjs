import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Presentation from '@components/Presentation';
// import CustomCursor from '@components/CustomCursor';
import Footer from '@components/Footer';
import Burger from '@components/Burger';
import { motion } from 'framer-motion';
import Link from 'next/link';

//Data fetching
import { getProjectsData } from 'utils/dataFetch';

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
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laura Diaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.name}>Laura Diaz</h1>
        {/* <CustomCursor /> */}
        <Burger />
        <Presentation />
        <div className={styles.hero}>
          <h1>Projects:</h1>
          <div className={styles.gallery}>
            <motion.div
              className={styles.thumbnails}
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
            >
              {Object.values(data).map((element, id, i) => (
                <motion.div
                  className={styles.thumbnail}
                  variants={thumbnailVariants}
                >
                  <motion.div
                    className={styles.frame}
                    whileHover="hover"
                    variants={frameVariants}
                    transition={transition}
                  >
                    <Link
                      href="/[project]/[project]"
                      as={`/project/${element.slug}`}
                      scroll={false}
                    >
                      <motion.img
                        className={styles.image}
                        src={element.image}
                        alt={element.name}
                        variants={imageVariants}
                        transition={transition}
                      />
                    </Link>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
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
