import styles from './presentation.module.scss';

export default function Presentation() {
  return (
    <div className={styles.hero}>
      <h2 className={styles.mainTitle}>
        Welcome to the playground of Laura Diaz
      </h2>
      <section className={styles.section}>
        Hi! I am Laura Diaz, Front End Developer from Argentina living in the
        desert. But you can call me Lali. 
      </section>
    </div>
  );
}
