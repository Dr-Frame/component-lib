import { useEffect, useState } from 'react';
import Constructor from '../../components/Constructor';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';
import getList from '../../utils/linguo/getListAsync';
import s from './wordConstructor.module.scss';

function WordConstructor() {
  //rtk query
  /* const { data: wordList } = wordsApi.useGetWordsForTrainingQuery(); */

  const [fetchList] = wordsApi.useLazyGetWordsQuery();
  const [wordList, setWordList] = useState<IWord[] | null>(null);

  useEffect(() => {
    getList(fetchList, 'word-constructor', 100, setWordList);
  }, []);

  return (
    <div className={s.wrapper}>
      {wordList && <Constructor wordList={wordList} />}
    </div>
  );
}

export default WordConstructor;
