import { GlobalContext } from "./context/GlobalContext";

import './App.css';

import Home from './pages/home';
import Details from './pages/details';

import {
  createBrowserRouter,
  RouterProvider,
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
<GlobalContext><RouterProvider router={router} /></GlobalContext>

  );
}

export default App;
