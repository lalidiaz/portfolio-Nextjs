import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./detail.module.scss";
import { FiTool } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { ImLink } from "react-icons/im";
import {
  imageVariantsDetail,
  backVariants,
  delay05EaseInOut,
  delay1EaseInOut,
  delay15EaseInOut,
  delay2EaseInOut,
  delay25EaseInOut,
} from "../../utils/animations";

const DetailProject = ({
  name,
  description,
  image,
  techStack,
  githubLink,
  type,
  url,
}) => (
  <>
    <motion.div
      className={styles.single}
      initial="exit"
      animate="enter"
      exit="exit"
    >
      <motion.div className={styles.back} variants={backVariants}>
        <Link href="/projects">
          <a>← Back</a>
        </Link>
      </motion.div>
      <div className={styles.content}>
        <div className={styles.text}>
          <motion.h1
            variants={delay05EaseInOut}
            initial="hidden"
            animate="show"
            className={styles.h1}
          >
            {name}.
          </motion.h1>
          <motion.p variants={delay1EaseInOut} initial="hidden" animate="show">
            {description}
          </motion.p>
          <motion.p variants={delay15EaseInOut} initial="hidden" animate="show">
            <FiTool size={20} />
            <span className={styles.span}>Tech stack: {techStack}.</span>
          </motion.p>
          <motion.p variants={delay15EaseInOut} initial="hidden" animate="show">
            <BiCodeCurly size={20} />
            <span className={styles.span}>type of project: {type}. </span>
          </motion.p>
          <motion.p variants={delay2EaseInOut} initial="hidden" animate="show">
            <BsCodeSlash size={20} />
            <span className={styles.span}>
              See the code{" "}
              <a href={githubLink} target="_blank">
                here
              </a>
              .
            </span>
          </motion.p>

          {url && (
            <motion.p
              variants={delay25EaseInOut}
              initial="hidden"
              animate="show"
            >
              <ImLink size={20} />
              <span className={styles.span}>See the demo</span>
              <a href={url} target="_blank" style={{ paddingLeft: "10px" }}>
                here
              </a>
              .
            </motion.p>
          )}
        </div>
        <div className={styles.imageContainer}>
          <motion.img
            className={styles.img}
            variants={imageVariantsDetail}
            src={image}
            alt="development-project-front-end"
          />
        </div>
      </div>
    </motion.div>
  </>
);

export default DetailProject;
