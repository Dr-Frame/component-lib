import { IWord } from '../types/dictionaryTypes';

export function getRandomAnswerVariants(
  list: string[],
  numberOfElements: number,
  answer: string,
) {
  console.log('fn list', list);

  const data: string[] = [...list]
    .sort(() => 0.5 - Math.random())
    .filter(item => item !== answer)
    .slice(0, numberOfElements);
  if (data.includes(answer)) {
    const deleteIndex = data.indexOf(answer);
    data.splice(deleteIndex, 1);
  }

  data.splice(Math.floor(Math.random() * data.length), 0, answer);
  console.log(data);
  return data;
}

export function getListForTraining(list: IWord[]) {
  const allWords = list.map(word => word.word);
  const trainingList = list?.map(word => {
    return {
      word,
      variants: getRandomAnswerVariants(allWords, 4, word.word),
    };
  });
  return trainingList;
}

/* export function getRandomAnswerVariants(
  list: string[],
  numberOfElements: number,
  answer: string,
) {
  const data: string[] = [];
  if (list.length > 0) {
    
    for (let i = 0; i < numberOfElements; i++) {
      console.log(i);

      const toAdd = list[Math.floor(Math.random() * list.length)];

      if (data.includes(toAdd) || toAdd === answer) {
        continue;
      }
      data.push(toAdd);
      i++;
      if (data.length + 1 === numberOfElements) {
        break;
      }
    }
  }

  data.splice(Math.floor(Math.random() * data.length), 0, answer);
  return data;
} */
