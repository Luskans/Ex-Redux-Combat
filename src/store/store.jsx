import { configureStore } from "@reduxjs/toolkit";
import dataReducer from '../features/dataSlice';
import fightReducer from '../features/fightSlice';
import betReducer from '../features/betSlice';
import initReducer from '../features/initSlice';

export const store = configureStore({
    reducer: {
        data: dataReducer,
        fight: fightReducer,
        bet: betReducer,
        init: initReducer
    },
})