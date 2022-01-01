import { FC, useState } from 'react';
import styles from './Accordion.module.scss';
import { IMenuItem } from '../../utils/navItems';
import { Size } from '../../types/classnameTypes';
import Button from '../Button';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface AccordionProps {
  menuItems: IMenuItem[];
  size?: Size;
  fn?(): any;
}

const Accordion: FC<AccordionProps> = ({ menuItems, size = 'small' }) => {
  const [openedMenuName, setOpenedMenuName] = useState<string>('');
  const router = useRouter();

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpenedMenuName(e.target.textContent);
  };
  return (
    <ul className={classNames(styles.menu, styles[size])}>
      {menuItems.map(data => {
        return (
          <li className={styles.item} key={data.main}>
            <Button
              as="button"
              onClick={e => handleMenuClick(e)}
              color="mainDark"
              size="default"
              view="contained"
              animation="mouseRipple"
              extraClass={styles.menuItem}
              type="button"
            >
              {data.mainIcon}
              <span>{data.main}</span>
            </Button>
            <div
              className={cx('subMenuItemsWrapper', {
                active: openedMenuName === data.main,
              })}
            >
              {data.sub.map(({ title, link }) => {
                return (
                  <Link key={title} href={link}>
                    <a
                      className={cx('subMenuItem', {
                        activeSubMenuItem: router.pathname === link,
                      })}
                    >
                      <span>{title}</span>
                    </a>
                  </Link>
                );
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
