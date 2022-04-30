import { createSlice } from "@reduxjs/toolkit";

const initialTasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];

const initialCount = localStorage.getItem("count")
  ? JSON.parse(localStorage.getItem("count"))
  : 0;

  const inititalFilteredTasks = localStorage.getItem("filterTasks")
  ? JSON.parse(localStorage.getItem("filterTasks"))
  : [];

export const tasksSlice = createSlice({
  name: "tasksRedux",
  initialState: {
    count: initialCount,
    tasks: initialTasks,
    filteredTasks: inititalFilteredTasks,
  },
  reducers: {
    setCount(state, action) {
      state.count = action.payload;
      localStorage.setItem("count", JSON.stringify(action.payload));
    },
    setTask(state, action) {
      state.tasks = action.payload;
      localStorage.setItem("tasks", JSON.stringify(action.payload));
    },
    setFilteredTask(state, action) {
      state.filteredTasks = action.payload;
      localStorage.setItem("filterTasks", JSON.stringify(action.payload));
    },
  },
});

export const { setCount, setTask, setFilteredTask } = tasksSlice.actions;
export default tasksSlice.reducer;
