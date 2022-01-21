import { useEffect, useRef, useState } from 'react';
import s from './WordContainer2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

function WordContainer({ word, setIsCorrect, slide, setSlide, isCorrect }) {
  const [answer, setAnswer] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(0);
  const [startWordSplitted, setStartWordSplitted] = useState(
    word.word.split(''),
  );
  const [splittedQuessWord, setSplittedQuessWord] = useState(
    word.word.split(''),
  );
  const [wordObj, setWordObj] = useState({});

  console.log('WORD CONTAINER answer', answer);
  console.log('WORD CONTAINER position', position);
  console.log('WORD CONTAINER startWordSplitted', startWordSplitted);
  console.log('WORD CONTAINER splittedQuessWord', splittedQuessWord);
  console.log('WORD CONTAINER wordObj', wordObj);

  useEffect(() => {
    setPosition(0);
    setAnswer([]);
    /* setStartWordSplitted(''); */
  }, [slide]);

  useEffect(() => {
    answer.join('') === word.word ? setIsCorrect(true) : setIsCorrect(false);
  }, [answer]);

  useEffect(() => {
    setWordObj(wordObjCreator(splittedQuessWord));
  }, [splittedQuessWord, word]);

  useEffect(() => {
    setSplittedQuessWord(word.word.split(''));
    setStartWordSplitted(word.word.split(''));
  }, [word]);

  function wordObjCreator(lettersArr) {
    const wordToQuessObject = lettersArr.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    return wordToQuessObject;
  }

  function newHandleClick(e, type) {
    if (type === 'mouse') {
      if (e.target.firstChild.textContent === startWordSplitted[position]) {
        console.log('INSIDE click works');
        console.log('INSIDE fn key', e.key);
        console.log('INSIDE fn word pos', startWordSplitted[position]);
        console.log('INSIDE startWordSplitted', startWordSplitted);
        const letterPosition = splittedQuessWord.indexOf(
          e.target.firstChild.textContent,
        );
        const copySplittedWord = [...splittedQuessWord];
        copySplittedWord.splice(letterPosition, 1);

        setSplittedQuessWord(copySplittedWord);
        setAnswer(prevState => [...prevState, e.target.firstChild.textContent]);
        setPosition(prevState => prevState + 1);
      }
    }
    if (type === 'keyboard' && e.key === startWordSplitted[position]) {
      /*  console.log('fn key', e.key);
      console.log('fn word pos', startWordSplitted[position]); */

      const letterPosition = splittedQuessWord.indexOf(e.key);
      const copySplittedWord = [...splittedQuessWord];
      copySplittedWord.splice(letterPosition, 1);

      setSplittedQuessWord(copySplittedWord);
      setAnswer(prevState => [...prevState, e.key]);
      setPosition(prevState => prevState + 1);
    }
  }

  useEffect(() => {
    function addLetter(e: KeyboardEvent) {
      newHandleClick(e, 'keyboard');
    }

    window.addEventListener('keydown', addLetter);
    return () => window.removeEventListener('keydown', addLetter);
  }, [position, startWordSplitted]);

  useEffect(() => {
    function nextWordPress(e: KeyboardEvent) {
      if (e.key === 'Enter' && isCorrect) {
        setSlide(prevState => prevState + 1);
      }
    }
    window.addEventListener('keypress', nextWordPress);
    return () => {
      window.removeEventListener('keypress', nextWordPress);
    };
  }, [isCorrect]);

  /* console.log(position); */

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {Object.keys(wordObj).length > 0
          ? Object.entries(wordObj).map((letter, i) => {
              return (
                <li
                  onClick={e => newHandleClick(e, 'mouse')}
                  key={i}
                  className={cx(s.cellToFill, s.cellToClick, {
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
            })
          : 'net bukv podskazok'}
      </ul>
      <ul className={s.list}>
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

      <p>another variant</p>
    </div>
  );
}
export default WordContainer;
