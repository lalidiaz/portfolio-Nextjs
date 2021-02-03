import styles from './header.module.scss';
import Burger from '@components/Burger';
import { VscActivateBreakpoints } from 'react-icons/vsc';

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Laura Diaz</h1>
      
      <Burger />
      {/* <VscActivateBreakpoints size={50} /> */}
    </div>
  );
}
