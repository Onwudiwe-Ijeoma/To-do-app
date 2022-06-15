import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    // {
    //   id: "1",
    //   text: "get ice cream",
    //   isCompleted: false,
    // },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.todos.push(action.payload);
    },

    updateItem: (state, action) => {
      console.log("state and action", state, action);
      state.todos = state.todos.map((todo) => {
        // console.log(todo.id, action.payload.id);
        if (todo.id === action.payload.id) {
          console.log(todo.id);
          todo = { ...todo, ...action.payload };
        }
        // console.log(todo);
        return todo;
      });

      // state.text(action.payload.newValueText);
    },

    deleteItem: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      console.log(action.payload);
    },

    completedItem: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo = { ...todo, isComplete: !action.payload.isComplete };
        }

        return todo;
      });

      console.log(action.payload.isComplete);
    },
  },
});

export const { setItem, updateItem, deleteItem, completedItem } =
  todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getItem = (state) => state.todos.todos;

export default todoSlice.reducer;
