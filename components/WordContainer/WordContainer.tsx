import { useEffect, useRef, useState } from 'react';
import s from './WordContainer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

function WordContainer({ word, setIsCorrect, slide }) {
  const [answer, setAnswer] = useState<string[]>([]);
  const [position, setPosition] = useState<number>(0);

  const splittedQuessWord = word.word.split('');

  const li = useRef();
  useEffect(() => {
    function addLetter(this: Window, e: KeyboardEvent) {
      //реагирует на нажатия букв только которіе в слове есть
      if (splittedQuessWord.includes(e.key) && li.current?.children) {
        let indexOfLetterQuess = 0;
        Object.values(li.current.children).forEach((child, i) => {
          if (child.innerText === e.key) {
            indexOfLetterQuess = i;
          }
        });

        //если нажатая буква есть правильной
        if (e.key === splittedQuessWord[position]) {
          setAnswer(prevState => [...prevState, e.key]);
          setPosition(prevState => prevState + 1);
        } else {
          //если буква нажатая неправильная подсветит красным, если правильная, добавит в ответ и спрячет в подсказке
          Object.values(li.current.children)[indexOfLetterQuess].classList.add(
            cx('keyWrong'),
          );
        }
      }
    }

    function removeColor(e: KeyboardEvent) {
      if (splittedQuessWord.includes(e.key) && li?.current?.children !== null) {
        // ищем в на какой позиции находиттся буква в строке с буквами подсказками
        let indexOfLetterQuess = 0;
        Object.values(li.current.children).forEach((child, i) => {
          if (child.innerText === e.key) {
            indexOfLetterQuess = i;
          }
        });
        //когда нашли убираем клас
        Object.values(li.current.children)[indexOfLetterQuess].classList.remove(
          cx('keyWrong'),
        );
      }
    }

    window.addEventListener('keydown', addLetter);
    window.addEventListener('keyup', removeColor);
    return () => {
      /* window.removeEventListener('keydown', addLetter); */
      /* window.removeEventListener('keyup', removeColor); */
    };
  }, [position]);

  function handleSelectLetter(e: React.MouseEvent<HTMLLIElement>) {
    if (e.target.textContent === splittedQuessWord[position]) {
      setAnswer(prevState => [...prevState, e.target.textContent]);
      setPosition(prevState => prevState + 1);
    }
  }

  useEffect(() => {
    setPosition(0);
  }, []);

  useEffect(() => {
    setAnswer([]);
    setPosition(0);
  }, [slide]);

  useEffect(() => {
    answer.join('') === word.word ? setIsCorrect(true) : setIsCorrect(false);
  }, [answer]);

  console.log('STATE');
  console.log('ANSWER', answer);
  console.log('POSITION', position);
  console.log('Supposed ', splittedQuessWord[position]);

  return (
    <div className={s.wrapper}>
      <p className={s.translatedWord}>{word.translate}</p>
      <p className={s.description}>make up a word from letters below</p>
      {/* <div>upper empty line</div> */}
      <ul className={s.list}>
        {answer
          ? splittedQuessWord?.map((letter, i) => {
              return (
                <li
                  key={i}
                  className={cx(s.cellToFill, {
                    current: i === position,
                    quessed: answer.includes(letter),
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
      {/*  <div>bottom ready line</div> */}
      <ul className={s.list} ref={li}>
        {word.mix.map((letter, i) => {
          console.log('INSIDE');
          console.log(letter);
          console.log(splittedQuessWord[position]);

          return (
            <li
              onClick={e => handleSelectLetter(e, i)}
              key={i}
              className={cx(s.cellToClick, s.cellToFill, {
                wrong: letter !== splittedQuessWord[position],
                right: letter === splittedQuessWord[position],
                hidden: answer.includes(letter),
              })}
            >
              {letter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WordContainer;
