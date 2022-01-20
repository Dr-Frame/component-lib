import { useEffect, useRef, useState } from 'react';
import s from './WordContainer2.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

function WordContainer({ word, setIsCorrect, slide }) {
  const [answer, setAnswer] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(0);
  const [startWordSplitted] = useState(word.word.split(''));
  const [splittedQuessWord, setSplittedQuessWord] = useState(
    word.word.split(''),
  );
  const [wordObj, setWordObj] = useState({});

  useEffect(() => {
    setPosition(0);
    setAnswer([]);
  }, []);

  /* useEffect(() => {
    answer.join('') === word.word ? setIsCorrect(true) : setIsCorrect(false);
  }, [answer]); */

  useEffect(() => {
    setWordObj(wordObjCreator(splittedQuessWord));
  }, [splittedQuessWord]);

  function wordObjCreator(lettersArr) {
    const wordToQuessObject = lettersArr.reduce((prev, cur) => {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {});
    return wordToQuessObject;
  }

  /* console.log('SPLIT', splittedQuessWord);
  console.log('MAP', wordObj); */

  function newHandleClick(e) {
    if (e.target.firstChild.textContent === startWordSplitted[position]) {
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

  console.log('ANSWER', answer);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {Object.entries(wordObj).map((letter, i) => {
          return (
            <li
              onClick={newHandleClick}
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
        })}
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

/* onClick={e => handleSelectLetter(e, i)}
              key={i}
              className={cx(
                s.cellToClick,
                s.cellToFill {
                wrong: letter !== splittedQuessWord[position],
                right: letter === splittedQuessWord[position],
                hidden: answer.includes(letter),
              },
              )} */
