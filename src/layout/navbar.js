import React, { createContext, useContext, useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

import { useGlobalContext } from '../context/GlobalContext';
function Navbar() {
	const { getCartCount, setSearch } = useGlobalContext();
	const [cartCount, setCartCount] = useState(getCartCount('cart_count'))
	
	useEffect(()=>{
		
		setCartCount(getCartCount('cart_count'))
		
	},[])
	
	const handleSearch = (e) => {
		e.preventDefault()
		return e.target.value.length > 1 ? setSearch(e.target.value) : setSearch(null)
		
	}
  return (
    <> <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cart: {cartCount}</a>
        </li>
        
        
      </ul>
		
        <input onChange={handleSearch} className="form-control me-sm-2" type="text" placeholder="Search"/>
   
    </div>
  </div>
</nav></>
  );
}

export default Navbar;