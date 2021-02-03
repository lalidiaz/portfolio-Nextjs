import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Presentation from '@components/Presentation';
// import CustomCursor from '@components/CustomCursor';
import Footer from '@components/Footer';
import Burger from '@components/Burger';

export default function Home() {
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
        <Footer />
      </main>
    </div>
  );
}
