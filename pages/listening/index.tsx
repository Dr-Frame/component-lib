import { useEffect, useState } from 'react';
import TranslateTraining from '../../components/TranslateTraining';
import { wordsApi } from '../../services/DictionaryService';
import { IWord } from '../../types/dictionaryTypes';
import getList from '../../utils/linguo/getListAsync';

export default function ListeningTraining() {
  const [list, setList] = useState<IWord[] | null>(null);
  const [listForTraining, setListForTraining] = useState<IWord[]>([]);

  //rtk
  const [fetchList] = wordsApi.useLazyGetWordsQuery();

  useEffect(() => {
    getList(fetchList, 'listening', 100, setList);
  }, []);

  useEffect(() => {
    if (list) {
      const filteredList = list
        .filter(word => word.phonetics.length > 0)
        .slice(0, 10);
      setListForTraining(filteredList);
    }
  }, [list]);

  return (
    <div>
      {listForTraining && (
        <TranslateTraining wordList={listForTraining} type={'listening'} />
      )}
    </div>
  );
}
