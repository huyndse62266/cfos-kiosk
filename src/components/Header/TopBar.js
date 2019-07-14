import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUtensils, faStar, faPercentage, faConciergeBell,faMugHot, faThumbsUp,faLongArrowAltLeft,faShoppingBasket,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col,Button,Modal } from 'antd';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import ViewBasket from '../../pages/Basket/ViewBasket'
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
                        <Button className="back-button opensan-20-bold">
                            <FontAwesomeIcon icon={faLongArrowAltLeft} />
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
                    {this.props.items.length > 0? <div className="cart-header">
                        <a onClick={this.showModal}><FontAwesomeIcon icon={faShoppingBasket} style={{fontSize: '23px'}}/>
                        <span className="px-3">Xem giỏ hàng của bạn</span></a>
                    </div> :
                     <div className="empty-cart">
                        <FontAwesomeIcon icon={faShoppingBasket} style={{fontSize: '23px'}}/>
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