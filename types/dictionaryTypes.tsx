export interface IPhonetic {
  text: string;
  audio: string;
}

export interface IDefenitions {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface IMeanings {
  partOfSpeech: string;
  definitions: IDefenitions[];
}

export type trainingsType =
  | 'word-constructor'
  | 'translate'
  | 'type' //печатать
  | 'writing'
  | 'matching'
  | 'translate-to'
  | 'translate-from'
  | 'listening';

export type trainingsDoneType = [
  | 'word-constructor'
  | 'translate'
  | 'type'
  | 'writing'
  | 'matching'
  | 'translate-to'
  | 'translate-from'
  | 'listening',
];

export type wordLearningStageType = 'new' | 'inProgress' | 'done';

export interface IWord {
  category: string;
  folder: string;
  meanings: IMeanings[];
  origin: string;
  phonetic: string;
  phonetics: IPhonetic[];
  translate: string;
  translations: object;
  word: string;
  id?: number;
  time: number;
  stage: wordLearningStageType;
  trainingsDone: trainingsDoneType;
}

export interface IUser {
  name?: string;
  exp: number;
  lvl: number;
}

export interface IWordForTraining {
  word: IWord;
  variants: string[];
}
