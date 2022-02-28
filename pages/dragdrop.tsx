import { useEffect, useState } from 'react';
import Drag1 from '../components/Drag1';
import Drag2 from '../components/Drag2';
import Drag3 from '../components/Drag3';
import MatchTraining from '../components/MatchTraining';
import Framer from '../components/MatchTraining/Framer/Framer';
import { wordsApi } from '../services/DictionaryService';

export default function Drag() {
  /* const data = [
    {
      title: 'Native',
      items: [
        { word: 'red' },
        { word: 'совпадать' },
        { word: 'учить' },
        { word: 'white' },
      ],
    },
    {
      title: 'Translation',
      items: [
        { word: 'красный' },
        { word: 'coincide' },
        { word: 'learn' },
        { word: 'белый' },
      ],
    },
  ]; */

  const { data: wordList } = wordsApi.useGetWordsQuery();

  return (
    <div>
      <h1>Drag & drop</h1>
      {wordList ? <MatchTraining data={wordList} /> : null}
      {/* <Framer /> */}

      {/* <Drag1 />
      <Drag2 />
      <Drag3 /> */}
    </div>
  );
}

// { id: word.id, translate: word.translate, word: word.word }
