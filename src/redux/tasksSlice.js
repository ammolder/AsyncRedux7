import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';

const exstraActions = [fetchTasks, addTask, deleteTask, toggleCompleted];

const getActions = type =>
  isAllOf(...exstraActions.map(action => action[type]));

// Case reducers
const fetchTasksSuccessReducer = (state, action) => {
  state.items = action.payload;
};
const addTaskTasksSuccessReducer = (state, action) => {
  state.items.push(action.payload);
};
const deleteTasksSuccessReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
};
const toggleCompletedTasksReducer = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const pendingReducer = state => {
  state.isLoading = true;
};
const fulfilledReducer = state => {
  state.isLoading = false;
  state.error = null;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTasks.fulfilled, fetchTasksSuccessReducer)
      .addCase(addTask.fulfilled, addTaskTasksSuccessReducer)
      .addCase(deleteTask.fulfilled, deleteTasksSuccessReducer)
      .addCase(toggleCompleted.fulfilled, toggleCompletedTasksReducer)
      .addMatcher(getActions('pending'), pendingReducer)
      .addMatcher(getActions('rejected'), rejectedReducer)
      .addMatcher(getActions('fulfilled'), fulfilledReducer),
});

export const tasksReducer = tasksSlice.reducer;
