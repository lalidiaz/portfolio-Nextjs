import styles from "./projects.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import Back from "components/Back";
import { getProjectsData } from "utils/getData";
import Footer from "components/Footer";
import Head from "next/head";
import {
  transitionTwo,
  thumbnailVariants,
  frameVariants,
  imageVariants,
} from "../../utils/animations";
import SeeMoreBtn from "@components/SeeMoreBtn";

export default function Projects({ data }) {
  const projects = Object.values(data);
  return (
    <>
      <Head>
        <link rel="icon" href="/red.png" />
        <title>Projects</title>
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
              variants={{ exit: { transitionTwo: { staggerChildren: 0.1 } } }}
            >
              {projects.map((element) => (
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
                      transition={transitionTwo}
                      whileTap={{ scale: 1, x: "-4px", y: "4px" }}
                    >
                      <div className={styles.card}>
                        <motion.img
                          className={styles.image}
                          src={element.image}
                          alt={element.name}
                          variants={imageVariants}
                          transition={transitionTwo}
                        />
                        <div className={styles.cardText}>
                          <p className={styles.projectName}>{element.name}</p>
                          <p className={styles.descriptionTech}>
                            {element.descriptionTech}
                          </p>
                          <SeeMoreBtn />
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
      data,
    },
  };
}
