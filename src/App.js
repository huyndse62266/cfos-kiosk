import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router } from "react-router-dom";
import MainScreen from './pages/Home/MainPage'
import ChoosePayment from './pages/Payment/ChoosePayment'
import CheckOrder from './pages/Order/CheckOrder'
import TopBar from './components/TopBar'

function App() {
  return (
    <Router>
      <Route path="/"  exact component={MainScreen}></Route>
      <Route path="/check-order" exact component={CheckOrder}></Route>
      <Route path="/popular" exact exact component={TopBar}></Route>
      <Route path="/payment" exact component={({history}) => <ChoosePayment history={history}/>}></Route> 
    </Router>
    
  //  <CheckOrder/>
  );
}

export default App;
