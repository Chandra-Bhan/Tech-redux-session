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
    updation: (state, action) => {
      const updatedData = action.payload;
      console.log(updatedData);
      const index = state.todo.findIndex((task) => task.id == updatedData.id);
      if (index != -1) {
        state.todo[index] = updatedData;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    todos: TodosSlice.reducer,
  },
});

export default store;
