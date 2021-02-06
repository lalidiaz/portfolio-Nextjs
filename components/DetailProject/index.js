import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './detail.module.scss';
import { ImInfo } from 'react-icons/im';
import { FiTool } from 'react-icons/fi';
import { BsCodeSlash } from 'react-icons/bs';
import { BiCodeCurly } from 'react-icons/bi';
import { ImLink } from 'react-icons/im';

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
};

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const DetailProject = ({
  name,
  description,
  image,
  techStack,
  githubLink,
  type,
  url
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
          <h1 className={styles.h1}>{name}.</h1>
          <p>
            <span>{description}</span>
          </p>
          <p>
            <FiTool size={20} />
            <span className={styles.span}>Tech stack: {techStack}.</span>
          </p>
          <p>
            <BiCodeCurly size={20} />
            <span className={styles.span}>type of project: {type}. </span>
          </p>
          <p>
            <BsCodeSlash size={20} />
            <span className={styles.span}>
              See the code{' '}
              <a href={githubLink} target="_blank">
                here
              </a>
              .
            </span>
          </p>

          <p>
            <ImLink size={20} />
            <span className={styles.span}>See the demo</span>
            <a href={url} target="_blank" style={{ paddingLeft: '10px' }}>
              here
            </a>
            .
          </p>
        </div>
        <div className={styles.imageContainer}>
          <motion.img
            className={styles.img}
            variants={imageVariants}
            src={image}
            alt="development-project-front-end"
          />
        </div>
      </div>
    </motion.div>
  </>
);

export default DetailProject;
