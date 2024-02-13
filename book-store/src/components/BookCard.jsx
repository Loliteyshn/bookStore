import { connect } from "react-redux";
import { setBooksCart } from '../store/bookDetailsReducer';

let BookCard = (props) => {

    let addToCart = () => {

    }


    return (
        <div>
            <img src={props.img} />
            <div>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        booksCart: state.bookDetails.booksCart
    }
}

export default connect(mapStateToProps, { setBooksCart })(BookCard);