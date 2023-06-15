import React from "react";
import { useState, useEffect } from "react";
import  Skeleton  from "react-loading-skeleton";
import { useNavigate } from "react-router";
import booksData from "../constant/Books"
// import BookDetails from "./BookDetails";


function BookListing() {

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>

        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    // const navigate = useNavigate();

    // const handleBuy = () => {
    //   navigate("/book detaisls");
    // };

    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Mens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Womens Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Jewellery
          </button>
          <button
            className="btn btn-outline-dark me-2"
          >
            Electronics
          </button>
        </div>
        {booksData.map((item) => {
            return (
              <>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 text-center p-4" key={item.id}>
                    <img
                      src={item.image}
                      height="350px"
                      className="card-img-top"
                      alt={item.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {/* {item.title.substring(0, 12)}... */}
                        {item.title}
                      </h5>
                      <p className="card-text lead fw-bolder">
                        ${item.price}
                      </p>
                      <p className="card-text lead">
                        Author:{item.author}
                      </p>
                      <button
                        // onClick={handleBuy}
                        className="btn btn-outline-dark"
                      >
                        Buy Now
                      </button>

                      {/* <button
                        onClick={() => this.props.AddToCart(item)}
                        className="btn btn-dark ms-3"
                      >
                        Add to Cart
                      </button> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </>
      );
    };
        
    return (
        <div>
          <div className="container my-5 py-5">
            <div className="row">
              <div className="col-12">
                <h1 className="display-6 fw-bolder text-center">
                  Books
                </h1>
                <hr />
              </div>
            </div>
            <div className="row justify-content-center">
                <ShowProducts/>
            </div>
          </div>
        </div>
      );
    }

export default BookListing

    

    
    
         
