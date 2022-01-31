import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Constructor from '../../components/Constructor';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';
import s from './wordConstructor.module.scss';

function WordConstructor() {
  //rtk query
  /* const { data: wordList } = wordsApi.useGetWordsForTrainingQuery();

  function getFilteredForTraining(list: IWord[]) {
    let filteredWords = [...list]
      .sort(() => Math.random() - 0.5)
      .filter(item => !item.trainingsDone.includes('word-constructor'))
      .slice(0, 10);
    return filteredWords;
  }

  return (
    <div className={s.wrapper}>
      {wordList && <Constructor wordList={getFilteredForTraining(wordList)} />}
    </div>
  ); */
  const [fetchList] = wordsApi.useLazyGetWordsQuery();
  const [wordList, setWordList] = useState(null);

  function getFilteredForTraining(list: IWord[]) {
    console.log('list inside', list);
    if (list) {
      let filteredWords = [...list]
        .sort(() => Math.random() - 0.5)
        .filter(item => !item.trainingsDone.includes('word-constructor'))
        .slice(0, 10);
      return filteredWords;
    }
  }

  async function getList() {
    await fetchList()
      .then(({ data }) => getFilteredForTraining(data))
      .then(data => setWordList(data));
  }

  useEffect(() => {
    getList();
  }, []);
  console.log('WL', wordList);

  return (
    <div className={s.wrapper}>
      {wordList && <Constructor wordList={wordList} />}
    </div>
  );
}

export default WordConstructor;
