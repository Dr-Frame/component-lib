import { FC } from 'react';
import styles from './Footer.module.scss';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
      <div>All rights reserved bla bla</div>
    </footer>
  );
};

export default Footer;
