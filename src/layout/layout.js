import Footer from './footer';
import Navbar from './navbar';

function Layout({children}) {
  return (
	<main className="">
    <Navbar/>
	{children}
	<Footer/>
	</main>
  );
}

export default Layout;