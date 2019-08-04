import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils, faStar, faPercentage, faConciergeBell,faMugHot, faThumbsUp,faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col,Button,Modal,Icon } from 'antd';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import ViewBasket from '../../pages/Basket/ViewBasket'
import {ReactComponent as ExpandBasketSVG } from '../../icons/expandBasket.svg'
import {ReactComponent as LongArrowLeft } from '../../icons/LongArrowLeft.svg'
import {ReactComponent as Basketicon } from '../../icons/Basketicon.svg'

import './Header.css'


class TopBar extends Component {
    state = {
        visible: false,
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


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <Row className="bg-light h-100" type="flex" justify="start">
                
                <Col style={{width:'10.4%'}} className="text-center bg-white">
                    <Link to="/">
                        <Button className="back-button">
                            <Icon component={LongArrowLeft} />
                            <span className="back-button-title">Trở về</span>
                        </Button>
                    </Link>
                </Col>
                <Col span={17} style={{width:'72.6%'}} className="menu-border">
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                        <Menu.Item key="popular" className="menu-item">
                        
                                <Link to="/menu/popular">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <span className="menu-title">Nổi bật</span></Link>
                    
                        </Menu.Item>
                        <Menu.Item key="promotion" className="menu-item">
                    
                                <Link to="/menu/promotion">
                                    <FontAwesomeIcon icon={faPercentage} />
                                    <span className="menu-title">Khuyến mãi</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="meal" className="menu-item">
                    
                                <Link to="/menu/meal">
                                    <FontAwesomeIcon icon={faConciergeBell} />
                                    <span className="menu-title">Đồ ăn</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="drink" className="menu-item">
                        
                                <Link to="/menu/drink">
                                    <FontAwesomeIcon icon={faMugHot} />
                                    <span className="menu-title">Đồ uống</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="combo" className="menu-item">
                            
                            <Link to="/menu/combo">
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <span className="menu-title">Combo</span></Link>
                        
                        </Menu.Item>
                        <Menu.Item key="restaurant" className="menu-item">
                            
                            <Link to="/menu/restaurant">
                                <FontAwesomeIcon icon={faUtensils} />
                                <span className="menu-title">Nhà hàng</span></Link>
                        
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col style={{width:'17%'}} className="h-100">
                    {this.props.items.length > 0? <Row className="cart-header">
                        <a onClick={this.showModal}>
                        <Row type="flex" justify="space-around" align="middle">
                            <Col span={2} offset={2}>
                                <Row type="flex" justify="space-around" align="middle" className="number-dishes-wrapper-topbar">
                                    <Col>
                                        {this.props.items.length}
                                    </Col>
                                </Row>    
                                <Icon component={Basketicon} className="basket-icon-topbar"/>
                                
                            </Col>
                            <Col span={4}><Icon component={ExpandBasketSVG} className="expand-icon"/></Col>
                            <Col span={16}><u className="px-3 opensan-18-bold ">Xem giỏ của bạn</u></Col>
                        </Row>
                        
                        
                        </a>
                    </Row> :
                     <div className="empty-cart">
                        <Icon component={Basketicon} className="empty-basket-icon"/>
                        <span className="px-3">Chưa có món ăn</span>
                    </div> }
                   
                </Col>

                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="100%"
                    footer={null}
                    bodyStyle={{padding: 0, height: '100%'}}
                    centered
                    className="view-basket-modal"
                >
                    <ViewBasket total={this.props.pricetotal} origin={this.props.originPrice}/>
                </Modal>
                
            </Row>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
        originPrice: state.cart.originPrice
    }
}




export default connect(mapStateToProps,null)(TopBar);