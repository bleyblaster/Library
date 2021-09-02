import { createStore } from "redux";
import {libraryWish} from "./reducer"

export const store = createStore(libraryWish);

// import { createStore } from "@reduxjs/toolkit";
// import { reducers } from "./reducer";
// //import { BookAction, BookState } from "../type";
// //import  serviceBookSliceReducer from "./actionCreator"
// export function configureStore(initialState={}){
//     const store = createStore(reducers,initialState)
//     return store;
// }

// export const store = configureStore();
