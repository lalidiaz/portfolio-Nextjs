import Head from 'next/head';
import styles from '../styles/Home.module.scss';
//import CustomCursor from '@components/CustomCursor';

import Burger from '@components/Burger';
import CircleImg from '../public/circle.svg';

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Laura Diaz</title>
      </Head>
      {/* <CustomCursor /> */}

      <main className={styles.main}>
        <h1 className={styles.name}>Laura Diaz</h1>
        <div className={styles.circle}>
          <CircleImg className={styles.welcome} width={30} height={30} />
        </div>
        <div className={styles.descriptionContainer}>
          <h2 className={styles.h2}>Hi there!</h2>
          <h3 className={styles.h3}>I'm a Front End Developer.</h3>
        </div>
        <Burger />
      </main>
    </>
  );
}
