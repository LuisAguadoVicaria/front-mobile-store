import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <> <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="">Moda</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	          <li className="nav-item active"><a href="{{ home }}" className="nav-link">Inicio</a></li>
			  
			  <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" aria-haspopup="true" >Tienda</a>
              <div className="dropdown-menu">
				
              </div>
            </li>

	          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" aria-haspopup="true" >Usuario</a>
              <div className="dropdown-menu">
			
                <a className="dropdown-item" href="{{ account }}">Mi Cuenta</a>
                <a className="dropdown-item" href="{{ order }}">Pedidos</a>
                <a className="dropdown-item" href="{{ logout }}">Cerrar Sesión</a>
          
                 <a className="dropdown-item" href="{{ register }}">Registro</a>
                <a className="dropdown-item" href="{{ login }}">Acceso</a>
            
			  
				
              </div>
            </li>
			
			
	          <li className="nav-item"><a href="{{ contact }}" className="nav-link">Contacto</a></li>
			  <li className="nav-item"><a href="{{ special }}" className="nav-link">Ofertas</a></li>
	          <li className="nav-item cta cta-colored"><a href="{{ shopping_cart }}" className="nav-link">cart </a></li>

	        </ul>
	      </div>
	    </div>
	  </nav></>
  );
}

export default Navbar;