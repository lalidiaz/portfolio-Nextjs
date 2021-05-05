import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Burger from "@components/Burger";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/red.png" />
        <title>Laura Diaz</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.descriptionContainer}>
          <div className={styles.typewriter}>
            <Typewriter
              changeDelay={1000}
              onInit={(typewriter) =>
                typewriter
                  .typeString(
                    "<p>Hi, I am Laura.<p><p>Front-end</p><p>Developer.</p>"
                  )
                  .pauseFor(2000)
                  .start()
              }
              options={{ autoStart: true, loop: true }}
            />
          </div>
        </div>

        <Burger />
      </main>
    </>
  );
}
