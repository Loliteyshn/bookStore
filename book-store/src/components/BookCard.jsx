import styles from '../styles/style.module.css';

let BookCard = (props) => {
    return (
        <div className={styles.bookCard}>
            <img src={props.img} />
            <div>
                <h2>{props.title}</h2>
                <h3>{props.price}$</h3>
            </div>
            
        </div>
    )
}

export default BookCard;