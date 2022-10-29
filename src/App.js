
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';
import Details from './pages/details';

import Layout from './layout/layout';
import Footer from './layout/footer';
import Navbar from './layout/navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/product/:productId",
    element: <Details/>,
  },
]);

function App() {
  return (
<RouterProvider router={router} />

  );
}

export default App;
