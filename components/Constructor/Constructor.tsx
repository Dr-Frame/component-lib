import { useEffect, useState } from 'react';
import { IWord } from '../../types/dictionaryTypes';
import Button from '../Button';
import WordContainer from '../WordContainer';
import s from './Constructor.module.scss';

interface IConstructorProps {
  wordList: IWord[];
}

function Constructor({ wordList }: IConstructorProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWord, setCurrentWord] = useState<IWord>(wordList[0]);

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
