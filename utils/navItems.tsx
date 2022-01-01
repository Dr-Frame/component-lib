import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface SubMenu {
  title: string;
  link: string;
}

export interface IMenuItem {
  main: string;
  mainIcon?: ReactJSXElement;
  sub: SubMenu[];
}

export const menu: IMenuItem[] = [
  {
    main: 'Menu 1',
    sub: [
      { title: 'Sub menu 1', link: '' },
      { title: 'Sub menu 2', link: '' },
    ],
  },
  {
    main: 'Menu 2',
    sub: [
      { title: 'Sub menu 1', link: '' },
      { title: 'Sub menu 2', link: '' },
      { title: 'Sub menu 3', link: '' },
    ],
  },
  {
    main: 'Menu 3 ',
    sub: [
      { title: 'Sub menu 1', link: '' },
      { title: 'Sub menu 2', link: '' },
    ],
  },
];
