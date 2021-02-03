import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Laura Diaz</h1>
        <h2 className={styles.h1}>Front End Developer</h2>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
