import React, { useState } from "react";
import Todo from "../components/todo";
import appStorage from "../sevices/appStorage";

const LocalStorageTodo = () => {
  const [todos, setTodos] = useState(appStorage.getItem());

  const handleSetTodos = () => {
    setTodos(appStorage.getItem());
  };

  //=========================add button function
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
  const updateTodo = (newValue) /*remove todo id for app storage */ => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    appStorage.updateItem(newValue);

    // handleSetTodos();
  };

  //================delete function
  //checks the actual array and removes it from the applicationj
  const removeTodo = (id) => {
    appStorage.removeItem(id);
    handleSetTodos();
  };

  //=======output todolist function to dom
  const completeTodo = (todo) => {
    appStorage.updateItem({ ...todo, isComplete: !todo.isComplete });
    handleSetTodos();
  };

  console.log("component is refreshed");
  return (
    <div>
      {/* <Form onSubmit={addTodo}/>  for state*/}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
      {/* <button onClick={() => removeTodo(todos)}>Clear Task</button> */}
    </div>
  );
};

export default LocalStorageTodo;
