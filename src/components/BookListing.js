import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import booksData from "../constant/Books";

function BookListing(props) {
  const [bookData, setBookData] = useState([]);

  const [filter, setFilter] = useState([]);

  useEffect(() => {
    let componentMounted = true;
    getBooks(componentMounted);

    setFilter(booksData)

    return () => {
      componentMounted = false;
    };
  }, []);

  const getBooks =  (componentMounted) => {
    if (componentMounted) {
      setFilter(bookData);
    }
  };

  const filterProduct = (cat) => {
    var recordsSorted = [];

    booksData.forEach((item,i)=>{
      if(item.category === cat){
        recordsSorted.push(item);
      }
    })

    setFilter(recordsSorted);
  };

  

  const ShowBooks = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(booksData)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Horror")}
          >
            Horror
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Fairy")}
          >
            Fairy
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Comedy")}
          >
            Comedy
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Thriller")}
          >
            Thriller
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("Sci-fi")}
          >
            Sci-fi
          </button>
        </div>
        {filter.length && filter.map((item) => {
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
                  <p className="card-text lead ">{item.category}</p>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {item.title}
                    </h5>
                    <p className="card-text lead fw-bolder">${item.price}</p>
                    <p className="card-text lead">Author:{item.author}</p>
                    <Link
                      to={`/book-details/${item.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </Link>
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
            <h1 className="display-6 fw-bolder text-center">Books</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowBooks filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default BookListing;
