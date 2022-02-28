import { useState } from 'react';
import s from './Drag2.module.scss';

export default function Drag2() {
  const data = [
    {
      id: 1,
      title: 'to do',
      items: [
        { id: 1, title: 'go home' },
        { id: 2, title: 'go back' },
        { id: 3, title: 'go moon' },
      ],
    },
    {
      id: 2,
      title: 'in progress',
      items: [
        { id: 4, title: 'going home' },
        { id: 5, title: 'going back' },
        { id: 6, title: 'going moon' },
      ],
    },
    {
      id: 3,
      title: 'done',
      items: [
        { id: 7, title: 'went home' },
        { id: 8, title: 'went back' },
        { id: 9, title: 'went moon' },
      ],
    },
  ];

  const [boards, setBoards] = useState(data);
  const [currentBoard, setCurrentBoard] = useState(null);
  const [currentItem, setCurrentItem] = useState(null);

  console.log('board', currentBoard);
  console.log('item', currentItem);

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgrey';
  }

  function dropHandler(e, board, item) {
    e.preventDefault();
    e.target.style.background = 'white';

    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex + 1, 0, currentItem);

    setBoards(
      boards.map(b => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  }

  function dropCardHandler(e, board) {
    e.stopPropagation();
    e.preventDefault();
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);

    setBoards(
      boards.map(b => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  }

  return (
    <div className={s.wrapper}>
      <h1>Drag 2 trello</h1>
      <div className={s.board}>
        {boards.map(board => {
          return (
            <div
              key={board.id}
              className={s.boardRow}
              onDragOver={e => dragOverHandler(e)}
              onDrop={e => dropCardHandler(e, board)}
            >
              <h2 className={s.title}>{board.title}</h2>

              {board.items.map(item => {
                return (
                  <div
                    key={item.id}
                    className={s.listItem}
                    draggable={true}
                    onDragStart={e => dragStartHandler(e, board, item)}
                    onDragLeave={e => dragEndHandler(e)}
                    onDragEnd={e => dragEndHandler(e)}
                    onDragOver={e => dragOverHandler(e)}
                    onDrop={e => dropHandler(e, board, item)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
