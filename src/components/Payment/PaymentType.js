import React, { Component } from 'react'
import {Row,Col,Button,Alert } from 'antd'
import { connect } from 'react-redux'
import { actCheckoutRequest,restoreCart } from '../../action/cart';
import { Link } from 'react-router-dom'
import ReactToPrint from 'react-to-print';
import ReceiptTemplate from '../Receipt/ReceiptTemplate'
import apiCaller from '../../utils/ApiCaller'
import './Payment.scss'

const onClose = e => {
    console.log(e, 'I was closed.');
};
class PaymentType extends Component {
    constructor(props){
        super(props);
        this.state ={
            orderID: 0
        }
    }
    
    checkoutClick = (cart,total) =>{
        if(cart.length > 0){
            var orderDetail = cart.map((cartItem) =>{
                return{
                    foodId: cartItem.foodId,
                    quantity: cartItem.cartQuantity,
                    storeID: cartItem.storeVM.storeId,
                    totalPrice: cartItem.price * cartItem.cartQuantity,
                }
            })
            var order ={
                "customerId": null,
                "orderDetails": orderDetail,
                "totalOrder": total
            }
            apiCaller(`orders/orders/submit-order`,'POST',JSON.stringify(order)).then(res =>{
                this.setState({
                    orderID: res.data
                })
            }).catch(error => {
                return <Alert
                message="Error"
                description={error.response.data.message}
                type="error"
                closable
                onClose={onClose}
              />
            })
            console.log(this.state.orderID) 
        }

    }
 
    render() {
        var {items,pricetotal, orderID} = this.props; 
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="text-left p-5" >
                            <h1 className="px-5">Choose your payment methods</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col span={16} offset={2}>
                        <div className="payment-type-wrapper">
                            <Row>
                                <h3>Global Card</h3>
                            </Row>
                            <Row>
                                <Col span={6} className="px-3">
                                    <Button  className="card-button bg-danger">
                                        <span className="py-3 h-100">Card</span>
                                    </Button>
                                </Col>
                                <Col span={6} className="px-3">
                                    <Button  className="card-button bg-info">
                                        <span className="py-3 h-100">Card</span>
                                    </Button>
                                </Col>
                                <Col span={6} className="px-3">
                                    <Button className="card-button bg-success">
                                        <span className="py-3 h-100">Card</span>
                                    </Button>
                                </Col>
                                
     
                            </Row>
                            <Row className="payment-type-detail">
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="my-3">
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
                        <ReactToPrint
                        trigger={() => <Button  className="cash-button">
                            <div><h3 >On Cash</h3>
                            <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea<br/> commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6></div>
                        </Button>}
                        content={() => this.componentRef}
                        onBeforePrint={() => this.checkoutClick(items,pricetotal)}
                        copyStyles
                        />
                        <div style={{display:'none'}}>
                            <ReceiptTemplate items={items} totalPrice={pricetotal} orderID={orderID} ref={el => (this.componentRef = el)} /> 
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}



const mapStateToProps = (state)=>{
    return{
        items: state.cart.addedItems,
        pricetotal: state.cart.total,
        orderID: state.cart.orderID
    }
}


const mapDispatchToProps= (dispatch)=>{
    return{
        restoreMyCart: ()=>{
            dispatch(restoreCart())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PaymentType);
