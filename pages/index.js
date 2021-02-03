import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '@components/Header';
import Presentation from '@components/Presentation';
import CustomCursor from '@components/CustomCursor';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laura Diaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CustomCursor />
        <Header />
        <Presentation />
      </main>
    </div>
  );
}
