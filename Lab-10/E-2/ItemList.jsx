import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([{ id: 1, text: 'Aditya' }]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    if (inputValue.trim() !== '') {
      const newItem = { id: Date.now(), text: inputValue };
      setItems([...items, newItem]);
      setInputValue('');
    }
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <input 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Add item" 
      />
      <button onClick={addItem}>Add</button>

      {items.length === 0 ? (
        <p>No items in Aditya's list.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.text} 
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;