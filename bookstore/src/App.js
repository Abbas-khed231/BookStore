import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookListing from './components/BookListing';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OrderList from './components/OrderList';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-listing" element={<BookListing />}  />
        <Route path="/book-details/:id" element={<BookDetails/>} />
        <Route path="/shopping-cart" element={<ShoppingCart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order-list" element={<OrderList/>} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

