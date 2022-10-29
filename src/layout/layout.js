import Footer from './footer';
import Navbar from './navbar';

import '../styles/bootstrap.css';

function Layout({children}) {
  return (
	<main className="d-flex flex-column vh-100">
    <Navbar/>
	{children}
	<Footer/>
	</main>
  );
}

export default Layout;