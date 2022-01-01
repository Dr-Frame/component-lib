import IconButton from '../../components/IconButton';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { FaRssSquare } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';
import s from './iconButton.module.scss';

function IconButtonPage() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <IconButton size="medium" theme="transparent" rounded>
          <AiOutlineAppstoreAdd fontSize="26" />
        </IconButton>
      </li>
      <li className={s.item}>
        <IconButton size="large" theme="mainLight">
          <FaRssSquare fontSize="30" />
        </IconButton>
      </li>
      <li className={s.item}>
        <IconButton size="small" theme="mainDark" rounded>
          <AiFillSetting fontSize="26" />
        </IconButton>
      </li>
      <li className={s.item}>
        <IconButton size="medium" theme="mainLight" rounded>
          <FaHome fontSize="26" />
        </IconButton>
      </li>
    </ul>
  );
}

export default IconButtonPage;
