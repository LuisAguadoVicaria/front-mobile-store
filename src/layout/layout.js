import Footer from './footer';
import Navbar from './navbar';

import '../styles/bootstrap.css';

function Layout({children}) {
  return (
	<main className="d-flex flex-column vh-100">
    <Navbar/>
	<article className="container-fluid my-3">
	{children}
	</article>
	<Footer/>
	</main>
  );
}

export default Layout;