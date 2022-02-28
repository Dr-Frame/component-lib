import { useState } from 'react';
import { Reorder } from 'framer-motion';
import { Item } from './Item';

const initialItems = ['🍅 Tomato', '🥒 Cucumber', '🧀 Cheese', '🥬 Lettuce'];

export default function App() {
  const [items, setItems] = useState(initialItems);

  return (
    <Reorder.Group drag={true} onReorder={setItems} values={items}>
      {items.map(item => (
        <Item key={item} item={item} />
      ))}
    </Reorder.Group>
  );
}
