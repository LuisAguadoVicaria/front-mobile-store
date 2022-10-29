import React, { createContext, useContext, useState, useEffect } from 'react';

import { Outlet, Link } from "react-router-dom";
import Layout from '../layout/layout';
import { Routes, Route, useParams } from 'react-router-dom';


import { useGlobalContext } from '../context/GlobalContext';

function Details() {
	
	const { getData } = useGlobalContext();
	const {productId} = useParams();
	const [productDetails, setProductDetails] = useState(null)
	
	
	useEffect(()=>{
		
		getData('api/prodcut/'+productId).then(response=>setProductDetails(response))
		
	},[])
  return (
    <Layout>
	{JSON.stringify(productDetails)}
	<section className="container col-xxl-8 px-4 py-5">
    <article className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div className="d-md-flex justify-content-md-center align-items-center">
		
			 <div className="form-group w-100 p-4">
      <label for="exampleSelect1" className="form-label mt-4">Almacenamiento</label>
      <select className="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <label for="exampleSelect1" className="form-label mt-4">Color</label>
      <select className="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

          <button type="button" className="btn btn-primary btn-lg px-4 m-5">Guardar</button>
        </div>
      </div>
    </article>
  </section>
	</Layout>
  );
}

export default Details;