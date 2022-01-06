import { useState } from 'react';
import Input from '../../components/Input';
import s from './inputPage.module.scss';

function InputPage() {
  const [test, setTest] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'test':
        setTest(e.target.value);
        break;
      case 'firstname':
        setFirstName(e.target.value);
        break;
      case 'secondname':
        setSecondName(e.target.value);
        break;
      case 'country':
        setCountry(e.target.value);
        break;
      case 'city':
        setCity(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <Input
          name="test"
          onChange={handleInputChange}
          label="Test"
          value={test}
          styleType="animated"
          theme="mainLight"
          isLabelHidden
          placeholder="test.."
        />
      </li>
      <li className={s.item}>
        <Input
          name="firstname"
          onChange={handleInputChange}
          label="Firstname"
          value={firstName}
          styleType="animated"
          theme="mainLight"
        />
      </li>
      <li className={s.item}>
        <Input
          name="secondname"
          onChange={handleInputChange}
          label="Second name"
          value={secondName}
          styleType="animated"
          theme="mainDark"
        />
      </li>
      <li className={s.item}>
        <Input
          name="country"
          onChange={handleInputChange}
          label="Country"
          value={country}
          styleType="standart"
          theme="mainLight"
        />
      </li>
      <li className={s.item}>
        <Input
          name="city"
          onChange={handleInputChange}
          label="City"
          value={city}
          styleType="standart"
          theme="mainDark"
        />
      </li>
    </ul>
  );
}

export default InputPage;
