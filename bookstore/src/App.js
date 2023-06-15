import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BookListing from './components/BookListing';
import Footer from './components/Footer';
import BookDetails from './components/BookDetails';
// import ShoppingCart from './pages/ShoppingCart';
// import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/book-listing" element={<BookListing />}  />
        <Route path="/book-details/:id" component={BookDetails} />
        {/* <Route path="/shopping-cart" component={ShoppingCart} />
        <Route path="/checkout" component={Checkout} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

