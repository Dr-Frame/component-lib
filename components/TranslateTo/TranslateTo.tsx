import Button from '../Button';
import ProgressIcon from '../ProgressIcon';
import s from './TranslateTo.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AwardAnimation from '../AwardAnimation';
import { IWord, IWordForTraining } from '../../types/dictionaryTypes';
import getUserPlace from '../../utils/linguo/getUserPlace';
import classNames from 'classnames/bind';
import IconButton from '../IconButton';
import { HiVolumeUp } from 'react-icons/hi';
import { userExpApi, wordsApi } from '../../services/DictionaryService';
import updateWordProgress from '../../utils/updateWordProgress';
import getLevelAndExp from '../../utils/calculateExpLevel';

const cx = classNames.bind(s);

interface ITranslateToProps {
  wordList: IWordForTraining[];
  translateTo: 'native' | 'english';
}

interface ICurrentAnswer {
  index: number;
  word: string;
}

function TranslateTo({ wordList, translateTo }: ITranslateToProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isChosed, setIsChosed] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<ICurrentAnswer | null>(
    null,
  );
  const [currentWord, setCurrentWord] = useState<IWord | string>('');

  const [mistakesAmount, setMistakesAmount] = useState(0);
  const [totalQuesedWords, setTotalQuesedWords] = useState(0);
  const [userPlace, setUserPlace] = useState(0);

  //rtk
  const [updateWord] = wordsApi.useUpdateWordMutation();
  const { data: userData } = userExpApi.useGetUserExpQuery();
  const [updateUser] = userExpApi.useUpdateUserExpMutation();

  useEffect(() => {
    setIsChosed(false);
  }, []);

  useEffect(() => {
    if (isChosed) {
      const audio = new Audio(
        wordList[currentSlide - 1].word.phonetics[0].audio,
      );
      audio.play();
    }
  }, [isChosed]);

  useEffect(() => {
    if (currentSlide <= wordList.length) {
      setCurrentWord(wordList[currentSlide - 1].word);
    }
  }, [currentSlide]);

  useEffect(() => {
    setCurrentAnswer(null);
  }, [currentSlide]);

  useEffect(() => {
    setUserPlace(getUserPlace(totalQuesedWords, wordList.length));
  }, [totalQuesedWords]);

  function handleAnswerClick(e: React.ChangeEvent<HTMLButtonElement>) {
    if (isChosed) {
      return;
    }
    let wordToCompare;
    translateTo === 'english'
      ? (wordToCompare = currentWord.word)
      : (wordToCompare = currentWord.translate);

    if (e.target.textContent === wordToCompare) {
      setTotalQuesedWords(prev => prev + 1);
      updateWordProgress(
        mistakesAmount,
        currentWord,
        updateWord,
        translateTo === 'english' ? 'translate-to' : 'translate-from',
      );

      updateUser(getLevelAndExp(userData?.lvl, userData?.exp, 2));
    } else {
      setMistakesAmount(prev => prev + 1);
    }
    /* console.log('currentWord inside', currentWord.word); */
    const choosedItemIndex = wordList[currentSlide - 1].variants.indexOf(
      e.target.textContent,
    );
    setCurrentAnswer({
      index: choosedItemIndex,
      word:
        translateTo === 'english' ? currentWord.word : currentWord.translate,
    });

    setIsChosed(true);
  }

  /*  function handleKeyPress(e: React.KeyboardEvent<HTMLButtonElement>) {
    const pressedIndex = e.key - 1;
    const keyLimits = [0, 1, 2, 3, 4];
    if (isChosed || !keyLimits.includes(pressedIndex)) {
      return;
    }

    if (
      wordList[currentSlide - 1].variants[pressedIndex] ===
      wordList[currentSlide - 1].word.word
    ) {
      setTotalQuesedWords(prev => prev + 1);
      updateWordProgress(
        mistakesAmount,
        wordList[currentSlide - 1].word,
        updateWord,
        'translate-to',
      );

      updateUser(getLevelAndExp(userData?.lvl, userData?.exp, 2));
    } else {
      setMistakesAmount(prev => prev + 1);
    }
    setCurrentAnswer({
      index: pressedIndex,
      word: currentWord.word,
    });
    setIsChosed(true);
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isChosed]);

  function handleEnterPress(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (isChosed && e.key === 'Enter') {
      setMistakesAmount(0);
      setIsChosed(false);
      setCurrentSlide(prevState => prevState + 1);
    }
  }

  useEffect(() => {
    if (isChosed) {
      window.addEventListener('keydown', handleEnterPress);
    }
    return () => {
      window.removeEventListener('keydown', handleEnterPress);
    };
  }, [isChosed]); */

  console.log('cur word', currentWord);
  console.log(translateTo);

  return (
    <div className={s.slide}>
      {wordList.length > 0 && currentSlide > wordList.length && (
        <AwardAnimation
          place={userPlace}
          totalQuesedWords={totalQuesedWords}
          listLength={wordList.length}
        />
      )}
      {wordList.length > 0 && currentSlide <= wordList.length && (
        <>
          <div className={s.statWrapper}>
            <div className={s.stageWrapper}>
              {currentWord && (
                <ProgressIcon
                  trainingsCompleteAmount={currentWord.trainingsDone.length}
                />
              )}
            </div>
            <p className={s.wordAmount}>
              Word: {currentSlide}/{wordList.length}
            </p>
          </div>
          <div className={s.wordsWrapper}>
            <div className={s.hintWrapper}>
              <div className={s.img}>
                <Image
                  src="/../public/img/imagePlaceholder.png"
                  alt="noImage"
                  width={100}
                  height={100}
                />
              </div>
              <div className={s.soundWrapper}>
                {isChosed && currentWord.phonetics[0] && (
                  <IconButton
                    extraClass={s.soundButton}
                    size="small"
                    theme="transparent"
                    onClick={() => {
                      const audio = new Audio(currentWord.phonetics[0].audio);
                      audio.play();
                    }}
                  >
                    <HiVolumeUp className={s.soundButtonIcon} />
                  </IconButton>
                )}
                {currentWord.phonetic && isChosed && (
                  <p className={s.phonetic}>[`${currentWord.phonetic}`]</p>
                )}
              </div>
              <p className={s.hint}>
                {translateTo === 'english'
                  ? currentWord.translate
                  : currentWord.word}
              </p>
            </div>

            <ul className={s.listWrapper}>
              {wordList[currentSlide - 1].variants.map((word, i) => {
                /* if (currentAnswer) {
                  console.log('currentWord', currentWord);

                  console.log(
                    'i',
                    i,
                    ' | currentAnswer?.index',
                    currentAnswer?.index,
                    ' | word',
                    word,
                    ' | currentAnswer.word',
                    currentAnswer.word,
                  );
                } */

                return (
                  <li key={i} className={s.itemWrap}>
                    <p className={s.number}>{i + 1}</p>
                    <button
                      type="button"
                      disabled={isChosed}
                      className={cx(s.word, {
                        correct:
                          (currentAnswer?.index === i &&
                            word === currentAnswer.word &&
                            translateTo === 'english') ||
                          (currentAnswer?.index === i &&
                            word === currentAnswer.translate &&
                            translateTo === 'native'),
                        wrong:
                          (currentAnswer?.index === i &&
                            word !== currentAnswer.word &&
                            translateTo === 'english') ||
                          (currentAnswer?.index === i &&
                            word !== currentAnswer.translate &&
                            translateTo === 'native'),
                        shouldBe:
                          (currentWord.word === word &&
                            isChosed &&
                            translateTo === 'english') ||
                          (currentWord.translate === word &&
                            isChosed &&
                            translateTo === 'native'),
                      })}
                      onClick={e => {
                        handleAnswerClick(e);
                        const audio = new Audio(currentWord.phonetics[0].audio);
                        audio.play();
                      }}
                    >
                      {word}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button
            as="button"
            color="mainDark"
            size="small"
            uppercase
            disabled={!isChosed}
            onClick={() => {
              setMistakesAmount(0);
              setIsChosed(false);
              setCurrentSlide(prevState => prevState + 1);
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

export default TranslateTo;
