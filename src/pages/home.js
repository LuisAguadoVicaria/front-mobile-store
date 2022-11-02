import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/layout";

import { useGlobalContext } from "../context/GlobalContext";

function Home() {
  const { getData, search } = useGlobalContext();

  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [lazyIndex, setLazyIndex] = useState(1);

  const filterUnpricedItems = (arr) => arr.filter((e) => e.price !== "");

  useEffect(() => {
    getData("product").then((response) => {
      setProducts(filterUnpricedItems(response));
      setFilteredProducts(filterUnpricedItems(response));
    });
  }, [getData]);

  useEffect(() => {
    const filterBySearch = (arr) =>
      search !== null
        ? arr?.filter(
            (e) =>
              e.model.toLowerCase().includes(search.toLowerCase()) ||
              e.brand.toLowerCase().includes(search.toLowerCase())
          )
        : arr;
    setFilteredProducts(filterBySearch(products));
    setLazyIndex(1);
  }, [search, products]);

  const productCount = filteredProducts?.length;
  const loadLazy = () => setLazyIndex(lazyIndex + 1);
  return (
    <Layout>
      <section className="row row-cols-2 row-cols-lg-4 row-cols-xl-5 g-3">
        {filteredProducts
          ?.map((product, i) => (
            <Link
              key={i}
              className="col text-decoration-none"
              to={`product/` + product.id}
            >
              <div className="card h-100 border shadow">
                <div className="card-header">
                  <h5 className="card-title fw-bold text-black">
                    {product.model}
                  </h5>
                  <h6 className="card-subtitle text-muted">{product.brand}</h6>
                </div>

                <div className="card-body text-center">
                  <img
                    className="img-fluid"
                    src={product.imgUrl}
                    alt={product.brand + "-" + product.model}
                  />
                </div>

                <div className="card-footer text-center">
                  <span className="badge text-bg-dark fw-bold fs-5">
                    {parseInt(product.price)} €
                  </span>
                </div>
              </div>
            </Link>
          ))
          .slice(0, 19 * lazyIndex)}

        <aside>
          {!Number.isInteger(productCount) ||
          productCount <= 19 ||
          productCount < 19 * lazyIndex ? null : (
            <div className="card border-0 bg-transparent d-flex h-100 w-100">
              <button onClick={loadLazy} className="btn btn-dark m-auto">
                More...
              </button>
            </div>
          )}
        </aside>
      </section>
    </Layout>
  );
}

export default Home;
