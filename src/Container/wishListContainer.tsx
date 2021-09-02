import React,{useState} from "react";
import {ILibraryWish} from "../types/library.type"
import {Button,Modal} from 'react-bootstrap';

interface wishListsProp{
    books: any[],
    deleteWishBook(wish:ILibraryWish):void
}
export const WishListContainer: React.FC<wishListsProp> = ({books,deleteWishBook}) => {

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        // const [CurrentSeleted, setCurrentSeleted] = useState({
        // cover_i:0,
        // has_fulltext:false,
        // edition_count:0,
        // title:'',
        // author_name:[],
        // first_publish_year:0,
        // key:0,
        // ia:[],
        // author_key:[],
        // public_scan_b:false,
        // isWished:false
        // })
        const [confirmation,Setconfirmation] = useState(false)

    // const onCurrentSelected = (booksSeleted: any, index:number) =>{
    //     setCurrentSeleted(booksSeleted)
    //     SetCurrentIndex(index)

    // }
    const removeFromWishList = (wish: ILibraryWish,index: number)=>{
       Setconfirmation( window.confirm("Are you sure?"))
       if(!confirmation){
         deleteWishBook(wish)
         alert("element deleted")
       }

    }
    return (
        <div>
            <div>
            <Button variant="primary" onClick={handleShow} >
            <span className="mr-sm-2 fas fa-shopping-cart white" style={{color:"white"}}></span> 
            </Button>
            </div>
            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Wish Book Car</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            books.map((wish:ILibraryWish, index:number) =>(
                            <li className="list-group-item"> <span onClick={ ()=> { removeFromWishList(wish,index);} } className="fas fa-trash"></span> Title: <strong><u>{wish.title}</u> </strong>- Author: <strong>{wish.author_name === undefined?wish.author_name:wish.author_name.join(', ')}</strong> </li>
                                ))
                        }
                    </Modal.Body>
                </Modal>
            </div>
        </div>
      
    )
}

// <div>
//         <div>
//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"><span className="mr-sm-2 fas fa-shopping-cart white" style={{color:"white"}}> </span> </button>
//         </div>
//         <div>
//         <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                     <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>
//                     </div>
//                     <div className="modal-body">
//                         <ul className="list-group scroll-list-group">
//                             {
//                                 <ul className="list-group-item">
//                                     {
//                                         wishsBook.map((wish:ILibraryWish, index:number) =>(
//                                             <li className="list-group-item">Title: <strong><u>{wish.title}</u> </strong>- Author: <strong>{wish.author_name === undefined?wish.author_name:wish.author_name.join(', ')}</strong> </li>
//                                         ))
//                                     }
//                                 </ul>
//                             }
//                         </ul>
//                     <div className="modal-footer">
//                     {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                     <button type="button" className="btn btn-primary">Save changes</button> */}
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </div>