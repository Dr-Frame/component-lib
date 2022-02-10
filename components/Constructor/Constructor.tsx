import { useEffect, useState } from 'react';
import { IWord } from '../../types/dictionaryTypes';
import Button from '../Button';
import NoWords from '../NoWords';
import WordContainer from '../WordContainer';
import s from './Constructor.module.scss';
import getUserPlace from '../../utils/linguo/getUserPlace';
import AwardAnimation from '../AwardAnimation';

interface IConstructorProps {
  wordList: IWord[];
}

function Constructor({ wordList }: IConstructorProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentWord, setCurrentWord] = useState<IWord>(wordList[0]);
  const [totalQuesedWords, setTotalQuesedWords] = useState(0);
  const [userPlace, setUserPlace] = useState<number>(0);

  console.log('sur cl', currentSlide);
  console.log('wl length', wordList.length);

  useEffect(() => {
    setUserPlace(getUserPlace(totalQuesedWords, wordList.length));
  }, [currentSlide, wordList]);

  useEffect(() => {
    setCurrentWord(wordList[currentSlide - 1]);
  }, [currentSlide]);

  return (
    <div className={s.slide}>
      {wordList.length === 0 && <NoWords />}
      {wordList.length > 0 && currentSlide > wordList.length && (
        <AwardAnimation
          place={userPlace}
          totalQuesedWords={totalQuesedWords}
          listLength={wordList.length}
        />
      )}
      {wordList.length > 0 && currentSlide <= wordList.length && (
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
            setTotalQuesedWords={setTotalQuesedWords}
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
            {currentSlide === wordList.length ? 'finish' : 'next word'}
          </Button>
        </>
      )}
    </div>
  );
}

export default Constructor;
