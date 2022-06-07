import React, { useEffect, useState } from 'react';
import appStorage from '../sevices/appStorage';
import Form from './form';
import Todo from './todo';

const Todolist = () => {
  const [todos, setTodos] = useState(appStorage.getItem());

  const handleSetTodos = () => {
    setTodos(appStorage.getItem());
  };

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //this line makes sure we do not type empty todo
      return;
    }
    appStorage.setItem(todo);
    handleSetTodos();
  };

  //============edit buton function
  // Do id is not needed here again because the id is already in the todo object
  const updateTodo = (newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    appStorage.updateItem(newValue);
    handleSetTodos();
  };

  //================delete function
  //checks the actual array and removes it from the applicationj
  const removeTodo = (id) => {
    appStorage.removeItem(id);
    handleSetTodos();
  };
  //output todolist function to dom
  const completeTodo = (todo) => {
    appStorage.updateItem({ ...todo, isComplete: !todo.isComplete });
    handleSetTodos();
  };
  console.log('component is refreshed');
  return (
    <div>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

export default Todolist;
