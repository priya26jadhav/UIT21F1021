import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllProducts from './allproducts';
import ProductDetails from './productdetails';

function App() {
  return (
    <Router>
      <Route path="/" exact component={<AllProducts/>} />
      <Route path="/product/:id" component={<ProductDetails/>} />
    </Router>
  );
}

export default App;
