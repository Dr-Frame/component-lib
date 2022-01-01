import { useState } from 'react';
import Input from '../../components/Input';
import s from './inputPage.module.scss';

function InputPage() {
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);

    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    switch (e.target.name) {
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
          name="firstname"
          onChange={handleInputChange}
          label="Firstname"
          value={firstName}
          type="animated"
          theme="mainLight"
        />
      </li>
      <li className={s.item}>
        <Input
          name="secondname"
          onChange={handleInputChange}
          label="Second name"
          value={secondName}
          type="animated"
          theme="mainDark"
        />
      </li>
      <li className={s.item}>
        <Input
          name="country"
          onChange={handleInputChange}
          label="Country"
          value={country}
          type="standart"
          theme="mainLight"
        />
      </li>
      <li className={s.item}>
        <Input
          name="city"
          onChange={handleInputChange}
          label="City"
          value={city}
          type="standart"
          theme="mainDark"
        />
      </li>
    </ul>
  );
}

export default InputPage;
