import { FC } from 'react';
import Accordion from '../components/Accordion';
import { menu } from '../utils/navItems';

interface AccordionPageProps {}

const AccordionPage: FC<AccordionPageProps> = () => {
  return <Accordion menuItems={menu} />;
};

export default AccordionPage;
