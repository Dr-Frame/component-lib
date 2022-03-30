import { useEffect, useState } from 'react';
import { IWord } from '../../types/dictionaryTypes';
import ProgressIcon from '../ProgressIcon';
import s from './Repeating.module.scss';
import classNames from 'classnames/bind';
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from 'react-icons/bs';
import NoWords from '../NoWords';
import AwardAnimation from '../AwardAnimation';
import getUserPlace from '../../utils/linguo/getUserPlace';

const cx = classNames.bind(s);

interface IFilteredList {
  word: IWord;
  variants: string[];
}

interface IRepeatingProps {
  list: IFilteredList[];
}

export default function Repeating({ list }: IRepeatingProps) {
  const [wordList, setWordList] = useState<IFilteredList[]>(list);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isChoosed, setIsChoosed] = useState(false);
  const [wordsLeft, setWordsLeft] = useState(list.length + 1);
  const [currentWord, setCurrentWord] = useState<IFilteredList>();
  const [totalQuessedWords, setTotalQuessedWords] = useState(0);
  const [userPlace, setUserPlace] = useState(0);

  useEffect(() => {
    if (wordList) {
      setCurrentWord(wordList[currentSlide - 1]);
      setWordsLeft(prev => prev - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (wordList[currentSlide - 1]) {
      const audio = new Audio(
        wordList[currentSlide - 1].word.phonetics[0].audio,
      );
      audio.play();
    }
  }, [currentSlide]);

  useEffect(() => {
    setIsChoosed(false);
  }, [currentSlide]);

  useEffect(() => {
    let showAnswerTimer: ReturnType<typeof setTimeout>;
    if (isChoosed) {
      showAnswerTimer = setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(showAnswerTimer);
    };
  }, [isChoosed]);

  useEffect(() => {
    setUserPlace(getUserPlace(totalQuessedWords, wordList.length));
  }, [totalQuessedWords]);

  function handleAnswerClick(e: React.ChangeEvent<HTMLButtonElement>) {
    if (e.target.textContent === currentWord?.word.translate) {
      setTotalQuessedWords(prev => prev + 1);
      setIsChoosed(true);
    } else {
      setIsChoosed(true);
    }
  }

  return (
    <div className={s.slide}>
      {wordList.length === 0 && <NoWords />}
      {wordList.length > 0 && currentSlide > wordList.length && (
        <AwardAnimation
          place={userPlace}
          totalQuesedWords={totalQuessedWords}
          listLength={wordList.length}
        />
      )}
      {currentWord && wordList.length > 0 && currentSlide <= wordList.length && (
        <>
          {' '}
          <p className={s.wordAmount}>
            Word: {currentSlide}/{wordList.length}
          </p>
          <div className={s.stageWrapper}>
            {currentWord && (
              <ProgressIcon
                trainingsCompleteAmount={currentWord.word.trainingsDone.length}
              />
            )}
          </div>
          <div className={s.trainingWrapper}>
            <div className={s.wordsAmountWrapper}>
              <p className={s.wordsAmount}>{`${wordsLeft} words`}</p>
            </div>
            {currentWord && <p className={s.word}>{currentWord.word.word}</p>}

            <div className={s.variantsWrapper}>
              {wordList[currentSlide - 1].variants.map((word, i) => {
                return (
                  <div key={i} className={s.item}>
                    <button
                      disabled={isChoosed}
                      type="button"
                      className={cx(s.variant, {
                        correct:
                          isChoosed && word === currentWord.word.translate,
                        wrong: isChoosed && word !== currentWord.word.translate,
                      })}
                      onClick={handleAnswerClick}
                    >
                      {word}
                    </button>
                    {i === 0 ? (
                      <BsFillArrowLeftSquareFill className={s.icon} />
                    ) : (
                      <BsFillArrowRightSquareFill className={s.icon} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
