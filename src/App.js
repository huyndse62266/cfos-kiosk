import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainScreen from './pages/Home/MainPage'
import ImageSwiper from './components/DishDetail/DishDetailHeader'
import DishDetail from './pages/DishDetail/DishDetail';
import Foodingredients from './components/DishDetail/Foodingredients';
import MoreOption from './components/DishDetail/MoreOption'; 
import CheckDishStatus from './pages/CheckDishStatus/CheckDishStatus'

function App() {
  return (
    <MainScreen/>
  );
}

export default App;
