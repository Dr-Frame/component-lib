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
import ProgressIcon from '../ProgressIcon';
import Button from '../Button';
import { BiReset } from 'react-icons/bi';
import { MdOutlineSettingsBackupRestore } from 'react-icons/md';

const cx = classNames.bind(s);

interface WordItemProps {
  wordData: IWord;
}

function WordItem({ wordData }: WordItemProps) {
  const { word, translate, phonetics } = wordData;
  const [isModalOpen, setIsModalOpen] = useState(false);

  //redux
  const [deleteWord] = wordsApi.useDeleteWordMutation();
  const [updateWord] = wordsApi.useUpdateWordMutation();

  function resetWordProgress() {
    updateWord({ ...wordData, stage: 'new', trainingsDone: [] });
  }

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
          <Button
            as="button"
            size="default"
            extraClass={s.resetBtn}
            tooltip
            tooltipText="reset progress"
            tooltipSide="top"
            onClick={() => resetWordProgress()}
          >
            <MdOutlineSettingsBackupRestore />
          </Button>
          <ProgressIcon
            trainingsCompleteAmount={wordData.trainingsDone.length}
          />
          <IconButton
            extraClass={s.deleteBtn}
            size="default"
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
