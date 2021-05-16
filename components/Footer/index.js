import styles from "./footer.module.scss";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.a}
        href="mailto:lauradiaz1586@gmail.com"
        target="_blank"
      >
        lauradiaz1586@gmail.com
      </a>
      <div>
        Made with{" "}
        <span>
          {" "}
          <FaHeart />{" "}
        </span>{" "}
        by Laura.
      </div>
    </footer>
  );
}
