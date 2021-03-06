import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import { IWord } from '../../types/dictionaryTypes';
import Button from '../Button';
import Input from '../Input';
import ProgressIcon from '../ProgressIcon';
import s from './TranslateTraining.module.scss';
import classNames from 'classnames/bind';
import { MdOutlineClose } from 'react-icons/md';
import updateWordProgress from '../../utils/updateWordProgress';
import { userExpApi, wordsApi } from '../../services/DictionaryService';
import IconButton from '../IconButton';
import { HiVolumeUp } from 'react-icons/hi';
import AwardAnimation from '../AwardAnimation';
import NoWords from '../NoWords';
import getUserPlace from '../../utils/linguo/getUserPlace';
import getLevelAndExp from '../../utils/calculateExpLevel';

const cx = classNames.bind(s);

interface ITranslateTrainingProps {
  wordList: IWord[];
  type: 'listening' | 'translating';
}

function TranslateTraining({ wordList, type }: ITranslateTrainingProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [currentWord, setCurrentWord] = useState<IWord>(wordList[0]);

  const [userTranslateText, setUserTranslateText] = useState<string>('');
  const [mistakesAmount, setMistakesAmount] = useState<number>(0);
  const [showCheck, setShowCheck] = useState<boolean>(false);
  const [totalQuesedWords, setTotalQuesedWords] = useState(0);
  const [userPlace, setUserPlace] = useState(0);

  //rtk
  const [updateWord] = wordsApi.useUpdateWordMutation();
  const { data: userExp } = userExpApi.useGetUserExpQuery(null);
  const [updateUserExp] = userExpApi.useUpdateUserExpMutation();

  function updateQuesedWordsAmount() {
    setTotalQuesedWords(prevState => prevState + 1);
  }

  useEffect(() => {
    setCurrentWord(wordList[0]);
  }, [wordList]);

  useEffect(() => {
    if (currentWord) {
      const audio = new Audio(currentWord.phonetics[0].audio);
      audio.play();
    }
  }, [currentWord]);

  useEffect(() => {
    setUserPlace(getUserPlace(totalQuesedWords, wordList.length));
  }, [totalQuesedWords]);

  useEffect(() => {
    setCurrentWord(wordList[currentSlide - 1]);
  }, [currentSlide]);

  useEffect(() => {
    let timer = setTimeout(() => {
      setShowCheck(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [showCheck]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserTranslateText(e.target.value);
  };

  const checkUserAnswer = () => {
    if (userTranslateText === currentWord.word) {
      setIsCorrect(true);
      updateWordProgress(mistakesAmount, currentWord, updateWord, 'writing');
      if (mistakesAmount === 0) {
        updateQuesedWordsAmount();
      }
      if (currentWord.phonetics[0]) {
        const audio = new Audio(currentWord.phonetics[0].audio);
        audio.play();
      }
      return;
    } else {
      setShowCheck(true);
      setIsCorrect(false);
      setMistakesAmount(prevState => prevState + 1);
    }
  };

  return (
    <div className={s.slide}>
      {wordList.length === 0 && <NoWords />}
      {wordList.length > 0 && currentSlide > wordList.length && (
        <AwardAnimation
          place={userPlace}
          totalQuesedWords={totalQuesedWords}
          listLength={wordList.length}
        />
      )}
      {currentWord && wordList.length > 0 && currentSlide <= wordList.length && (
        <>
          <p className={s.wordAmount}>
            Word: {currentSlide}/{wordList.length}
          </p>
          <div className={s.stageWrapper}>
            <ProgressIcon
              trainingsCompleteAmount={currentWord.trainingsDone.length}
            />
          </div>
          <div
            className={cx(s.trainingWrapper, {
              correct: isCorrect,
            })}
          >
            {type === 'translating' ? (
              <>
                <Image
                  src="/../public/img/imagePlaceholder.png"
                  alt="noImage"
                  width={100}
                  height={100}
                />
                <p className={s.translation}>{currentWord.translate}</p>
                {isCorrect && (
                  <>
                    <p className={s.word}>{currentWord.word}</p>
                    <div className={s.soundWrapper}>
                      {currentWord.phonetics[0] && (
                        <IconButton
                          extraClass={s.soundButton}
                          size="small"
                          theme="transparent"
                          onClick={() => {
                            const audio = new Audio(
                              currentWord.phonetics[0].audio,
                            );
                            audio.play();
                          }}
                        >
                          <HiVolumeUp className={s.soundButtonIcon} />
                        </IconButton>
                      )}
                      {currentWord.phonetic && (
                        <p className={s.phonetic}>
                          [`${currentWord.phonetic}`]
                        </p>
                      )}
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                {!isCorrect ? (
                  <>
                    <div className={cx(s.soundWrapper, s.listening)}>
                      <IconButton
                        extraClass={s.soundButton}
                        size="small"
                        theme="transparent"
                        onClick={() => {
                          const audio = new Audio(
                            currentWord.phonetics[0].audio,
                          );
                          audio.play();
                        }}
                      >
                        <HiVolumeUp
                          className={cx(s.soundButtonIcon, s.listening)}
                        />
                      </IconButton>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src="/../public/img/imagePlaceholder.png"
                      alt="noImage"
                      width={100}
                      height={100}
                    />
                    <p className={cx(s.word, s.listening)}>
                      {currentWord.word}
                    </p>
                    <div className={cx(s.soundWrapper, s.correct)}>
                      {currentWord.phonetics[0] && (
                        <IconButton
                          extraClass={s.soundButton}
                          size="small"
                          theme="transparent"
                          onClick={() => {
                            const audio = new Audio(
                              currentWord.phonetics[0].audio,
                            );
                            audio.play();
                          }}
                        >
                          <HiVolumeUp className={s.soundButtonIcon} />
                        </IconButton>
                      )}
                      {currentWord.phonetic && (
                        <p className={s.phonetic}>
                          [`${currentWord.phonetic}`]
                        </p>
                      )}
                      <p className={s.translation}>{currentWord.translate}</p>
                    </div>
                  </>
                )}
              </>
            )}

            {!isCorrect && (
              <div className={s.inputWrapper}>
                <Input
                  onChange={handleInputChange}
                  value={userTranslateText}
                  placeholder={
                    type === 'translating'
                      ? 'type translation here..'
                      : 'type a pronounced word..'
                  }
                  styleType="standart"
                  theme="mainDark"
                  isLabelHidden
                  type="text"
                  label="translate"
                  name="userTranslate"
                  extraClass={cx(s.input, {
                    wrong: showCheck,
                  })}
                />
                <div className={s.buttonCheckWrapper}>
                  <Button
                    onClick={() => checkUserAnswer()}
                    as="button"
                    color="mainDark"
                    size="small"
                    uppercase
                    extraClass={s.buttonCheck}
                  >
                    check
                  </Button>
                  {showCheck && (
                    <MdOutlineClose className={s.wrongAnswerIcon} />
                  )}
                </div>
              </div>
            )}
          </div>

          <Button
            as="button"
            color="mainDark"
            size="small"
            uppercase
            disabled={!isCorrect}
            onClick={() => {
              setUserTranslateText('');
              setMistakesAmount(0);
              setIsCorrect(false);
              setCurrentSlide(prevState => prevState + 1);
              if (currentSlide === wordList.length) {
                updateUserExp(
                  getLevelAndExp(userExp?.lvl, userExp?.exp, totalQuesedWords),
                );
              }
            }}
            extraClass={s.button}
          >
            {currentSlide === wordList.length ? 'finish' : 'next word'}
          </Button>
        </>
      )}
    </div>
  );
}

export default TranslateTraining;
