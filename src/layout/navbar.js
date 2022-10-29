import React, { createContext, useContext, useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";
function Navbar() {
  const { setSearch, cartCount } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    return e.target.value.length > 1
      ? setSearch(e.target.value)
      : setSearch(null);
  };
  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link to="/" className="navbar-brand text-decoration-none fs-2">
            <span>Logo</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav ms-auto me-0">
              <li className="nav-item">
                <span className="nav-link" href="#">
                  Cart: {cartCount}
                </span>
              </li>
            </ul>
            <div className="d-flex">
              <input
                onChange={handleSearch}
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
