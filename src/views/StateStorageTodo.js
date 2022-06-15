import React, { useState } from "react";
import Todo from "../components/todo";

const StateStorageTodo = () => {
  const [todos, setTodos] = useState([]);

  ////=========================add button function
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //this line makes sure we do not type empty todo
      return;
    }

    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  //========================EDIT button function

  const updateTodo = (newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === newValue.id) {
          item = newValue;
        }
        return item;
      })
    );
  };

  //================delete function
  //checks the actual array and removes it from the applicationj
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  //=======output todolist function to dom
  const completeTodo = (id) /*pass in todo for localstorage */ => {
    let updateTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });

    setTodos(updateTodo);
  };

  console.log("component is refreshed");
  return (
    <div>
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

export default StateStorageTodo;
