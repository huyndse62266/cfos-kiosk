import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import { connect } from 'react-redux'
import { actCheckoutRequest } from '../../action';
import './Cart.scss'


class TypePayment extends Component {
    checkoutClick = (cart,total) =>{
        if(cart.length > 0){
            this.props.checkout(cart,total);
        }
        
    }
    render() {
        var {items,pricetotal} = this.props;
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="text-center py-5" >
                            <h1>Choose your payment methods</h1>
                        </div>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col span={14} offset={5}>
                        <div className="bg-light rounded px-4 py-3">
                            <Row>
                                <h3>Global Cart</h3>
                            </Row>
                            <Row>
                                {/* <div className="d-flex flex-row py-3">
                                    <div className="px-4 py-3 mx-1 bg-dark rounded" style={{color:'white', fontSize:'20px'}}>
                                        Card
                                    </div>
                                    <div className="px-4 py-3 mx-1 bg-dark rounded" style={{color:'white', fontSize:'20px'}}>
                                        Card
                                    </div>
                                    <div className="px-4 py-3 mx-1 bg-dark rounded" style={{color:'white', fontSize:'20px'}}>
                                        Card
                                    </div>
                                </div> */}
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
                            <Row>
                                <h6 className="py-2">Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="my-2">
                    <Col span={14} offset={5} >
                        <div className="bg-light rounded px-4 py-3">
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
                <Row className="my-2">
                    <Col span={14} offset={5}>
                        <Button  className="cash-button bg-light" onClick={()=>{this.checkoutClick(items,pricetotal)}}>
                            {/* <div className="bg-info"> */}
                                <h3 >On Cash</h3>
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea<br/> commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            {/* </div> */}
                        </Button>
                        {/* <div className="bg-light rounded px-4 py-3">
                            <Row>
                                <h3>On Cash</h3>
                            </Row>
                            <Row>
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div> */}
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

    }
}


const mapDispatchToProps= (dispatch)=>{
    return{
        checkout: (cart,total)=>{
            console.log('bbb')
            dispatch(actCheckoutRequest(cart,total))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypePayment);
