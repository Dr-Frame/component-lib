import React, { FC } from 'react';
import Accordion from '../Accordion';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.scss';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import { IMenuItem } from '../../utils/navItems';

interface LayoutProps {
  children: React.ReactChild | React.ReactNode;
}

const menu: IMenuItem[] = [
  {
    main: 'Small components',
    mainIcon: <SettingsIcon className={styles.icon} />,
    sub: [
      { title: 'Button', link: '/button' },
      { title: 'Input', link: '/input' },
      { title: 'Icon Button', link: '/icon-button' },
      { title: 'Select', link: '/select' },
    ],
  },
  {
    main: 'Navigation',
    mainIcon: <GridViewIcon className={styles.icon} />,
    sub: [
      { title: 'Accordion', link: '/accordion' },
      { title: 'Modal', link: '/modal' },
      { title: 'Multi Select', link: '/multiselect' },
    ],
  },
  {
    main: 'Difficult',
    mainIcon: <AccountTreeIcon className={styles.icon} />,
    sub: [
      { title: 'Drag&Drops', link: '/dragdrop' },
      { title: 'Invest', link: '/invest-tab' },
      { title: 'Writing', link: '/writing' },
      { title: 'Word Constructor', link: '/word-constructor' },
      { title: 'Dictionary', link: '/dictionary' },
      { title: 'Animation', link: '/congrats' },
      { title: 'Zoom', link: '/zoom' },
    ],
  },
];

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <nav className={styles.sideBar}>
          <Accordion size="small" menuItems={menu} />
        </nav>
        <main className={styles.main}>
          <div className={styles.content}>{children}</div>
        </main>
      </div>

      {/*  <Footer /> */}
    </>
  );
};

export default Layout;
