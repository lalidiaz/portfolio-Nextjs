import styles from './footer.module.scss';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <a className={styles.a} href="mailto:contact@lauradiaz.dev">
        contact@lauradiaz.dev
      </a>
      <div>
        Made with{' '}
        <span>
          {' '}
          <FaHeart />{' '}
        </span>{' '}
        by Laura.
      </div>
    </footer>
  );
}
