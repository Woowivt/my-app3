import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import handleCart from "./redux/reducer/handleCart";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(handleCart);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fs-4" to={"/"}>
            Pocho Shop🐱‍🐉
          </NavLink>

          <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
              <i className="fa fa-sign-in" aria-hidden="true"></i>
            </NavLink>

            <NavLink to="/addtocard" className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1">({state.length})</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
