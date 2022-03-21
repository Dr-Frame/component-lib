import { useEffect, useState } from 'react';
import TranslateTraining from '../../components/TranslateTraining';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';
import getList from '../../utils/linguo/getListAsync';
import s from './writingPage.module.scss';

function WritingPage() {
  const [fetchWordLIst] = wordsApi.useLazyGetWordsQuery();
  const [wordList, setWordList] = useState<IWord[] | null>(null);

  useEffect(() => {
    getList(fetchWordLIst, 'writing', 10, setWordList);
  }, []);

  return (
    <div>
      {wordList && (
        <TranslateTraining wordList={wordList} type={'translating'} />
      )}
    </div>
  );
}

export default WritingPage;
