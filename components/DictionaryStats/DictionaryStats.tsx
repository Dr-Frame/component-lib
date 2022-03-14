import { useEffect, useState } from 'react';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';
import s from './DictionaryStats.module.scss';

interface IDictionaryData {
  total: number;
  new: number;
  inProgress: number;
  done: number;
}

export default function DictionaryStats() {
  const [dictionaryData, setDictionaryData] = useState<IDictionaryData | null>(
    null,
  );
  const { data: wordList } = wordsApi.useGetWordsQuery();

  useEffect(() => {
    if (wordList) {
      const newWord = wordList.filter(item => item.stage === 'new').length;
      const inProgress = wordList.filter(
        item => item.stage === 'inProgress',
      ).length;
      const done = wordList.filter(item => item.stage === 'done').length;
      setDictionaryData({
        total: wordList.length,
        new: newWord,
        inProgress,
        done,
      });
    }
  }, [wordList]);

  return (
    <div className={s.wrapper}>
      {dictionaryData && (
        <>
          <h1 className={s.title}>
            My Dictionary {`(${dictionaryData.total})`}
          </h1>
          <p className={s.stats}>
            new: <span> {`${dictionaryData.new}`}</span>
          </p>
          <p className={s.stats}>
            in progress: <span>{`${dictionaryData.inProgress}`}</span>
          </p>
          <p className={s.stats}>
            done: <span>{`${dictionaryData.done}`}</span>{' '}
          </p>
        </>
      )}
    </div>
  );
}
