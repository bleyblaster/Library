import { BookState,BookAction } from "../type"
import { ILibraryWish } from "../types/library.type";

const initialState = {
    book: []
}

export const libraryWish = (state: BookState = initialState, action:BookAction) =>{
    switch(action.type){
        case "ADD_BOOK":
            const newBookWish: ILibraryWish = {
                                    key: action.wishBook.key,
                                    title: action.wishBook.title,
                                    author_name: action.wishBook.author_name
                                }
                                return {
                                    ...state,
                                    book:state.book.concat(newBookWish)
                                }
        case "REMOVE_BOOK":
            const updateBookWish: ILibraryWish[] = state.book.filter(
                                    (book:ILibraryWish) => book.key !== action.wishBook.key
                                )
                                return{
                                    ...state,
                                    book:updateBookWish
                                }
        case "Book":
            const Book: ILibraryWish = {
                 key: action.wishBook.key,
                title: action.wishBook.title,
                author_name: action.wishBook.author_name
            } 
            return {
                ...state,
                Book
            }
                    
        default:
            return state;
    }
}





// import {  REMOVE_BOOK } from "./actionType";
// import { ILibraryWish } from "../types/library.type";
// import {  BookState } from "../type";
// import { Action, combineReducers } from "@reduxjs/toolkit";


//  const libraryWish = 
//     (state:BookState = {book:[]}
//     ,action:any ) =>{
//     switch(action.type){
//         case "ADD_BOOK":
//             const newBookWish: ILibraryWish = {
//                                     key: action.wishBook.key,
//                                     title: action.wishBook.title,
//                                     author_name: action.wishBook.author_name
//                                 }
//                                 return {
//                                     ...state,
//                                     book:state.book.concat(newBookWish)
//                                 }
//         case REMOVE_BOOK:
//             const updateBookWish: ILibraryWish[] = state.book.filter(
//                                     (book:ILibraryWish) => book.key !== action.wishBook.key
//                                 )
//                                 return{
//                                     ...state,
//                                     book:updateBookWish
//                                 }
//         case "Book":
//             const Book: ILibraryWish = {
//                  key: action.wishBook.key,
//                 title: action.wishBook.title,
//                 author_name: action.wishBook.author_name
//             } 
//             return {
//                 ...state,
//                 Book
//             }
                    
//         default:
//             return state;
//     }
// }

// export default libraryWish;

// export  const reducers = combineReducers({
//     libraryWish
// });

// import { configureStore } from "@reduxjs/toolkit";
// import serviceBookSliceReducer from "./actionCreator"

// export default configureStore({
//     reducer:{
//         serviceBookSliceReducer
//     }
// })

// import { BookAction, BookState } from "../type";
// import { ILibraryWish } from "../types/library.type";
// import * as actionType from "./actionType";
 
// const reducer = (
//      state: BookState = {book:[]},
//      action: BookAction
//  ):
//  BookState =>{
//      switch(action.type){
//         case actionType.ADD_BOOK:
//                 const newBookWish: ILibraryWish = {
//                     key: action.book.key,
//                     title: action.book.title,
//                     author_name: action.book.author_name
//                 }
//                 return {
//                     ...state,
//                     book:state.book.concat(newBookWish)
//                 }

//         case actionType.REMOVE_BOOK:
//                 const updateBookWish: ILibraryWish[] = state.book.filter(
//                     book => book.key !== action.book.key
//                 )
//                 return{
//                     ...state,
//                     book:updateBookWish
//                 }
//      };
//      return state
//  }

//  export default reducer;
