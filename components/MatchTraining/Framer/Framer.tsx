import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, Reorder } from 'framer-motion';
import s from './Framer.module.scss';

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

const data = [
  'red',
  'совпадать',
  'учить',
  'white',
  'красный',
  'coincide',
  'learn',
  'белый',
];

export default function Framer() {
  const [list, setList] = useState(data);
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  return (
    <div>
      <h1>Framer dragDrop</h1>
      <Reorder.Group drag onReorder={setList} values={list} style={{ y }}>
        {list.map((word, i) => (
          <>
            <Reorder.Item
              key={i}
              value={word}
              id={word}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
            >
              <span>{word}</span>
            </Reorder.Item>
          </>
        ))}
      </Reorder.Group>
    </div>
  );
}

{
  /* <div className={s.colWrapper}>
  {data.map((item, groupI) => (
    <div key={groupI} className={s.col}>
      <h2 className={s.title}>{item.title}</h2>
      <ul className={s.wordList}>
        {item.items.map((word, wordI) => (
          <motion.li
            key={wordI}
            className={s.word}
            drag="x"
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
          >
            {word.word}
          </motion.li>
        ))}
      </ul>
    </div>
  ))}
</div>; */
}
