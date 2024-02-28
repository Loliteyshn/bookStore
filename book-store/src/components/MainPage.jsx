import mainImg from "../images/slide_2.webp";
import styles from '../styles/style.module.css';

let MainPage = (props) => {

    return <div className={styles.mainPage}>
        <img src={mainImg} alt="" className={styles.mainImg} />
        <div className={styles.mainText}>
            <h3>WORLD FAMOUS BESTSELLERS</h3>
            <h1>Turning Pages, <br /> Opening Minds.</h1>
            <p>We have more than 20 million titles and free delivery worldwide <br /> to over 170 countries. We also really, really love books.</p>
        </div>
    </div>
}

export default MainPage;