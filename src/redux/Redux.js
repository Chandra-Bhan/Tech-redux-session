import { createSlice, configureStore } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
  name: "todos",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const ind = state.todo.findIndex((task) => task == action.payload);
      // ["cb","task1"].findIndex((task)=>task=="task2");
      // ["cb","task1","task2"].splice(1,2,"task3")
      state.todo.splice(ind, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: TodosSlice.reducer,
  },
});

export default store;
