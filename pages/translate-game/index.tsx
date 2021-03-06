import { useEffect, useState } from 'react';
import TranslateTo from '../../components/TranslateTo';
import { wordsApi } from '../../services/DictionaryService';
import { IWord, IWordForTraining } from '../../types/dictionaryTypes';
import { getListForTraining } from '../../utils/createListForTranslateTrainings';
import getList from '../../utils/linguo/getListAsync';
import s from './pageTranslateTo.module.scss';

export default function TranslateToNative() {
  const [list, setList] = useState<IWord[] | null>(null);
  const [listForTraining, setListForTraining] = useState<IWordForTraining[]>(
    [],
  );

  //rtk
  const [fetchList] = wordsApi.useLazyGetWordsQuery();

  console.log('list', list);

  useEffect(() => {
    getList(fetchList, 'translate-to', 100, setList);
  }, []);

  useEffect(() => {
    if (list) {
      setListForTraining(getListForTraining(list, 'english').slice(0, 10));
    }
  }, [list]);

  return (
    <div className={s.wrapper}>
      {listForTraining.length !== 0 && (
        <TranslateTo wordList={listForTraining} translateTo={'english'} />
      )}
    </div>
  );
}
