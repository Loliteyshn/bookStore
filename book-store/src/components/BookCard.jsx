let BookCard = (props) => {


    
    return (
        <div>
            <img src={props.img}/>
            <div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.published}</p>
            </div>
        </div>
    )
}

export default BookCard;