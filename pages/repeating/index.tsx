import { useEffect, useState } from 'react';
import Repeating from '../../components/Repeating';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';

interface IFilteredList {
  word: IWord;
  variants: string[];
}

export default function ReapitingPage() {
  const [filteredList, setFilteredList] = useState<IFilteredList[]>();
  const { data: wordList } = wordsApi.useGetWordsQuery();

  const WEEK_IN_MILISECONDS = 604800000;

  useEffect(() => {
    if (wordList) {
      //get words that didn't repeated for 1 week
      const filteredList = wordList.filter(word => {
        const currentDate = Date.now();
        const dateDifference = currentDate - word.lastRepeatDate;

        if (dateDifference > WEEK_IN_MILISECONDS) {
          return word;
        }
      });
      setFilteredList(getListForTraining(filteredList));
    }
  }, [wordList]);

  function getListForTraining(list: IWord[]) {
    const allWords = list
      .map(word => word.translate)
      .sort(() => 0.5 - Math.random());

    const listForTrainig = list.map(word => {
      const answer = word.translate;
      const randomVariants = [
        answer,
        allWords[Math.floor(Math.random() * allWords.length)],
      ].sort(() => 0.5 - Math.random());

      return { word, variants: randomVariants };
    });
    return listForTrainig.slice(0, 3);
  }

  return <div>{filteredList && <Repeating list={filteredList} />}</div>;
}
