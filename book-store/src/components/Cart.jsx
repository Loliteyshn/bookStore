import { connect } from 'react-redux';
import { useEffect } from 'react';
import { removeBooksFromCart, setTotalPrice, setDecreaseValue, setIncreaseValue } from '../store/cartReducer';
import styles from '../styles/style.module.css';

let Cart = (props) => {

    console.log(props);

    let handleRemove = (id) => {
        props.removeBooksFromCart(id);
    }

    let countTotalPrice = () => {
        let books = props.booksCart
        let temp = 0;
        let totalCount = 0;
        for (let i = 0; i < books.length; i++) {
            console.log(books[i].price);
            temp = books[i].price * books[i].ownQuantity
            totalCount = totalCount + temp;
        }
        return totalCount
    }

    useEffect(() => {
        let totalPrice = countTotalPrice();
        props.setTotalPrice(totalPrice);
    }, [props.booksCart])

    return (
        <div className={styles.cartContainer}>

            <div className={styles.cartItemsContainer}>
                {props.booksCart.map((book, i) => (
                    <div className={styles.cartItems}>
                        <div className={styles.cartItem}>
                        <img src={book.img} className={styles.cartImg}/>
                            <div key={i} className={styles.cartItemText}>
                                
                                <h2>{book.title}</h2>
                                <h3>{book.price}$</h3>
                                <div>
                                    <button onClick={() => props.setDecreaseValue(book.id)} disabled={book.ownQuantity === 1}>-</button>
                                    <input type="number" min={1} value={book.ownQuantity} />
                                    <button onClick={() => props.setIncreaseValue(book.id)}>+</button>
                                </div>
                            </div>
                            <div>
                                <button onClick={() => handleRemove(book.id)}>Remove</button>
                            </div>
                        </div>



                    </div>
                ))}
            </div>


            <div>
                <h3>Total price: {props.totalPrice}</h3>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        booksCart: state.cart.booksCart,
        totalPrice: state.cart.totalPrice
    }
}

export default connect(mapStateToProps, { removeBooksFromCart, setTotalPrice, setDecreaseValue, setIncreaseValue })(Cart);