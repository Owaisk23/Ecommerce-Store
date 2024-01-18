import { Counter } from './features/counter/Counter';
import './App.css';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home></Home>) ,
    
  },
  {
    path: "/signup",
    element: (<SignupPage></SignupPage>) ,
    
  },
  {
    path: "/login",
    element: (<LoginPage></LoginPage>) ,
    
  },
  ,
  {
    path: "/cart",
    element: (<CartPage></CartPage>) ,
    
  },
  {
    path: "/checkout",
    element: (<CheckoutPage></CheckoutPage>) ,
    
  },
]);





function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
