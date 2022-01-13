import { useState } from 'react';
import MySelect from '../../components/MySelect';

const itemList = ['buy', 'sell'];

function SelectPage() {
  const [selected, setSelected] = useState('');
  return (
    <div>
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
