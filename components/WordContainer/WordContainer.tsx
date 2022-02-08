import { useEffect, useRef, useState } from 'react';
import s from './WordContainer.module.scss';
import classNames from 'classnames/bind';
import { IWord } from '../../types/dictionaryTypes';
import { HiVolumeUp } from 'react-icons/hi';
import IconButton from '../IconButton';
import Image from 'next/image';
import { wordsApi } from '../../services/DictionaryService';
import updateWordProgress from '../../utils/updateWordProgress';
import ProgressIcon from '../ProgressIcon';

const cx = classNames.bind(s);

interface IWordContainerProps {
  word: IWord;
  setIsCorrect(arg: boolean): void;
  slide: number;
  setSlide(): void;
  isCorrect: boolean;
}

function WordContainer({
  word,
  setIsCorrect,
  slide,
  setSlide,
  isCorrect,
}: IWordContainerProps) {
  const [answer, setAnswer] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(0);
  const [startWordSplitted, setStartWordSplitted] = useState(
    word?.word.split(''),
  );
  const [splittedQuessWord, setSplittedQuessWord] = useState(
    word?.word.split(''),
  );
  const [wordObj, setWordObj] = useState({});
  const [mistakeAmount, setMistakeAmount] = useState(0);
  console.log('mistake', mistakeAmount);

  //rtk
  const [updateWord] = wordsApi.useUpdateWordMutation();

  //link to the <ul>
  const letterList = useRef(null);

  useEffect(() => {
    setMistakeAmount(0);
  }, [word]);

  useEffect(() => {
    setPosition(0);
    setAnswer([]);
  }, [slide]);

  console.log(word.stage);

  useEffect(() => {
    //when correct word play the sound if exsist
    if (answer.join('') === word.word) {
      setIsCorrect(true);
      updateWordProgress(mistakeAmount, word, updateWord, 'word-constructor');
      if (word.phonetics[0]) {
        const audio = new Audio(word.phonetics[0].audio);
        audio.play();
      }
      return;
    }
    setIsCorrect(false);
  }, [answer]);

  useEffect(() => {
    setWordObj(wordObjCreator(splittedQuessWord));
  }, [splittedQuessWord, word]);

  useEffect(() => {
    setSplittedQuessWord(word.word.split(''));
    setStartWordSplitted(word.word.split(''));
  }, [word]);

  function wordObjCreator(lettersArr: string[]) {
    const wordToQuessObject = lettersArr
      .sort(() => Math.random() - 0.5)
      .reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
    return wordToQuessObject;
  }

  function handleMistake() {
    setMistakeAmount(prevState => prevState + 1);
  }

  function newHandleClick(
    e: MouseEvent | KeyboardEvent,
    type: 'mouse' | 'keyboard',
  ) {
    if (type === 'mouse') {
      if (e.target.firstChild.textContent === startWordSplitted[position]) {
        const letterPosition = splittedQuessWord.indexOf(
          e.target.firstChild.textContent,
        );
        const copySplittedWord = [...splittedQuessWord];
        copySplittedWord.splice(letterPosition, 1);

        setSplittedQuessWord(copySplittedWord);
        setAnswer(prevState => [...prevState, e.target.firstChild.textContent]);
        setPosition(prevState => prevState + 1);
        return;
      }
      handleMistake();
    }
    //если буква верная
    if (type === 'keyboard' && e.key === startWordSplitted[position]) {
      const letterPosition = splittedQuessWord.indexOf(e.key);
      const copySplittedWord = [...splittedQuessWord];
      copySplittedWord.splice(letterPosition, 1);

      setSplittedQuessWord(copySplittedWord);
      setAnswer(prevState => [...prevState, e.key]);
      setPosition(prevState => prevState + 1);
    } //если буква не верная цвет
    else if (type === 'keyboard' && e.key !== startWordSplitted[position]) {
      if (letterList.current.children) {
        Object.values(letterList.current.children).forEach(liItem => {
          if (liItem?.firstChild?.textContent === e.key) {
            handleMistake();
            liItem.classList.add(cx(s.keyWrong));
          }
        });
      }
    }
  }

  //remove colors
  function removeColor(e: KeyboardEvent) {
    if (e.key !== startWordSplitted[position]) {
      if (letterList.current.children) {
        Object.values(letterList.current.children).forEach(liItem => {
          if (liItem?.firstChild?.textContent === e.key) {
            liItem.classList.remove(cx(s.keyWrong));
          }
        });
      }
    }
  }

  //handle keypress
  useEffect(() => {
    function addLetter(e: KeyboardEvent) {
      newHandleClick(e, 'keyboard');
    }

    window.addEventListener('keydown', addLetter);
    window.addEventListener('keyup', removeColor);
    return () => {
      window.removeEventListener('keydown', addLetter);
      window.removeEventListener('keyup', removeColor);
    };
  }, [position, startWordSplitted]);

  //handle enter press
  useEffect(() => {
    function nextWordPress(e: KeyboardEvent) {
      if (e.key === 'Enter' && isCorrect) {
        setSlide((prevState: number) => prevState + 1);
      }
    }
    window.addEventListener('keypress', nextWordPress);
    return () => {
      window.removeEventListener('keypress', nextWordPress);
    };
  }, [isCorrect]);

  return (
    <div className={s.wrapper}>
      <div className={s.stageWrapper}>
        <ProgressIcon trainingsCompleteAmount={word.trainingsDone.length} />
      </div>
      <p className={s.translatedWord}>{word.translate}</p>
      {isCorrect ? (
        <div className={s.soundWrapper}>
          {word.phonetics[0] ? (
            <IconButton
              extraClass={s.soundButton}
              size="small"
              theme="transparent"
              onClick={() => {
                const audio = new Audio(word.phonetics[0].audio);
                audio.play();
              }}
            >
              <HiVolumeUp className={s.soundButtonIcon} />
            </IconButton>
          ) : null}
          {word.phonetic ? (
            <p className={s.phonetic}>[`${word.phonetic}`]</p>
          ) : null}
        </div>
      ) : (
        <p className={s.description}>make up a word from letters below</p>
      )}

      <ul className={cx(s.list)}>
        {answer
          ? startWordSplitted.map((letter, i) => {
              return (
                <li
                  key={i}
                  className={cx(s.cellToFill, {
                    current: i === position,
                    quessed: answer[i],
                  })}
                >
                  {answer[i] ? answer[i] : ''}
                </li>
              );
            })
          : word.mix.map((_, i) => {
              return <li key={i} className={s.cellToFill}></li>;
            })}
      </ul>
      <ul
        className={cx(s.quessList, {
          hidden: isCorrect,
        })}
        ref={letterList}
      >
        {Object.keys(wordObj).length > 0 &&
          Object.entries(wordObj).map((letter, i) => {
            return (
              <li
                onClick={e => newHandleClick(e, 'mouse')}
                key={i}
                className={cx(s.cellToClick, {
                  wrong: letter[0] !== startWordSplitted[position],
                  right: letter[0] === startWordSplitted[position],
                })}
              >
                {letter[0]}
                {letter[1] > 1 && (
                  <span className={s.letterAmount}>{letter[1]}</span>
                )}
              </li>
            );
          })}
      </ul>

      {isCorrect ? (
        <div className={s.wordDescriptionWrapper}>
          <Image
            src="/../public/img/imagePlaceholder.png"
            alt="noImage"
            width={100}
            height={100}
          />
          {word.meanings[0].definitions && (
            <div className={s.exampleWrapper}>
              <p className={s.exTitle}>example:</p>
              <p className={s.exDescr}>
                {word.meanings[0].definitions[0].example}
              </p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
export default WordContainer;
