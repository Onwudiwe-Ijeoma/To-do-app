import React, { useState } from "react";
import Form from "./form";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo, addTodo }) => {
  const [edit, setEdit] = useState({ id: null, value: "" });

  // const [hidden, setHidden] = useState(false);

  const submitUpdate = (value) => {
    updateTodo(value);
    setEdit({
      id: null,
      value: "",
    });
  };

  return edit.id ? (
    <Form key={"form" + edit.id} edit={edit} onSubmit={submitUpdate} />
  ) : (
    <>
      <Form onSubmit={addTodo} />

      {todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <button
            className="editBtn"
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
          >
            {" "}
            Edit{" "}
          </button>
          <button className="delBtn" onClick={() => removeTodo(todo.id)}>
            {" "}
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Todo;
