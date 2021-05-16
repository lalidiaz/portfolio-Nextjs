import { motion } from "framer-motion";
import styles from "./contact.module.scss";
import Back from "components/Back";
import Head from "next/head";
import { boxVariants, iconVariants } from "../../utils/animations";
import { delayOne } from "../../utils/animations";
import contactsData from "../../database/contacts";

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
                {contactsData.map((contact) => {
                  const { id, title, link, icon } = contact;
                  return (
                    <motion.span variants={iconVariants} key={id}>
                      <a href={link} className={styles.a} target="_blank">
                        <span>{icon}</span>
                        <span className={styles.span}>{title}</span>
                      </a>
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
