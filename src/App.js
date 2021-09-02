import React from 'react';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import Footer from './Components/Footer/Footer';
import About from './Components/About/index';
import Checkout from './Components/Checkout/index';
import Contact from './Components/Contact/index';
import SignlePage from './Components/Single-page';
import Shop from './Components/Shop';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
      <Router>
        <Header />
          <Switch>
            
            <Route path="/shop"> <Shop /> </Route>            
            <Route path="/product/:productId"> <ProductDetail /> </Route>
            <Route path="/about"> <About /> </Route>            
            <Route path="/cart"> <Cart /> </Route>
            <Route path="/Checkout"> <Checkout /> </Route>
            <Route path="/Contact"> <Contact /> </Route>
            <Route path="/home" > <Home /> </Route>
            <Route path="/" exact> <Home /> </Route>
            
          </Switch>
        <Footer />
      </Router>
    </>
  );

}

export default App;
