export const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

export const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } },
};

export const transitionTwo = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const thumbnailVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition },
  },
};

export const frameVariants = {
  hover: { scale: 0.95 },
};

export const imageVariants = {
  hover: { scale: 1.1 },
};

export const boxVariants = {
  out: {
    y: 600,
  },
  in: {
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 1.2,
    },
  },
};
export const iconVariants = {
  out: {
    x: -900,
  },
  in: {
    x: 0,
  },
};

export const imageVariantsDetail = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

export const menuVariants = {
  opened: {
    top: 0,
  },
  closed: {
    top: "-100vh",
  },
};

export const delayOne = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: "easeIn",
    },
  },
};

export const delay05 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeIn",
    },
  },
};

export const delay1EaseInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      ease: "easeInOut",
    },
  },
};

export const delay05EaseInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

export const delay15EaseInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1.5,
      ease: "easeInOut",
    },
  },
};

export const delay2EaseInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      ease: "easeInOut",
    },
  },
};

export const delay25EaseInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 2.5,
      ease: "easeInOut",
    },
  },
};
