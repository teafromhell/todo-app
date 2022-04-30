import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../features/tasks/tasksSlice'
import themeReducer from '../features/tasks/themeSlice'

export default configureStore({
    reducer:{
        tasksRedux: tasksReducer,
        theme: themeReducer,
    }
})