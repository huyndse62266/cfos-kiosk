import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router,Switch } from "react-router-dom";
import MainScreen from './pages/Home/MainPage'
import ChoosePayment from './pages/Payment/ChoosePayment'
import CheckOrder from './pages/Order/CheckOrder'
import TopBar from './components/TopBar'
import MenuPage from './pages/Menu/MenuPage'
import PopularScreen from './components/screen/PopularScreen'
import PromotionScreen from './components/screen/PromotionScreen'
import DishScreen from './components/screen/DishScreen'
import DrinkScreen from './components/screen/DrinkScreen'
import RestaurantScreen from './components/screen/RestaurantScreen'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/"  exact component={MainScreen}></Route>
        <Route path="/check-order" exact component={CheckOrder}></Route>
        <Route path="/menu" component={MenuPage}></Route>
        <Route path="/payment" exact component={({history}) => <ChoosePayment history={history}/>}></Route> 
      </Switch>
    </Router>
    
  //  <CheckOrder/>
  );
}

export default App;
