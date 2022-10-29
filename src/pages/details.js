import { useState, useEffect } from "react";

import Layout from "../layout/layout";

import { useParams } from "react-router-dom";

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
  }, []);
  
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
        <article className="row justify-content-center align-items-center g-5 py-5">
         
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              {productDetails.model}
            </h1>
            <h3 className="text-muted ms-3">{productDetails.brand}</h3>
			 <div className="col-6">
            <img
              src={""}
              className="d-block mx-lg-auto img-fluid p-5 border rounded mx-auto"
              alt="Bootstrap Themes"
              loading="lazy"
            />
          </div>
            <div className="d-md-flex justify-content-md-center align-items-center">
              <form
                className="form-group w-100 p-4 d-flex"
                onSubmit={handleSubmit}
              >
                <div className="form-group w-100">
                  {" "}
                  <label for="storagesSelect" className="form-label mt-4">
                    Storage
                  </label>
                  <select className="form-select" name="storagesSelect">
                    {productDetails.options.storages.map((e) => (
                      <option value={e.code}>{e.name}</option>
                    ))}
                  </select>
                  <label for="colorsSelect" className="form-label mt-4">
                    Color
                  </label>
                  <select className="form-select" name="colorsSelect">
                    {productDetails.options.colors.map((e) => (
                      <option value={e.code}>{e.name}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group d-flex pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg m-auto mx-5"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-6">
              <ul className="list-group vh-100 overflow-auto">
                {specs === null
                  ? "Loading specs..."
                  : specs.map((spec) => (
                      <li className="list-group-item d-flex justify-content-between align-items-start border-bottom">
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
        </article>
      </section>
    </Layout>
  );
}

export default Details;
