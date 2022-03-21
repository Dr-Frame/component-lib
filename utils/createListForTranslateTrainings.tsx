import { IWord } from '../types/dictionaryTypes';

export function getRandomAnswerVariants(
  list: string[],
  numberOfElements: number,
  answer: string,
) {
  const data: string[] = [...list]
    .sort(() => 0.5 - Math.random())
    .filter(item => item !== answer)
    .slice(0, numberOfElements);
  if (data.includes(answer)) {
    const deleteIndex = data.indexOf(answer);
    data.splice(deleteIndex, 1);
  }
  data.splice(Math.floor(Math.random() * data.length), 0, answer);
  return data;
}

export function getListForTraining(list: IWord[], lang: string) {
  if (lang === 'english') {
    const allWords = list.map(word => word.word);
    const trainingList = list?.map(word => {
      return {
        word,
        variants: getRandomAnswerVariants(allWords, 4, word.word),
      };
    });
    return trainingList;
  }
  if (lang === 'native') {
    const allWordsNative = list.map(word => word.translate);
    const trainingList = list?.map(word => {
      return {
        word,
        variants: getRandomAnswerVariants(allWordsNative, 4, word.translate),
      };
    });
    return trainingList;
  }
}
