import { useState } from 'react';

export default function Drag() {
  const cards = [
    { id: 1, order: 3, text: 'card 1' },
    { id: 2, order: 1, text: 'card 2' },
    { id: 3, order: 2, text: 'card 3' },
    { id: 4, order: 4, text: 'card 4' },
  ];

  const [cardList, setCardList] = useState(cards);
  const [currentCard, setCurrentCard] = useState(null);

  console.log(cardList);

  function dragStartHandler(e, card) {
    console.log('start', card);
    setCurrentCard(card);
  }

  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }

  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgrey';
  }

  function dropHandler(e, card) {
    e.preventDefault();
    e.target.style.background = 'white';
    setCardList(
      cardList.map(c => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      }),
    );
  }

  function sortCards(a, b) {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  }

  return (
    <ul
      style={{
        marginTop: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      {cardList.sort(sortCards).map(card => (
        <li
          //когда взяли карточку
          onDragStart={e => dragStartHandler(e, card)}
          // если вышли за пределы другой карточки
          onDragLeave={e => dragEndHandler(e)}
          // если отпустили перемещение
          onDragEnd={e => dragEndHandler(e)}
          //если находиимся над каким то другим обьектом
          onDragOver={e => dragOverHandler(e)}
          //если отпустили карточку и должно произойти какое то связаное с этим событие
          onDrop={e => dropHandler(e, card)}
          draggable={true}
          key={card.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '200px',
            width: '100px',
            border: '1px solid black',
            borderRadius: '5px',
            cursor: 'grab',
          }}
        >
          {card.text}
        </li>
      ))}
    </ul>
  );
}
