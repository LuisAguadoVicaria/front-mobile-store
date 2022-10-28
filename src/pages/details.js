import { Outlet, Link } from "react-router-dom";
import Layout from '../layout/layout';
import { Routes, Route, useParams } from 'react-router-dom';
function Details() {
	const {productId} = useParams();
  return (
    <Layout> 'Details'-{productId}<Link to={`details`}>Your Name</Link></Layout>
  );
}

export default Details;