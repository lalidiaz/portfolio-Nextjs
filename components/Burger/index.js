import styles from './burger.module.scss';
import { Cross as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Burger() {
  const [isOpen, setOpen] = useState(false);

  const menuVariants = {
    opened: {
      top: 0
    },
    closed: {
      top: '-100vh'
    }
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burgerContainer}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="black" />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? 'opened' : 'closed'}
          variants={menuVariants}
          className={styles.menu}
        >
          <Link href="/projects">
            <a className={styles.a}>Projects</a>
          </Link>
          <Link href="/contact">
            <a className={styles.a}>Contact</a>
          </Link>
          <Link href="/about">
            <a className={styles.a}>About</a>
          </Link>
        </motion.div>
      </nav>
    </>
  );
}
