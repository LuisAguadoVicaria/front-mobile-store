import React, { createContext, useContext, useState, useEffect } from "react";

import { Outlet, Link } from "react-router-dom";
import Layout from "../layout/layout";

import { useGlobalContext } from "../context/GlobalContext";

function Home() {
  const { getData, search } = useGlobalContext();

  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
	const [lazyIndex, setLazyIndex] = useState(1)
  
  
  const filterUnpricedItems = (arr) => arr.filter((e) => e.price !== "");
  const filterBySearch = (arr) =>
    search !== null
      ? arr.filter(
          (e) =>
            e.model.toLowerCase().includes(search) ||
            e.brand.toLowerCase().includes(search)
        )
      : arr;

  useEffect(() => {
    getData("product").then((response) => {
      setProducts(filterUnpricedItems(response));
      setFilteredProducts(filterUnpricedItems(response));
    });
  }, []);
  
  useEffect(() => {
    setFilteredProducts(filterBySearch(products));
	setLazyIndex(1);
  }, [search]);
  
  const productCount = () => filteredProducts.length
  const loadLazy = () => setLazyIndex(lazyIndex+1)
  return (
    <Layout>
      <section className="row row-cols-2 row-cols-md-4 row-cols-xl-6 g-3">
        {filteredProducts?.map((product) => (
          <Link
            className="col text-decoration-none"
            to={`product/` + product.id}
          >
            <div className="card h-100">
              <div className="card-header">
                <h5 className="card-title fw-bold text-black">{product.model}</h5>
                <h6 className="card-subtitle text-muted">{product.brand}</h6>
              </div>

              <div class="card-body text-center">
                <img
                  className="img-fluid"
                  src={"error"}
                  alt={product.brand + "-" + product.model}
                />
              </div>

              <div className="card-footer text-end">
                {parseInt(product.price)} €
              </div>
            </div>
          </Link>
        )).slice(0,10*lazyIndex)}
		
      
	  <aside>{productCount()<=10 ? null : (<div className="h-100 col-12">
		<button onClick={loadLazy} className="btn btn-primary">
			More...
			</button></div>)}
			</aside></section>
    </Layout>
  );
}

export default Home;
