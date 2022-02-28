import { useState, useRef, useEffect } from 'react';
import { wordsApi } from '../../services/DictionaryService';
import s from './MatchTraining.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

interface MatchTrainingProps {}

function MatchTraining({ data }) {
  const [list, setList] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [isDone, setIsDone] = useState(false);
  console.log('list', list);

  console.log('is DONE', isDone);

  function transformWordsForGame(rawData) {
    let withColumn = [
      { title: 'Native', items: [] },
      { title: 'Translation', items: [] },
    ];

    for (let i = 0; i < 10; i++) {
      withColumn[1].items.push(rawData[i].translate);

      withColumn[0].items.push(rawData[i].word);
    }
    withColumn.map(row => row.items.sort(() => Math.random() - 0.5));

    return withColumn;
  }

  useEffect(() => {
    setList(transformWordsForGame(data));
  }, [data]);

  const dragItem = useRef();
  const dragNode = useRef();

  function handleDragStart(e, params) {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setDragging(true);
    console.log('dragItem', dragItem.current);
  }

  function handleDragEnter(e, params) {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList(oldList => {
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.groupI].items.splice(
          params.wordI,
          0,
          newList[currentItem.groupI].items.splice(currentItem.wordI, 1)[0],
        );
        dragItem.current = params;
        return newList;
      });
    }
  }

  function handleDragEnd() {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragNode.current = null;
    dragItem.current = null;
  }

  function isCurrentItemDragging(params) {
    const currentItem = dragItem.current;
    if (
      currentItem.groupI === params.groupI &&
      currentItem.wordI === params.wordI
    ) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    setDragging(false);
  }, []);

  return (
    <div className={s.wrapper}>
      {list ? (
        <div className={s.colWrapper}>
          {list.map((item, groupI) => (
            <div
              key={groupI}
              className={s.col}
              onDragEnter={
                !item.items.length
                  ? e => handleDragEnter(e, { groupI, wordI: 0 })
                  : null
              }
            >
              <h2 className={s.title}>{item.title}</h2>
              <ul className={s.wordList}>
                {item.items.map((word, wordI) => {
                  return (
                    <li
                      key={wordI}
                      draggable
                      className={cx(s.word, {
                        dragging: dragging
                          ? isCurrentItemDragging({ groupI, wordI })
                          : false,
                      })}
                      onDragStart={e => handleDragStart(e, { groupI, wordI })}
                      onDragEnter={e => handleDragEnter(e, { groupI, wordI })}
                    >
                      {word}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default MatchTraining;
