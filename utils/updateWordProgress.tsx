import { IWord, trainingsType } from '../types/dictionaryTypes';

type updateFnType = (obj: IWord) => void;

export default function updateWordProgress(
  mistakes: number,
  word: IWord,
  updateFn: updateFnType,
  trainType: trainingsType,
) {
  let currentStage = 'new';
  let trainings = [...word.trainingsDone];

  if (!word.trainingsDone.includes(trainType)) {
    trainings.push(trainType);
  }

  if (trainings.length >= 1 && trainings.length <= 3) {
    currentStage = 'inProgress';
  } else if (trainings.length >= 4) {
    currentStage = 'done';
  }
  console.log('stage to add', currentStage);

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
