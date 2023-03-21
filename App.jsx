import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startseite from './pages/Startseite';
import ProductPage from './pages/ProductPage';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Signup from './pages/Signup';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
