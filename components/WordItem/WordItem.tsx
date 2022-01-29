import s from './WordItem.module.scss';
import classNames from 'classnames/bind';
import { HiVolumeUp } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import IconButton from '../IconButton';
import { BsBook, BsBookHalf, BsBookFill } from 'react-icons/bs';
import { IWord } from '../../types/dictionaryTypes';
import { wordsApi } from '../../services/DictionaryService';
import { useState } from 'react';
import Modal from '../Modal';
import WordCard from '../WordCard';

const cx = classNames.bind(s);

interface WordItemProps {
  wordData: IWord;
}

function WordItem({ wordData }: WordItemProps) {
  const { word, translate, phonetics } = wordData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  //redux
  const [deleteWord] = wordsApi.useDeleteWordMutation();

  return (
    <>
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

        <div
          className={s.translationWrapper}
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          <p className={s.english}>{word}</p>
          <p className={s.translation}>{translate}</p>
        </div>
        <div className={s.stageWrapper}>
          {wordData.stage === 0 && (
            <BsBook className={cx(s.stageIcon, s.new)} />
          )}
          {wordData.stage === 1 && (
            <BsBookHalf className={cx(s.stageIcon, s.half)} />
          )}
          {wordData.stage === 2 && (
            <BsBookFill className={cx(s.stageIcon, s.done)} />
          )}
          <IconButton
            extraClass={s.deleteBtn}
            size="medium"
            onClick={() => deleteWord(wordData.id)}
          >
            <MdDelete className={s.deleteButtonIcon} />
          </IconButton>
        </div>
      </li>
      <Modal active={isModalOpen} setActive={setIsModalOpen}>
        <WordCard wordData={wordData} isAddFuncOn={false} />
      </Modal>
    </>
  );
}

export default WordItem;
