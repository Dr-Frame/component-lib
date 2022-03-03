import s from './Item.module.scss';
import classNames from 'classnames/bind';
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
}) {
  return (
    <li
      draggable
      className={cx(s.word, {
        dragging: dragging ? isCurrentItemDragging({ groupI, wordI }) : false,
        correct:
          !dragging &&
          list[0].items[wordI].word === list[1].items[wordI].translate,
      })}
      onDragStart={e => handleDragStart(e, { groupI, wordI })}
      onDragEnter={e => handleDragEnter(e, { groupI, wordI })}
    >
      {word}
    </li>
  );
}
