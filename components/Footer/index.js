import styles from './footer.module.scss';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Made with{' '}
      <span>
        {' '}
        <FaHeart />{' '}
      </span>{' '}
      by Laura.
    </footer>
  );
}
