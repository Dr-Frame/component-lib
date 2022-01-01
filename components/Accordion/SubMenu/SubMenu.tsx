import React, { FC, useState } from 'react';
import styles from './SubMenu.module.scss';
import Link from 'next/link';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import classNames from 'classnames/bind';
import { IMenuItem } from '../../../utils/navItems';
import { useRouter } from 'next/router';
import Button from '../../Button';

//TODO: БОЛЬШЕ НЕ ИСПОЛЬЗУЕТСЯ

const cx = classNames.bind(styles);

interface SubMenuProps {
  data: IMenuItem;
  name: string;
  setName(name: string): void;
}

function SubMenu({ data, name, setName }: SubMenuProps) {
  const router = useRouter();

  const handleMenuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setName(e.target.textContent);
  };

  return (
    <>
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
        <PersonOutlineOutlinedIcon className={styles.icon} />
        <span>{data.main}</span>
      </Button>
      <div
        className={cx('subMenuItemsWrapper', {
          active: name === data.main,
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
    </>
  );
}

export default SubMenu;
