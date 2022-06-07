import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItem, setItem } from './todoSlice';

const Todo = () => {
  const todos = useSelector(getItem);
  console.log('count', todos);

  const dispatch = useDispatch();

  const [newTodoValue, setNewTodoValue] = useState('');

  const handleAdd = () => {
    dispatch(
      setItem({ id: Date.now(), text: newTodoValue, isCompleted: false })
    );
    setNewTodoValue('');
  };
  return (
    <div>
      <input
        value={newTodoValue}
        onChange={(e) => setNewTodoValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <div>
        {todos.map((item) => (
          <p key={item.id}>{item.text}</p>
        ))}
      </div>
    </div>
  );
};

export default Todo;
