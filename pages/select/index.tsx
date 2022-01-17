import { useState } from 'react';
import MySelect from '../../components/MySelect';
import s from './select.module.scss';

const itemList = ['buy', 'sell'];

function SelectPage() {
  const [selected, setSelected] = useState('');
  return (
    <div className={s.select}>
      <MySelect
        list={itemList}
        selected={selected}
        setSelected={setSelected}
        theme="mainLight"
        animated={true}
      />
    </div>
  );
}

export default SelectPage;
