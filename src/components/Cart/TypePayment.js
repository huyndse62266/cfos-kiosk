import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import { connect } from 'react-redux'
import { actCheckoutRequest } from '../../action/cart';
import ReactToPrint from 'react-to-print';
import ReceiptTemplate from '../ReceiptTemplate'
import './Cart.scss'


class TypePayment extends Component {
    checkoutClick = (cart,total) =>{
        if(cart.length > 0){
            this.props.checkout(cart,total);
        }
        
    }
    
    render() {
        var {items,pricetotal, orderID} = this.props;
        console.log(orderID)    
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
        checkout: (cart,total)=>{
            dispatch(actCheckoutRequest(cart,total))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypePayment);
