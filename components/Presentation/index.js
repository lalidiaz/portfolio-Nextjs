import styles from './presentation.module.scss';

export default function Presentation() {
  return (
    <div className={styles.hero}>
      <h2 className={styles.mainTitle}>Hi there!</h2>
      <section className={styles.section}>
        Welcome to Laura's personal portfolio.
      </section>
    </div>
  );
}
