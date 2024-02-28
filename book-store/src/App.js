import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Header from './components/Header';
import styles from './styles/style.module.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.body}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books/:id' element={<BookDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
