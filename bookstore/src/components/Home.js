import React from "react";
import BookListing from "./BookListing";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://www.bookswagon.com/images/bannerimages/82_inr.jpg?v=1.8"
          className="card-img"
          style={{borderRadius:"0"}}
          alt="Background"
          height="650px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5
              style={{ color: "black" }}
              className="card-title display-3 fw-bolder mb-0"
            >
            </h5>
          </div>    
        </div>
      </div>
      <BookListing/>
    </div>
  );
}

export default Home;
