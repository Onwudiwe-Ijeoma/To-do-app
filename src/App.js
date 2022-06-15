import React from "react";
// import LocalStorageTodo from "./views/LocalStorageTodo";
import ReduxTodo from "./views/ReduxTodo";
// import StateStorageTodo from "./views/StateStorageTodo";

function App() {
  return (
    <div className="todo-app">
      <h1>ORGANIZE YOUR DAY</h1>
      {/* <LocalStorageTodo />
      <StateStorageTodo /> */}
      <ReduxTodo />
    </div>
  );
}

export default App;
