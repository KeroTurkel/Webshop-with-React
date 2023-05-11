import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startseite from './pages/Startseite';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Signup from './pages/Signup';
import Warenkorb from './pages/Warenkorb';
import TurkishProducts from './pages/TurkishProducts';

function App() {
  
 const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Startseite setSelectedProduct={setSelectedProduct} />} />
        <Route path='/productpage' element={<ProductPage selectedProduct={selectedProduct} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/credit" element={<Payment />} />
        <Route path="/warenkorb" element={<Warenkorb />} />
        <Route path="/tr_products" element={<TurkishProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
