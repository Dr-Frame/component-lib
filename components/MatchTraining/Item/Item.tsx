import s from './Item.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
const cx = classNames.bind(s);

export default function Item({
  dragging,
  list,
  handleDragStart,
  handleDragEnter,
  word,
  groupI,
  wordI,
  isCurrentItemDragging,
  dataCompare,
}) {
  console.log(wordI);
  console.log(list[0].items.length);

  return (
    <li
      draggable
      className={cx(s.word, {
        dragging: dragging ? isCurrentItemDragging({ groupI, wordI }) : false,
        //for 1 column
        /* correct:
          !dragging &&
          list[0].random === translate. === list[1].items[wordI].translate, */

        correct:
          !dragging && dataCompare[wordI] && wordI <= list[0].items.length,
      })}
      onDragStart={e => handleDragStart(e, { groupI, wordI })}
      onDragEnter={e => handleDragEnter(e, { groupI, wordI })}
    >
      {word}
    </li>
  );
}
