import s from './WordItem.module.scss';
import classNames from 'classnames/bind';
import { HiVolumeUp } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import IconButton from '../IconButton';
import { BsBook, BsBookHalf, BsBookFill } from 'react-icons/bs';
import { IWord } from '../../types/dictionaryTypes';

const cx = classNames.bind(s);

interface WordItemProps {
  wordData: IWord;
}

function WordItem({ wordData }: WordItemProps) {
  const { word, translate, phonetics } = wordData;
  return (
    <li className={s.item}>
      <IconButton
        extraClass={s.soundButton}
        size="medium"
        onClick={() => {
          const audio = new Audio(phonetics[0].audio);
          audio.play();
        }}
      >
        <HiVolumeUp className={s.soundButtonIcon} />
      </IconButton>

      <div className={s.translationWrapper}>
        <p className={s.english}>{word}</p>
        <p className={s.translation}>{translate}</p>
      </div>
      <div className={s.stageWrapper}>
        {<BsBook className={s.stageIcon} />}
        <IconButton extraClass={s.deleteBtn} size="medium">
          <MdDelete className={s.deleteButtonIcon} />
        </IconButton>
      </div>
    </li>
  );
}

export default WordItem;
