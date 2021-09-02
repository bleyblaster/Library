import { Component } from "react";
import { connect} from "react-redux";
import { ADD_BOOK, REMOVE_BOOK } from "../store/actionType";

type Props = {
    ADD_BOOK,
    REMOVE_BOOK
}

type State = {
    book
}

export class AddWishList extends Component<Props,State>{
    constructor(props:Props){
        super(props)
    }

    render(){
        return(
    <button className="btn btn-outline-secondary" onClick={() => this.props.ADD_BOOK()} type="button"> Add Wish List</button>
        )
    }
}

const mapStateToProps = State =>({
    book: State.libraryWish.book
})

const mapDispatchToProps = {
    ADD_BOOK,
    REMOVE_BOOK
}

const appContainer = connect(
mapStateToProps,
mapDispatchToProps
)

export default appContainer;