import { useState, useRef, useEffect } from 'react';
import { wordsApi } from '../../services/DictionaryService';
import s from './MatchTraining.module.scss';
import classNames from 'classnames/bind';
import Item from './Item/Item';

const cx = classNames.bind(s);

interface MatchTrainingProps {}

function MatchTraining({ data, isDone, setIsDone }) {
  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);
  const [equalityCkeckArr, setEqualityCkeckArr] = useState([]);
  const [wordsLeft, setWordsLeft] = useState(data[0].items.length);

  console.log('list drag', list);

  //set state when all words are corectly matched
  useEffect(() => {
    if (list) {
      const words = list[0].items;
      const translations = list[1].items;
      let equalityArr: boolean[] = new Array(data[0].items.length).fill(false);

      words.forEach((word, i) => {
        if (word.word === translations[i].translate) {
          equalityArr.splice(i, 1, true);
        }
      });
      equalityArr.includes(false) ? setIsDone(false) : setIsDone(true);
      setEqualityCkeckArr(equalityArr);
    }
    console.log('state', equalityCkeckArr);
  }, [list]);

  useEffect(() => {
    let total = 0;
    equalityCkeckArr.forEach(item => {
      if (!item) {
        total += 1;
      }
    });
    setWordsLeft(total);
  }, [equalityCkeckArr]);

  const dragItem = useRef();
  const dragNode = useRef();

  function handleDragStart(e, params) {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setDragging(true);
  }

  function handleDragEnd() {
    setDragging(false);
    dragNode.current.removeEventListener('dragend', handleDragEnd);
    dragNode.current = null;
    dragItem.current = null;
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

  list ? console.log(list) : null;

  return (
    <div className={s.wrapper}>
      {/*  {isDone ? <h1>DONE</h1> : null} */}
      {list ? (
        <div className={s.matching}>
          {wordsLeft !== 0 ? (
            <p className={s.wordsLeft}>{wordsLeft} words left to pair</p>
          ) : null}

          <div
            className={cx(s.colWrapper, {
              extraPadding: wordsLeft === 0,
            })}
          >
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
                      <Item
                        key={wordI}
                        dragging={dragging}
                        list={list}
                        handleDragStart={handleDragStart}
                        dragItem={dragItem}
                        dragNode={dragNode}
                        handleDragEnter={handleDragEnter}
                        word={word.word}
                        groupI={groupI}
                        wordI={wordI}
                        isCurrentItemDragging={isCurrentItemDragging}
                      />
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default MatchTraining;
