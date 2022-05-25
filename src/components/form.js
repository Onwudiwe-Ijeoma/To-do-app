import React, { useState, useEffect, useRef } from "react";

const Form = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : ""); //the edit update

  //making the form focus in the input form when we  refresh
  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //create submit function to prevent default refresh
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput(""); //clears the text after typing
  };
  return (
    <div>
      <form className="todoForm" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              onChange={handleChange}
              ref={focus}
              type="text"
              placeholder="what are you doing today?"
              value={input}
              className="todoInput"
            />
            <button className="todoBtn"> Update Task</button>
          </>
        ) : (
          <>
            <input
              onChange={handleChange}
              ref={focus}
              type="text"
              placeholder="what are you doing today?"
              value={input}
              className="todoInput"
            />
            <button className="todoBtn"> Add Task</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Form;
