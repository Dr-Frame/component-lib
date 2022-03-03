import s from './dragdrop.module.scss';
import MatchTraining from '../../components/MatchTraining';
import { wordsApi } from '../../services/DictionaryService';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import updateWordProgress from '../../utils/updateWordProgress';
import AwardAnimation from '../../components/AwardAnimation';

export default function Drag() {
  const [isDone, setIsDone] = useState(false);
  const [list, setList] = useState(null);
  const [wordsArr, setWordsArr] = useState<object[] | null>(null);
  const [showAward, setShowAward] = useState(false);

  const { data: wordList } = wordsApi.useGetWordsQuery();
  const [updateWord] = wordsApi.useUpdateWordMutation();

  useEffect(() => {
    if (wordList) {
      setList(getNotTrainedWordList(wordList));
    }
  }, [wordList]);

  useEffect(() => {
    setShowAward(false);
  }, []);

  //filter incoming array from DB and cut
  function getNotTrainedWordList(list) {
    const newList = list
      ?.filter(item => !item.trainingsDone.includes('matching'))
      .slice(0, 6);
    setWordsArr(newList);

    return transformWordsForGame(newList);
  }

  //makes array for rendering columns
  function transformWordsForGame(rawData) {
    let withColumn = [
      { title: 'Native', items: [] },
      { title: 'Translation', items: [] },
    ];

    for (let i = 0; i < rawData.length; i++) {
      withColumn[0].items.push({
        word: rawData[i].word,
        translate: rawData[i].translate,
      });

      withColumn[1].items.push({
        word: rawData[i].translate,
        translate: rawData[i].word,
      });
    }
    withColumn.map(row => row.items.sort(() => Math.random() - 0.5));

    return withColumn;
  }

  //for updates word trainings done
  async function updateWords() {
    if (wordsArr) {
      wordsArr.forEach(async word => {
        await updateWordProgress(0, word, updateWord, 'matching');
      });
    }
  }

  return (
    <div className={s.wrapper}>
      {showAward ? (
        <AwardAnimation
          place={1}
          totalQuesedWords={wordsArr.length}
          listLength={wordsArr.length}
        />
      ) : (
        <>
          <h1 className={s.title}>Word matching</h1>
          <p className={s.subtitle}>match word in pairs</p>
          {list ? (
            <MatchTraining data={list} isDone={isDone} setIsDone={setIsDone} />
          ) : null}
          <Button
            as="button"
            color="mainDark"
            size="small"
            uppercase
            disabled={!isDone}
            onClick={() => {
              setShowAward(true);
              updateWords();
            }}
            extraClass={s.button}
          >
            {'finish'}
          </Button>
        </>
      )}
    </div>
  );
}
