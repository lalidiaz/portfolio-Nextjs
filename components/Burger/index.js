import styles from './burger.module.scss';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';

export default function Burger() {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
    </nav>
  );
}
