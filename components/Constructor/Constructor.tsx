import { useEffect, useState } from 'react';
import { IWord } from '../../types/dictionaryTypes';
import Button from '../Button';
import WordContainer from '../WordContainer';
import s from './Constructor.module.scss';

interface IConstructorProps {
  wordList: IWord[];
}

/* const wordList = [
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
]; */

function Constructor({ wordList }: IConstructorProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWord, setCurrentWord] = useState(wordList[0]);

  useEffect(() => {
    setCurrentWord(wordList[currentSlide - 1]);
  }, [currentSlide]);

  return (
    <div className={s.slide}>
      {wordList && (
        <>
          <p className={s.wordAmount}>
            Word: {currentSlide}/{wordList.length}
          </p>

          <WordContainer
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
        </>
      )}
    </div>
  );
}

export default Constructor;
