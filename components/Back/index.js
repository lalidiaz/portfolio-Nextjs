import styles from "./back.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { backVariants } from "../../utils/animations";

export default function Back() {
  return (
    <>
      <motion.div className={styles.back} variants={backVariants}>
        <Link href="/">
          <a>← Back</a>
        </Link>
      </motion.div>
    </>
  );
}
