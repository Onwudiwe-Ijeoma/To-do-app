import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState =  [
    {
      id: 1,
      text: 'Use Redux',
      isCompleted: false,
    },
  ]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setItem: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload)
    },
  },
  
});

export const { setItem } = todoSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getItem = (state) => state.todos;


export default todoSlice.reducer;
