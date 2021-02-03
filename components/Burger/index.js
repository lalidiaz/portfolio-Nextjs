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
          <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
        </div>
        <motion.div
          animate={isOpen ? 'opened' : 'closed'}
          initialState={false}
          variants={menuVariants}
          className={styles.menu}
        >
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <p>lala</p>
        </motion.div>
      </nav>
    </>
  );
}
