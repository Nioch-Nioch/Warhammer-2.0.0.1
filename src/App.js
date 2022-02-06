import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
      <nav className="navbar">
          <h1 className='navbar__title'>Warhammer</h1>
          <Link to="/">Home</Link>
          <Link className="navbar__link" to="/shop">Sklep</Link>
      </nav>
      <div className="content">
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="shop" element={<>Sklep</>} />
        </Routes>
      </div>
    </>    
  );
}

export default App;
