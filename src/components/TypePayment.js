import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'

export default class TypePayment extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <div className="text-center py-5" >
                            <h1>Choose your payment methods</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
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
                                <Col span={6} className="px-2">
                                    <Button type="primary flex" className="card-button">
                                        <span className="py-3 h-100">Cart</span>
                                    </Button>
                                </Col>
                                <Col span={6} className="px-2">
                                    <Button type="primary" className="w-75 py-4  text-center">
                                   
                                    </Button>
                                </Col>
                                <Col span={6} className="px-2">
                                    <Button type="primary" className="w-75 py-4  text-center">
                                   
                                    </Button>
                                </Col>         
                            </Row>
                            <Row>
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={14} offset={5}>
                        <div className="bg-light rounded px-4 py-3">
                            <Row>
                                <h3>Membership</h3>
                            </Row>
                            <Row>
                                <div className="d-flex flex-row py-3">
                                    <div className="px-4 py-3 mx-1 bg-dark rounded" style={{color:'white', fontSize:'20px'}}>
                                        Card
                                    </div>
                                </div>
                            </Row>
                            <Row>
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={14} offset={5}>
                        <div className="bg-light rounded px-4 py-3">
                            <Row>
                                <h3>On Cash</h3>
                            </Row>
                            <Row>
                                <h6>Lorem ipsum dolor sit amet, consectetuer adipisicing elit. Aenea commodo ligula eget dolor. Aenea massa. Cum sociis natoque </h6>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
