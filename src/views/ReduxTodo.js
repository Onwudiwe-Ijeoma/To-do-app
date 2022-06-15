// import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../components/todo";
import {
  deleteItem,
  getItem,
  setItem,
  updateItem,
  completedItem,
} from "../sevices/reduxStorage";

const ReduxTodo = () => {
  const todos = useSelector(getItem);
  // const prevTodos = useSelector(getItem);
  // const [savedTodos, setsavedTodos] = useState(prevTodos);

  // useEffect(() => {
  //   const updatedTodos = useSelector(getItem);
  //   setsavedTodos(updatedTodos);
  // }, [savedTodos, setsavedTodos]);

  console.log("state", todos);

  const dispatch = useDispatch();

  //=========================add button function
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //this line makes sure we do not type empty todo
      return;
    }
    dispatch(setItem(todo));
  };

  //============edit buton function
  // Do id is not needed here again because the id is already in the todo object
  const updateTodo = (newValue) /*remove todo id for app storage */ => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    dispatch(updateItem(newValue));
    console.log(newValue);
  };

  //================delete function
  //checks the actual array and removes it from the applicationj
  const removeTodo = (id) => {
    dispatch(deleteItem(id));
    console.log(id);
  };

  //=======output todolist function to dom
  const completeTodo = (id) => {
    dispatch(completedItem(id));
    console.log(id);
  };

  return (
    <div>
      <Todo
        // todos={savedTodos}
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        addTodo={addTodo}
      />
    </div>
  );
};

export default ReduxTodo;
