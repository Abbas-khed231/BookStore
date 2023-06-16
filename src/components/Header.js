import * as React from "react";
import { NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {  
  const state = useSelector((state) => state.addItemsReducer)

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            AK book store 
          </NavLink>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
            
            </ul>
            <div className="buttons">
              <NavLink to="/shopping-cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</NavLink>
            </div>
            <div className="buttons">
              <NavLink to="/book-listing" className="btn btn-outline-dark ms-2">
              <i class="fa fa-compass me-1" ></i>Explore More Book</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
