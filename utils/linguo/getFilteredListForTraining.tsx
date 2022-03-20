import { IWord, trainingsType } from '../../types/dictionaryTypes';

export default function getFilteredForTraining(
  list: IWord[],
  type: trainingsType,
  limit: number = 10,
) {
  console.log('limit inside fn', limit);

  if (list) {
    let filteredWords = [...list]
      .sort(() => Math.random() - 0.5)
      .filter(item => !item.trainingsDone.includes(type))
      .slice(0, limit);
    return filteredWords;
  }
}
