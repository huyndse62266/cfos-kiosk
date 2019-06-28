import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils, faStar, faPercentage, faConciergeBell,faMugHot, faThumbsUp,faArrowLeft,faUser,faSync } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col,Button } from 'antd';
import { Link  } from "react-router-dom";
import './Header.scss'


export default class TopBar extends Component {
    state = {
        current: 'popular',
      };
    
   
    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <Row >
                <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                    <Col span={1}>
                        <Link to="/">
                            <Button className="arrow-button" style={{fontSize: '20px'}}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Button>
                        </Link>
                    </Col>
                    <Col span={20}>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="popular">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/popular">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <span className="px-1">Popular</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="promotion">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/promotion">
                                    <FontAwesomeIcon icon={faPercentage} />
                                    <span className="px-1">Promotion</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="meal">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <Link to="/menu/meal">
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <span className="px-1">Meal</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="drink">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/drink">
                                    <FontAwesomeIcon icon={faMugHot} />
                                    <span className="px-1">Drink</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="combo">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/combo">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                    <span className="px-1">Combo</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    <Col span={4} style={{fontSize: '20px'}}>
                        <Menu.Item key="restaurant">
                            <div className="px-5 py-2" style={{fontSize: '20px'}}>
                                <Link to="/menu/restaurant">
                                    <FontAwesomeIcon icon={faUtensils} />
                                    <span className="px-1">Restaurant</span></Link>
                            </div> 
                                
                        </Menu.Item>
                    </Col>
                    </Col>
                    <Col span={3}>
                        <Row>
                            <Col span={12}>
                                <Button className="user-button">
                                    <FontAwesomeIcon icon={faUser} />
                                </Button>
                            </Col>
                            <Col span={12} className="p-0 text-right">
                                <Button className="cancel-button">
                                    <FontAwesomeIcon icon={faSync} /><span className="px-1">Cancel</span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Menu>
            </Row>
        )
    }
}
