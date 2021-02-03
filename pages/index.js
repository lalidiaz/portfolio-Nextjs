import Head from 'next/head';
import styles from '../styles/Home.module.css';
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
        {/* <CustomCursor /> */}
        <Burger />
        <Presentation />
        <Footer />
      </main>
    </div>
  );
}
