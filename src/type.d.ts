import { ILibraryWish } from "./types/library.type"

export interface BookState  {
    book: ILibraryWish[]
}

export interface BookAction  {
    type: string,
    wishBook: ILibraryWish
}



//type DispatchType = (args:BookAction) => BookAction;