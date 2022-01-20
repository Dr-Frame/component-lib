import { useState } from 'react';
import Button from '../Button';
import WordContainer from '../WordContainer';
import s from './Constructor.module.scss';

interface IConstructorProps {}

const wordList = [
  {
    word: 'mother',
    translate: 'мама',
  },
  {
    word: 'concrete',
    translate: 'цемент',
  },

  {
    word: 'father',
    translate: 'папа',
  },
  {
    word: 'road',
    translate: 'мама',
  },

  {
    word: 'lazy',
    translate: 'ленивый',
  },
  {
    word: 'crazy',
    translate: 'сумасшедший',
  },
  {
    word: 'victim',
    translate: 'жертва',
  },
  {
    word: 'brave',
    translate: 'мужественный',
  },
  {
    word: 'learn',
    translate: 'учить',
  },
  {
    word: 'priest',
    translate: 'священник',
  },
];

function Constructor() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);

  function addMixed(list) {
    list.forEach(
      item => (item.mix = item.word.split('').sort(() => Math.random() - 0.5)),
    );
  }
  addMixed(wordList);

  let currentWord = wordList[currentSlide - 1];
  console.log(currentWord);

  return (
    <div className={s.slide}>
      <p className={s.wordAmount}>
        Word: {currentSlide}/{wordList.length}
      </p>

      <WordContainer
        word={currentWord}
        setIsCorrect={setIsCorrect}
        slide={currentSlide}
      />

      <Button
        as="button"
        color="mainDark"
        size="small"
        uppercase
        disabled={!isCorrect}
        onClick={() => setCurrentSlide(currentSlide + 1)}
        extraClass={s.button}
      >
        next word
      </Button>
    </div>
  );
}

export default Constructor;
