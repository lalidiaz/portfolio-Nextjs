import Head from 'next/head';
import styles from '../styles/Home.module.scss';
// import Presentation from '@components/Presentation';
//import CustomCursor from '@components/CustomCursor';
import Footer from '@components/Footer';
import Burger from '@components/Burger';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Laura Diaz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.crcular}>
          <div className={styles.circle}>
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width={300}
              height={300}
              viewBox="0 0 300 300"
              {...props}
            >
              <defs>
                <path
                  id="prefix__a"
                  d="M90 150a60 60 0 01120 0 60 60 0 01-120 0"
                />
              </defs>
              <circle cx={150} cy={100} r={75} fill="none" />
              <use xlinkHref="#prefix__a" fill="none" />
              <text className={styles.text}>
                <textPath xlinkHref="#prefix__a">
                  {'Helo, welcome! Hola, bienvenidx! '}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <h1 className={styles.name}>Laura Diaz</h1>
        <h2 className={styles.h2}>Hi there!</h2>
        <h3 className={styles.h3}>I'm a Front End Developer.</h3>

        <Burger />

        <Footer />
      </main>
    </div>
  );
}
