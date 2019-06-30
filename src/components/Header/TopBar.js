import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils, faStar, faPercentage, faConciergeBell,faMugHot, faThumbsUp,faArrowLeft,faUser,faSync } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col,Button } from 'antd';
import { connect } from 'react-redux'
import { Link  } from "react-router-dom";
import { restoreCart } from '../../action/cart';
import './Header.scss'


class TopBar extends Component {
    state = {
        current: 'popular',
      };
    
   
    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };
    restoreCartRequest = () =>{
        this.props.restoreMyCart();
    }
    render() {
        return (
            <Row>
                <Col span={2}>
                    <Link to="/">
                        <Button className="arrow-button" style={{fontSize: '20px'}}>
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </Button>
                    </Link>
                </Col>
                <Col span={19}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                        <Menu.Item key="popular" className="menu-item">
                        
                                <Link to="/menu/popular">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <span className="px-1">Popular</span></Link>
                    
                        </Menu.Item>
                        <Menu.Item key="promotion" className="menu-item">
                    
                                <Link to="/menu/promotion">
                                    <FontAwesomeIcon icon={faPercentage} />
                                    <span className="px-1">Promotion</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="meal" className="menu-item">
                    
                                <Link to="/menu/meal">
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <span className="px-1">Meal</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="drink" className="menu-item">
                        
                                <Link to="/menu/drink">
                                    <FontAwesomeIcon icon={faMugHot} />
                                    <span className="px-1">Drink</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="combo" className="menu-item">
                            
                            <Link to="/menu/combo">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className="px-1">Combo</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="restaurant" className="menu-item">
                            
                            <Link to="/menu/restaurant">
                                <FontAwesomeIcon icon={faUtensils} />
                                <span className="px-1">Restaurant</span></Link>
                        
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={3}>
                    <Row>
                        <Col span={12}>
                            <Button className="user-button">
                                <FontAwesomeIcon icon={faUser} />
                            </Button>
                        </Col>
                        <Col span={12} className="p-0 text-right">
                            <Button className="cancel-button" onClick={()=>{this.restoreCartRequest()}}>
                                <FontAwesomeIcon icon={faSync} /><span className="px-1">Cancel</span>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        restoreMyCart: ()=>{
            dispatch(restoreCart())
        }
    }
}
export default connect(null,mapDispatchToProps)(TopBar);