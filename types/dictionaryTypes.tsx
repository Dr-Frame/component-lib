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

export interface IWord {
  category: string;
  folder: string;
  meanings: IMeanings[];
  origin: string;
  phonetic: string;
  phonetics: IPhonetic[];
  stage: number;
  translate: string;
  translations: object;
  word: string;
  id?: number;
  time: number;
}
