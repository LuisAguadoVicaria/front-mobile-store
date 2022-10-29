import React, { createContext, useContext, useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import Layout from '../layout/layout';

import { useGlobalContext } from '../context/GlobalContext';

function Home() {
	const { getData } = useGlobalContext();
	
	const [products, setProducts] = useState(null)
	
	const filterUnpricedItems = (arr) => arr.filter(e=>e.price !== "")
	
	useEffect(()=>{
		
		getData('product').then(response=>setProducts(filterUnpricedItems(response)))
		
	},[])
  return (
    <Layout>
	<article className="container-fluid">
	<section className="row row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-xl-5 g-3">
	{products === null ? "Loading data..." : products.map(product=>(
	<Link className="col text-decoration-none" to={`product/`+product.id}>
  <div className="card h-100"><h3 className="card-header">
   <h5 className="card-title">{product.model}</h5>
    <h6 className="card-subtitle text-muted">{product.brand}</h6>
  </h3>

  <div class="card-body text-center"><img className="img-fluid" src={product.imgUrl} alt={product.brand+'-'+product.model}/></div>

  <div className="card-footer text-end">
  {parseInt(product.price)} €
  </div>
</div>
	</Link>
	
	))}
	</section>
	</article>
	
	
	
	
	'Home'	<Link to={`details`}>Your Name</Link>
	
	
	
	

	
	
	
	
	</Layout>
  );
}

export default Home;