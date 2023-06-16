import React, {useState } from 'react';
import {useParams} from 'react-router-dom'
import booksData from "../constant/Books"
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/action';

function BookDetails() {
  const { id } = useParams();
  const book = booksData.find((book) => book.id === parseInt(id));

  const [cartBtn, setCartBtn] = useState(true)

  const dispatch = useDispatch();
  const addProduct = (product) => {
    console.log("product",product);
      if (cartBtn) {
          console.log("inside add cart ",product);
          dispatch(addItem(product));
          setCartBtn(false)
      }
      else {
        console.log("inside add cart ");
          dispatch(delItem(product));
          setCartBtn(true)
      }

  }


  
  const ShowProduct = () => {
    return (
        <>
          <div className="container mb-4 mt-4">
    {book ? (
      <div className="row">
        <div className="col-md-4">
          <img src={book.image} alt={book.title} className="img-fluid" />
        </div>
        <div className="col-md-8 lead">
          <h2>{book.title}</h2>
          
          <p>Author: {book.author}</p>
          <p>Country: {book.country}</p>
          <p>Language: {book.language}</p>
          <p>Year: {book.year}</p>
          <p>Pages: {book.pages}</p>
          <p>Price: ${book.price}</p>
          
          <a href={book.link} style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer">Learn More</a><br></br>
          <button className='btn btn-outline-dark mt-2 px-4 py-2' onClick={() => addProduct(book)}>{cartBtn ? "ADD TO CART":"REMOVE FROM CART"}</button>
        </div>
      </div>
    ) : (
      <p>No book found with the ID {id}</p>
    )}
  </div>
            
        </>
    )
}

return (
    <div>
        <div className='container py-5'>
            <div className='row py-4'>
               <ShowProduct />
            </div>
        </div>
    </div>
)
}

export default BookDetails;

  