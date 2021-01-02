import React from 'react';
import { Switch, Route, Redirect, useLocation, BrowserRouter } from 'react-router-dom';
import Home from './page/home'
import payment from './page/payment'
import Product from './page/product'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact from="/" to="/home"/>
        <Route path="/home" component={Home}/>
        <Route path="/bayar" component={payment}/>
        <Route path="/product" component={Product}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
