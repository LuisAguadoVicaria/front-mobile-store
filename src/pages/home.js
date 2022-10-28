import { Outlet, Link } from "react-router-dom";
import Layout from '../layout/layout';
function Home() {
  return (
    <Layout> 'Home'	<Link to={`details`}>Your Name</Link></Layout>
  );
}

export default Home;