import { useEffect, useState } from "react";
import apiStorage from "../sevices/apiStorage";
import Todo from "../components/todo";

const ApiStorageTodo = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  const getTodos = () => {
    apiStorage
      .getItem()
      .then((res) => res.json())
      .then((data) => {
        console.log();
        setTodos(data);
      })
      .catch((err) => {
        console.log("err", err);
        setTodos([]);
      });
  };
  //=====add todo function

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //this line makes sure we do not type empty todo
      return;
    }
    apiStorage.setItem(todo);

    getTodos();
  };

  // ====================== update function

  const updateTodo = (newValue) /*remove todo id for app storage */ => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    apiStorage.updateItem(newValue);

    getTodos();
  };

  //=====delete fuunction
  const removeTodo = (id) => {
    apiStorage.removeItem(id);
    getTodos();
  };

  //===complete function
  const completeTodo = (id) => {
    apiStorage.completedItem(id);
    getTodos();
  };

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

export default ApiStorageTodo;
