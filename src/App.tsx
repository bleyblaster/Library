//import React from 'react';
import { Switch,Route,Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import './App.css';
import {Library} from './components/library.component';
import { Counter } from './Container/countContainer';
import { BookState } from './type';
import { ILibraryWish } from './types/library.type';
import { ADD_BOOK, REMOVE_BOOK } from './store/actionType';
import { WishListContainer } from "./Container/wishListContainer";


function App() {
    const books = useSelector<BookState,BookState["book"]>((state) => state.book);
    const dispacth = useDispatch()
    const addBookWish =(wish:ILibraryWish) =>{
        dispacth(ADD_BOOK(wish))
    }
    const removeBookWish = (wish:ILibraryWish) =>{
        dispacth(REMOVE_BOOK(wish))
    }
    
  return(
      
    <div>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Link to={{pathname: "/Library"}} className="nav-brand">
          Public Library
      </Link>
      <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/Library"} className="nav-link">
                  Library
              </Link>
          </li>
          <li className="nav-item">
          <Link to={"/Library"} className="nav-link">
                  Books
              </Link>
          </li>
          <li className="nav-item">
          <Link to={"/E"} className="nav-link">
                  Return Books
          </Link>
          </li>
          <li className="nav-item" >
          <Link to={"/W"} className="nav-link">
                  Login
              </Link>
          </li>
          
      </div>
      <div className="form-inline">
           <WishListContainer books={books} deleteWishBook ={removeBookWish} />
            <label className="form-control"><Counter counts={books.length}/> </label>
      </div>
      
  </nav>
  <div className="container mt-3">
     <Switch>
        <Route exact path={["/","/Library"]}  render={()=> <Library addBookWish={addBookWish} />} />
     </Switch>
  </div>
  </div>
  );

}



export default App;

