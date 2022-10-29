import { Outlet, Link } from "react-router-dom";
import Layout from '../layout/layout';

function Home() {
	
	const products = [{name:"test",desc:""},
	{name:"test",desc:""},
	{name:"test",desc:""},
	{name:"test",desc:""}]
  return (
    <Layout> 
	
	<article className="container-fluid">
	<section className="row">
	{products.map(product=>(
	<Link className="card mb-3 col-4 text-decoration-none" to={`product/`+product.id}>
  <h3 className="card-header">
   <h5 className="card-title">Special title treatment</h5>
    <h6 className="card-subtitle text-muted">Support card subtitle</h6>
  </h3>

  <svg xmlns="http://www.w3.org/2000/svg" className="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" >
    <rect width="100%" height="100%" fill="#868e96"></rect>
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
  </svg>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Brand</li>
    <li className="list-group-item">Model</li>
  </ul>

  <div className="card-footer text-muted">
    PRICE
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