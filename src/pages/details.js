import { useState, useEffect } from "react";

import Layout from "../layout/layout";

import { useParams, Link } from "react-router-dom";

import { useGlobalContext } from "../context/GlobalContext";

function Details() {
  const { productId } = useParams();

  const { getData, postApiCart, setCart } = useGlobalContext();
  const [productDetails, setProductDetails] = useState(null);
  const [specs, setSpecs] = useState(null);

  const filterSpecs = (obj) =>
    Object.entries(obj).filter(
      (e) =>
        e[0] !== "id" &&
        e[0] !== "imgUrl" &&
        e[0] !== "options" &&
        e[0] !== "brand" &&
        e[0] !== "price" &&
        e[0] !== "model"
    );

  useEffect(() => {
    getData("product/" + productId).then((response) => {
      setProductDetails(response);
      setSpecs(filterSpecs(response));
    });
  }, [getData, productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postApiCart({
      id: productDetails.id,
      colorCode: e.target.colorsSelect.value,
      storageCode: e.target.storagesSelect.value,
    }).then((e) => {
      alert("Saved!");
      setCart(e.count);
    });
  };

  return productDetails === null ? (
    "Loading..."
  ) : (
    <Layout>
      <section className="container">
        <article className="row row-cols-md-1 row-cols-lg-2 gy-5">
          <div className="col">
            <div className="list-wrapper bg-white w-100 h-100 border p-5 shadow">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                {productDetails.model}
              </h1>
              <h3 className="text-muted ms-3">{productDetails.brand}</h3>
              <div className="ms-3 text-center">
                <img
                  src={productDetails.imgUrl}
                  className="img-fluid p-2 mt-5 rounded d-inline-block"
                  alt={productDetails.model}
                  loading="lazy"
                />
              </div>
              <div className="text-center mt-5">
                <span className="badge text-bg-dark fw-bold fs-3">170 €</span>
              </div>
              <div className="mt-5 d-md-flex justify-content-md-center align-items-center">
                <form
                  className="form-group w-100 d-flex"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group d-flex pt-5">
                    <Link to="/" className="btn btn-dark btn-lg my-auto me-4">
                      &#60;
                    </Link>
                  </div>
                  <div className="form-group w-100">
                    {" "}
                    <label for="storagesSelect" className="form-label mt-4">
                      Storage
                    </label>
                    <select className="form-select" name="storagesSelect">
                      {productDetails.options?.storages?.map((e) => (
                        <option value={e.code}>{e.name}</option>
                      ))}
                    </select>
                    <label for="colorsSelect" className="form-label mt-4">
                      Color
                    </label>
                    <select className="form-select" name="colorsSelect">
                      {productDetails.options?.colors?.map((e) => (
                        <option value={e.code}>{e.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group d-flex pt-5">
                    <button
                      type="submit"
                      className="btn btn-dark btn-lg my-auto ms-4"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="list-wrapper border shadow overflow-auto">
              <ul className="list-group">
                {specs === null
                  ? "Loading specs..."
                  : specs.map((spec) => (
                      <li className="list-group-item text-black list-group-item-action">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold text-capitalize">
                            {spec[0]}
                          </div>
                          {spec[1]}
                        </div>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
}

export default Details;
