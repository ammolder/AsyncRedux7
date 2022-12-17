//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';

// ======== Import before createSlice (імпорт редюсерів)========
// import { tasksReducer, filtersReducer } from './reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

//=============== Before ========================
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
