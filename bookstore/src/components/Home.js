import React from "react";
import Button from '@mui/material/Button';
import { NavLink, Link } from "react-router-dom";
import ButtonStyle from "./ButtonStyle"
import BookListing from "./BookListing";

function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://images.unsplash.com/photo-1614620026694-f5f38182ab9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
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
            <Link to="/book-listing" style={{textDecoration:"none"}}>
            <ButtonStyle variant='contained' color="success" sx={{backgroundColor:"Black", padding:"10px"}}>
             
                Explore More Books
            </ButtonStyle>
            </Link> 
          </div>    
        </div>
      </div>
      <BookListing/>
    </div>
  );
}

export default Home;
