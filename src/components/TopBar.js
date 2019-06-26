import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'
import { Menu } from 'antd';
import {Route, Link } from "react-router-dom";
import PromotionScreen  from './screen/PromotionScreen';
import DrinkScreen from './screen/DrinkScreen';
import DishScreen from './screen/DishScreen';
import RestaurantScreen from './screen/RestaurantScreen';
import PopularScreen from './screen/PopularScreen';
import ChoosePayment from '../pages/Payment/ChoosePayment'
export default class TopBar extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <div>
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                    <Menu.Item key="popular">
                        <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/popular">
                                <FontAwesomeIcon icon={faStar}/>
                                <span className="px-1">Popular</span></Link>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="promotion">
                        <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/promotion">
                                <FontAwesomeIcon icon={faPercentage} />
                                <span className="px-1">Promotion</span></Link>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="meal">
                        <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/meal">
                                <FontAwesomeIcon icon={faConciergeBell} />
                                <span className="px-1">Meal</span></Link>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="drink">
                        <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/drink">
                                <FontAwesomeIcon icon={faMugHot} />
                                <span className="px-1">Drink</span></Link>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="restaurant">
                        <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/restaurant">
                                <FontAwesomeIcon icon={faUtensils} />
                                <span className="px-1">Restaurant</span></Link>
                        </div>
                    </Menu.Item>
                </Menu>

                <Route path="/popular" exact component={PopularScreen}></Route>
                <Route path="/promotion"  exact component={PromotionScreen}></Route>
                <Route path="/meal" exact component={DishScreen}></Route>
                <Route path="/drink" exact component={DrinkScreen}></Route>
                <Route path="/restaurant" exact component={RestaurantScreen}></Route>
                
            </div>
        )
    }
}
