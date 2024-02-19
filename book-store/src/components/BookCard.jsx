import { connect } from "react-redux";


let BookCard = (props) => {



    return (
        <div>
            <img src={props.img} />
            <div>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
                <h3>{props.price}$</h3>
            </div>
            
        </div>
    )
}

export default BookCard;