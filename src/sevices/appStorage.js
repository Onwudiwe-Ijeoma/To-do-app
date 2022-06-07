const setItem = (item) => {
  const isAvailable = localStorage.getItem('@IjTodoApp');
  if (isAvailable) {
    const todos = JSON.parse(localStorage.getItem('@IjTodoApp'));
    todos.push(item);
    localStorage.setItem('@IjTodoApp', JSON.stringify(todos));
  } else {
    localStorage.setItem('@IjTodoApp', JSON.stringify([item]));
  }
};

const updateItem = (item) => {
  const todos = JSON.parse(localStorage.getItem('@IjTodoApp'));
  const updatedItem = todos.map((todo) => {
    if (todo.id === item.id) {
      todo = {...todo, ...item};
    }
    return todo;
  });
  localStorage.setItem('@IjTodoApp', JSON.stringify(updatedItem));
};

const getItem = () => {
  const isAvailable = localStorage.getItem('@IjTodoApp');
  if (isAvailable) {
    const todos = JSON.parse(localStorage.getItem('@IjTodoApp'));
    return todos;
  } else {
    return [];
  }
};

const removeItem = (id) => {
  const todos = JSON.parse(localStorage.getItem('@IjTodoApp'));
  const updatedItem = todos.filter((todo) => todo.id !== id);
  localStorage.setItem('@IjTodoApp', JSON.stringify(updatedItem));
};

const clearStorage = () => localStorage.clear();

const appStorage = { setItem, getItem, removeItem, clearStorage, updateItem };
export default appStorage;
