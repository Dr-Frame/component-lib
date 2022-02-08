import { IWord, trainingsType } from '../../types/dictionaryTypes';

export default function getFilteredForTraining(
  list: IWord[],
  type: trainingsType,
) {
  if (list) {
    let filteredWords = [...list]
      .sort(() => Math.random() - 0.5)
      .filter(item => !item.trainingsDone.includes(type))
      .slice(0, 10);
    return filteredWords;
  }
}
