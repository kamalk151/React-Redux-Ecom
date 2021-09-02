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
import { UserProvider } from './Components/ThemeColor';
import {useSelector} from 'react-redux'
function App() {
  let themeSelector = useSelector(state => state.theme)
  
  return (
    <>
      <Router>       
        <UserProvider value={themeSelector}>  
          <Header />
            <Switch>              
              <Route path="/shop"> <Shop /> </Route>            
              <Route path="/product/:productId"> <ProductDetail /> </Route>
              <Route path="/about"> <About /> </Route>            
              <Route path="/cart"> <Cart /> </Route>
              <Route path="/checkout"> <Checkout /> </Route>
              <Route path="/Contact"> <Contact /> </Route>
              <Route path="/home" > <Home /> </Route>
              <Route path="/" exact> <Home /> </Route>              
            </Switch>
          <Footer />
          </UserProvider>
      </Router>
    </>
  );

}

export default App;
