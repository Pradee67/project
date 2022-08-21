import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './Components/Theme';
import Header from './Components/Header';
import { Router } from "@reach/router";
import { useCart } from 'react-use-cart';
//import {BrowserRouter as  Route,Router,Switch} from 'react-router-dom'
 import { Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ProductList from "./Components/ProductList";
import CreateProduct from "./Components/CreateProduct";
import ViewProduct from "./Components/ViewProduct";
import HeaderComponent from "./Components/HeaderComponent";


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header />
      <Router>
     
          
                    
                          
             
        <Home path="/" />
        <Cart path="/cart" />
     
      </Router>



  </main>
  );
}
   
  export default App;
  
  {/*  <div>
  <Router>
        <HeaderComponent />
          <div className="container">
              
                    <Route path = "/" exact component = {ProductList}></Route>
                    <Route path = "/employees" component = {ProductList}></Route>
                    <Route path = "/add-employee/:id" component = {CreateProduct}></Route>
                    <Route path = "/view-employee/:id" component = {ViewProduct}></Route>
                     
              
          </div>
        
  </Router>
  </div>*/}
   
    