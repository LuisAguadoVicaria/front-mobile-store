import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <nav className="border-bottom navbar navbar-expand-lg navbar-light bg-light py-2 shadow">
        <div className="container">
          <Link to="/" className="navbar-brand fw-bold fs-4 ms-3">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="py-2 navbar-collapse collapse"
            id="navbarColor03"
          >
            <div className="d-flex ms-auto me-1">
              <div className="d-flex">
                {" "}
                <span className="fs-6 badge bg-success rounded-pill me-3 my-auto">
                  {cartCount}
                </span>
                <i className="gg-shopping-cart mt-2 me-3"></i>
              </div>

              <input
                className="form-control"
                type="text"
                onChange={handleSearch}
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
