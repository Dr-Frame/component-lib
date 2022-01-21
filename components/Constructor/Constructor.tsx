import { useEffect, useState } from 'react';
import Button from '../Button';
import WordContainer2 from '../WordContainer2';
import s from './Constructor.module.scss';

interface IConstructorProps {}

const wordList = [
  {
    word: 'concrete',
    translate: 'цемент',
  },
  {
    word: 'mother',
    translate: 'мама',
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
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWord, setCurrentWord] = useState(wordList[0]);

  useEffect(() => {
    setCurrentWord(wordList[currentSlide - 1]);
  }, [currentSlide]);

  return (
    <div className={s.slide}>
      <p className={s.wordAmount}>
        Word: {currentSlide}/{wordList.length}
      </p>

      <WordContainer2
        word={currentWord}
        isCorrect={isCorrect}
        setIsCorrect={setIsCorrect}
        slide={currentSlide}
        setSlide={setCurrentSlide}
      />
      <Button
        as="button"
        color="mainDark"
        size="small"
        uppercase
        disabled={!isCorrect}
        onClick={() => setCurrentSlide(prevState => prevState + 1)}
        extraClass={s.button}
      >
        next word
      </Button>
    </div>
  );
}

export default Constructor;
