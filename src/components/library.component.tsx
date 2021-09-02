import React, { ChangeEvent } from "react";
//import { connect, useDispatch, useSelector} from "react-redux";
import LibraryService from "../services/library.service";
//import { ADD_BOOK, REMOVE_BOOK } from "../store/actionType";


import {IDocLibrary,ILibrary, ILibraryWish} from "../types/library.type";

interface BookWishProps{
    addBookWish( wish:ILibraryWish):void
    WishBook: ILibraryWish[]
}


export const Library: React.FC<BookWishProps> = ({addBookWish, WishBook}) =>{
    const [searchTitle, setSearchTitle] = React.useState(String)
    const [librarys, setLibrarys] = React.useState<ILibrary>({
        start:0,
        numFoundExact:false,
        num_found:0,
        docs:Array<IDocLibrary>()
    });
    const [currentIndex,setCurrentIndex] = React.useState(Number);
    const [CurrentSeleted,setCurrentSeleted] = React.useState({
        cover_i:0,
        has_fulltext:false,
        edition_count:0,
        title:'',
        author_name:[],
        first_publish_year:0,
        key:0,
        ia:[],
        author_key:[],
        public_scan_b:false,
        isWished:false

    });
    //const[WishList,setWishList] = React.useState(null);

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) =>
    {
        const title = event.target.value;
        setSearchTitle(title)
    }

    const setActiveLibrary = (documents:any, index:number) =>{
        setCurrentIndex(index);
        setCurrentSeleted(documents);
    }

    const onSearchTitle = ()=>{
        setCurrentSeleted({
            cover_i:0,
            has_fulltext:false,
            edition_count:0,
            title:'',
            author_name:[],
            first_publish_year:0,
            key:0,
            ia:[],
            author_key:[],
            public_scan_b:false,isWished:false})
        setCurrentIndex(-1)

        LibraryService.getByTitle(searchTitle)
        .then(response =>{
            const result = response.data;
            setLibrarys(result)
            console.log(librarys)
        })
        .catch(e=>{
            console.log(e)
        })

    }

    const onAddWishBook =()=>{
        addBookWish(CurrentSeleted)
        librarys.docs[currentIndex].isWished = true
        setCurrentIndex(-1)
        setCurrentSeleted({
            cover_i:0,
            has_fulltext:false,
            edition_count:0,
            title:'',
            author_name:[],
            first_publish_year:0,
            key:0,
            ia:[],
            author_key:[],
            public_scan_b:false,isWished:false})
        setCurrentIndex(-1)
    }



    return(
        
        <div className="list row">
        <div className="col-md-8">
            <div className="input-group mb-3">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Search Book by Name"
                    value={searchTitle}
                    onChange={onChangeTitle}
                />
               <div className="input-group-append">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={onSearchTitle}>
                            Search
                    </button>
               </div>
            </div>
        </div>
        <div className="col-md-6">
            <h4>Book List</h4>
            <ul className="list-group scroll-list-group">
                {
                 
                   //  librarys.docs.map((library:any,index:number) =>(<ul>{Library.length}</ul>))
                         <ul 
                             className="list-group-item"
                            
                         >{
                            librarys.docs.map((doc:IDocLibrary,index_:number) =>(
                                <li className={"list-group-item" + (index_ === currentIndex ? "active":"")} onClick={() => setActiveLibrary(doc,index_)} key= {index_} > Title: <strong><u>{doc.title}</u> </strong>- Author: <strong>{doc.author_name === undefined?doc.author_name:doc.author_name.join(', ')}</strong> </li>
                            ))
                         }
                         </ul>
                    // ))
                }

            </ul>
        </div>
        <div className="col-md-6">
                {
                    CurrentSeleted.title !== ""?(
                        <div>
                            <h4>Book Resumen Information</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{" "}{CurrentSeleted.title}
                            </div>
                            <div>
                                <label>
                                    <strong>Authors:</strong>
                                    {" "} {CurrentSeleted.author_name.join(", ")}
                                </label>
                            </div>
                            <div>
                                <label>
                                    <strong>Year:</strong>
                                    {" "}{CurrentSeleted.first_publish_year}
                                </label>
                            </div>
                            <div>
                                {
                                    CurrentSeleted.isWished?(
                                        <div>
                                             < i className="fas fa-book-reader"> Is Taken</i>
                                       </div>
                                         
                                    ):(
                                        <div className="">
                                        <i className="fas fa-book"> Is Not Taken</i>
                                        <br/>
                                        <button className="btn btn-outline-secondary" onClick={onAddWishBook} type="button"> Add Wish List</button>
                                        </div>
                                        
                                    )
                                }
                            
                            </div>
                           
                            {/* <button className="btn btn-outline-secondary" type="button"> Give Book</button> */}

                        </div>
                    ):(
                        <div>
                            <br />
                            <p>Clic one Book</p>
                       </div>
                    )
                }
        </div>
    </div>
    )
}
// const mapStateToProps = State => ({
//         book: State.libraryWish.book
// })

// const mapDispatchToProps = {
//     ADD_BOOK,
//     REMOVE_BOOK
// }

// const appContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Library)

// export default appContainer;


