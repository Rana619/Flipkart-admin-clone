import React, {  useEffect } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './containers/Home/index.js'
import Signin from './containers/Signin/index.js'
import Signup from './containers/Signup/index.js'
import PrivateRoute from './components/HOC/PrivateRoute.js'
import { useDispatch, useSelector } from 'react-redux';
import {  getInitialData, isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import Page from './containers/Page';
import Loader from './components/UI/loader';
import HomePageCreate from './containers/HomePageCreate';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const page = useSelector(state => state.page);
  const product = useSelector(state => state.product);
  const order = useSelector((state) => state.order);
  const category = useSelector(state => state.category);
  const homePage = useSelector(state => state.homePage);

  //componentDidUpdate
    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
        if(auth.authenticate){
            dispatch(getInitialData());
        }
    }, [auth.authenticate]);

  return (
    <div className="App">
        {
          auth.authenticating && <Loader />
        }
        {
          page.loading && <Loader />
        }
        {
          product.loading && <Loader />
        }
        {
          order.loading && <Loader />
        }
        {
          category.loading && <Loader />
        }
        {
          homePage.loading && <Loader />
        }
           <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <PrivateRoute path="/page" component={Page} />
              <PrivateRoute path="/category" component={ Category } />
              <PrivateRoute path="/products" component={ Products } />
              <PrivateRoute path="/orders" component={ Orders } />
              <PrivateRoute path="/createHomePage" component={ HomePageCreate } />
              <Route path="/signin" component={Signin} />
              {/* <Route path="/signup" exact component={Signup} /> */}
              <Route path="/signup" exact component={Signin} />
           </Switch>
    </div>
  );
}

export default App;