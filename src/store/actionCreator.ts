import { ADD_BOOK } from "./actionType";



// import { ILibraryWish } from "../types/library.type";
// import { BookAction, BookState, DispatchType } from "../type";
// import * as actionType from "./actionType";
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const initialState: BookState = {book:[]}

// export const serviceBookSlice = createSlice({
//    name: "bookSlice",
//    initialState,
//    reducers:{
//        addBook: (state, action: PayloadAction<any>) =>{
//            state.book.push(action.payload)
//        },
//        removeBook:(state, action:PayloadAction<number>) =>{
//             state.book.slice(action.payload,1);
//        },
//    } 
// })

// export const {addBook,removeBook} = serviceBookSlice.actions

// export default serviceBookSlice.reducer

// export function AddBook(book: ILibraryWish){
//     const action: BookAction = {
//         type: actionType.ADD_BOOK,
//         book
//     }
//     return simulateHttpRequest(action)
// }

// export function removeBook(book: ILibraryWish){
//     const action: BookAction = {
//         type: actionType.REMOVE_BOOK,
//         book
//     }
//     return simulateHttpRequest(action)
// }

// export function simulateHttpRequest(action: BookAction){
//     return (dispatch: DispatchType) =>{
//             setTimeout(() => {
//                 dispatch(action)
//             }, 5000);
//     }
// }

