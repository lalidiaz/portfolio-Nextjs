import styles from './cursor.module.scss';
import { useRef, useEffect } from 'react';


const CustomCursor = () => {
  const mainCursor = useRef(null);

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;

      const mouseX = clientX;
      const mouseY = clientY;

      mainCursor.current.clientWidth / 2;
      mainCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);

  return (
    <>
      <div className={styles.div} ref={mainCursor} />
      <div className={styles.secondary} />
    </>
  );
};

export default CustomCursor;
