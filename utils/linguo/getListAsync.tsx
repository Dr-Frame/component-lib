import { IWord, trainingsType } from '../../types/dictionaryTypes';
import getFilteredForTraining from './getFilteredListForTraining';

type getListFnType = <T>(
  arg1: (arg: number, arg2: boolean) => Promise<T>,
  arg2: trainingsType,
  arg3: number,
  agr4: (state: IWord[]) => void,
) => void;

const getList: getListFnType = async (
  fetchFn,
  trainingType,
  limit,
  setData,
) => {
  await fetchFn(limit, true)
    .then(({ data }) => getFilteredForTraining(data, trainingType, limit))
    .then(data => (data ? setData(data) : null));
};

export default getList;
