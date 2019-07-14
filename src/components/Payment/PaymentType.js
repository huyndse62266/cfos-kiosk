import React, { Component } from 'react'
import {Row,Col,message } from 'antd'
import { connect } from 'react-redux'
import { Link,Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard, faMoneyBillAlt, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import NumberFormat from 'react-number-format'; 
import { addOrder} from '../../action/orders'
import visaLogo from '../../images/visa-logo.png';
import mastercardLogo from '../../images/mastercard_logo.0.png';
import napasLogo from '../../images/napas-logo.png';
import aeonlogo from '../../images/aeon-logo.png';
import apiCaller from '../../utils/ApiCaller'
import './Payment.css'


const onClose = e => {
    console.log(e, 'I was closed.');
};
class PaymentType extends Component {
    constructor(props){
        super(props);
        this.state ={
            orderID: 0,
            isEmpty: true,
        }
    }
    
    checkoutClick = (cart,total) =>{
        
        if(cart.length > 0){
            var orderDetail = cart.map((cartItem) =>{
                
                return{
                    foodId: cartItem.foodId,
                    orderDetailFoodOption: cartItem.optionList,
                    quantity: cartItem.cartQuantity,
                    storeID: cartItem.storeId,
                    originalPrice: cartItem.price,
                    totalPrice: cartItem.price * cartItem.cartQuantity * cartItem.promotion,
                }
            })
            var order ={
                "customerId": null,
                "orderDetails": orderDetail,
                "totalOrder": total
            }
            apiCaller(`orders/orders/submit-order`,'POST',JSON.stringify(order)).then(res =>{
                this.setState({
                    orderID: res.data,
                    isEmpty: false
                });
                this.props.addOrder(res.data)
                // this.props.restoreMyCart()  
            }).catch(error => {
                if(error){
                    message.error(error.response.data.message)
                }              
            })
        }

    }
 
    render() {
        var {items,pricetotal} = this.props;
        const {isEmpty,isError,orderID} = this.state;
        if(!isEmpty) {
            return <Redirect to={{pathname: "/complete"}}/>
        }
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="text-left" >
                            <h1 className="payment-title">Vui lòng chọn phương thức thanh toán</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="total-price">
                        <FontAwesomeIcon icon={faShoppingBasket}/> <NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={','} />  đ
                    </Col>
                </Row>
                <Row className="payment-type-wrapper"  type="flex" justify="start">
                    <Col span={6} className="icon-type">
                        <FontAwesomeIcon icon={faCreditCard}/>
                    </Col>
                    <Col span={18}>
                        <Row className="type-name">
                            Thẻ tín dụng/thanh toán quốc tế
                        </Row>
                        <Row type="flex" justify="start" className="type-group-wrapper">
                            <div className="img-border">
                                <img src={visaLogo} className="payment-card-img"/>
                            </div>
                            <div className="img-border">
                                <img src={mastercardLogo} className="payment-card-img"/>
                            </div>
                            <div className="img-border">
                                <img src={napasLogo} className="payment-card-img"/>
                            </div>
                            
                    
                            
                        </Row>
                    </Col>
                </Row>
                <Row className="payment-type-wrapper" type="flex" justify="start">
                    <Col span={6} className="icon-type">
                        <FontAwesomeIcon icon={faAddressCard}/>
                    </Col>
                    <Col span={18} >
                        <Row className="type-name">
                            Thẻ thành viên
                        </Row>
                        <Row type="flex" justify="start" className="type-group-wrapper">
                            <Link to="/payment/membership">
                                <button type="button" className=" btn img-border bg-white">
                                    <img src={aeonlogo} className="payment-card-img"/>
                                </button>
                            </Link>
                        </Row>
                    </Col>
                </Row>
               
                <button type="button" className="btn payment-type-wrapper bg-white w-100" onClick={()=>{this.checkoutClick(items,pricetotal)}}>
                    <Row type="flex" justify="start">
                        <Col span={6} className="money-type">
                            <FontAwesomeIcon icon={faMoneyBillAlt}/>
                        </Col>
                        <Col span={18} >
                            <Row className="type-name text-left">
                                Thanh toán bằng tiền mặt
                            </Row>
                        </Col>
                    </Row>
                </button>
                
                {/* <Row className="my-3">
                    <Col span={16} offset={2} >
                        <div className="payment-type-wrapper">
                            <Row>
                                <h3>Membership</h3>
                            </Row>
                            <Row>
                                <Col span={6} className="px-3">
                                    <Button  className="card-button bg-warning">
                                        <span className="py-3 h-100">Card</span>
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <h6 className="py-2">Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col span={16} offset={2}>
                        <Button  className="cash-button" onClick={()=>{this.checkoutClick(items,pricetotal)}}>
                            <div><h3 >On Cash</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea<br/> commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6></div>
                        </Button>

                        <div style={{display:'none'}}>
                            <ReceiptTemplate items={items} totalPrice={pricetotal} orderID={orderID} ref={el => (this.componentRef = el)} /> 
                        </div>
                    </Col>
                </Row> */}
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        addOrder: (id)=>{
            dispatch(addOrder(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentType);
