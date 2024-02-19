import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import style from "../styles/style.module.css";
import cartImg from "../images/cart_icon-icons.com_48341.png";

let Header = (props) => {

    console.log(props);

    return (
        <div className={style.header}>
            <Link to={{pathname: '/'}}>
                Home
            </Link>
            <Link to={{ pathname: '/cart' }}>
                <img src={cartImg} alt="" className={style.cartImg}/>
                <span>
            {props.totalCountOfBooks}
            </span>
            </Link>
            
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        totalCountOfBooks: state.cart.totalCountOfBooks
    }
}

export default connect(mapStateToProps, null)(Header);