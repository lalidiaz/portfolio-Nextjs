import styles from "./burger.module.scss";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import menu from "../../database/menu.json";
import { menuVariants } from "../../utils/animations";

export default function Burger() {
  const menuItems = Object.values(menu);
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.burgerContainer}>
          <Hamburger toggled={isOpen} toggle={setOpen} color="#fdf0ed" />
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "opened" : "closed"}
          variants={menuVariants}
          className={styles.menu}
        >
          {menuItems.map((link) => {
            const { url, id, name } = link;
            return (
              <Link href={url} key={id}>
                <a className={styles.a}>{name}</a>
              </Link>
            );
          })}
        </motion.div>
      </nav>
    </>
  );
}
