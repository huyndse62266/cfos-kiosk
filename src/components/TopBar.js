import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils, faStar, faPercentage, faConciergeBell,faMugHot, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col } from 'antd';
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
            <Row >
                <Col span={24}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50' defaultSelectedKeys={'popular'}>
                        <Menu.Item key="popular">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/popular">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <span className="px-1">Popular</span></Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="promotion">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/promotion">
                                    <FontAwesomeIcon icon={faPercentage} />
                                    <span className="px-1">Promotion</span></Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="meal">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/meal">
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <span className="px-1">Meal</span></Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="drink">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/drink">
                                    <FontAwesomeIcon icon={faMugHot} />
                                    <span className="px-1">Drink</span></Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="combo">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/combo">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <span className="px-1">Combo</span></Link>
                            </div>
                        </Menu.Item>
                        <Menu.Item key="restaurant">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/restaurant">
                                    <FontAwesomeIcon icon={faUtensils} />
                                    <span className="px-1">Restaurant</span></Link>
                            </div>
                        </Menu.Item>
                    </Menu>

                    
                </Col>
                
            </Row>
        )
    }
}
