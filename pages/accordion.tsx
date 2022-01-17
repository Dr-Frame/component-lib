import { FC } from 'react';
import Accordion from '../components/Accordion';
import { menu } from '../utils/navItems';

interface AccordionPageProps {}

const AccordionPage: FC<AccordionPageProps> = () => {
  return (
    <div style={{ width: '300px' }}>
      <Accordion menuItems={menu} />
    </div>
  );
};

export default AccordionPage;
