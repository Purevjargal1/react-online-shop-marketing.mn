import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart";
import DDefault from "./components/DDefault";
import Modal from "./components/Modal";
function App() {
  return (
    <React.Fragment>
   <Navbar/>
   <Switch>
    <Route exact path="/" component={ProductList}/>
    <Route path="/Details" component={Details}/>
    <Route path="/Cart" component={Cart}/>
    <Route component={DDefault}/>
   </Switch>
   <Modal/>
   
   
    </React.Fragment>
  );
}

export default App;
