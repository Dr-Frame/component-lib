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

  //link to the <ul>
  const letterList = useRef(null);

  useEffect(() => {
    setPosition(0);
    setAnswer([]);
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
    const wordToQuessObject = lettersArr
      .sort(() => Math.random() - 0.5)
      .reduce((prev, cur) => {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
    return wordToQuessObject;
  }

  function newHandleClick(e, type) {
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
      }
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
      <p className={s.translatedWord}>{word.translate}</p>
      <p className={s.description}>make up a word from letters below</p>

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
      <ul className={s.list} ref={letterList}>
        {Object.keys(wordObj).length > 0 ? (
          Object.entries(wordObj).map((letter, i) => {
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
        ) : (
          <div className={s.wordQuessed}></div>
        )}
      </ul>
    </div>
  );
}
export default WordContainer;
