import React from 'react';
import { BrowserRouter as Router , Switch,Route } from 'react-router-dom';
import Header from './containers/components/Header';
import ProductDetail from './containers/components/ProductDetail';
import ProductListing from './containers/components/ProductListing';
import "./App.css"

const App = () => {
    
  return <>
  <div>
    <Router>
    <Header/>
    <Switch>

    <Route path= "/" exact component={ProductListing}/>
    <Route path="/product/:productId" exact component={ProductDetail} />
    <Route>404 Not Found</Route>
    </Switch>


    </Router>
  </div>
  
  </>;
};

export default App;
