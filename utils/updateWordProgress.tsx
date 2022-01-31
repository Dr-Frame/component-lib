import { IWord } from '../types/dictionaryTypes';

type updateFnType = (obj: IWord) => void;

export default function updateWordProgress(
  mistakes: number,
  word: IWord,
  updateFn: updateFnType,
  trainType: 'word-constructor' | 'translate' | 'type',
) {
  let currentStage;
  let trainings = [];
  console.log(word.trainingsDone.includes(trainType));

  if (!word.trainingsDone.includes(trainType)) {
    trainings.push(trainType);
  }

  if (word.trainingsDone.length > 2) {
    currentStage = 2;
  } else if (word.trainingsDone.length >= 0 && word.trainingsDone.length < 2) {
    currentStage = 1;
  }
  if (mistakes === 0) {
    console.log('должно апдейтить');

    updateFn({
      ...word,
      stage: currentStage,
      trainingsDone: trainings,
    });
    return;
  }

  //logic for povtorenie train
  return;
}
