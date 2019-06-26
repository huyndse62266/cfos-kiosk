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
      <Route path="/"  component={MainScreen}></Route>
      <Route path="/check-order"  component={CheckOrder}></Route>
      <Route path="/popular" exact component={TopBar}></Route>
    </Router>
    
  //  <CheckOrder/>
  );
}

export default App;
