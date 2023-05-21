import logo from './logo.svg';
import './App.css';
import Login from './login/components/Login';
import Navbar from './Navbar/components/Navbar';
import Registration from './registration/components/Registration';
import Home from './home/components/Home';
import Menu from './Menu/components/Menu';
import { Route, Routes } from 'react-router-dom';
import Product from './product/components/Product';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/product/caramel-macchiato" element={<Product />} />

      </Routes>
    </div>
  );
}

export default App;
