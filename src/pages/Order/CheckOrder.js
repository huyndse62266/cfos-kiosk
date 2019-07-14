import React, { Component } from 'react'
import { Row,Col,Button,message } from 'antd';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight, faSearch, faBackspace, faFileInvoiceDollar} from '@fortawesome/free-solid-svg-icons'
import './Order.css'
import apiCaller from '../../utils/ApiCaller';
import DishStatus from '../../components/DishStatus/DishStatus'


class CheckOrder extends Component {

    constructor(){
        super();
        this.state ={
            number : '',
            order: [],
            isError: false
        }
    }


    goBackPage = () =>{
        var { history } = this.props
        history.goBack()
    }

    addNumber = (num) =>{
        var a = this.state.number.concat(num);
        if(a.length <= 10){
            this.setState({
                number: a
            })
        }
       
    };
    subNumber = () =>{
        var a = this.state.number.substring(0,this.state.number.length-1);
        this.setState({
            number: a
        })
       
    };

    onCheck = () =>{
        apiCaller(`orders/search-order?orderNumber=${this.state.number}`,'GET',null).then(res =>{
            this.setState({
                order: res.data
            })
        }).catch(error =>{
            message.error(error.response.data.message)
        })
    }

    render() {
        var {order} = this.state
        var {orderDetailReponseVMList} = order;
        return (
            <Row className="check-order-container h-100">
                <Col span={12} offset={3} className="h-100">
                    <Row>
                        <Col span={4}>
                            <Button className="back-home-button" onClick={()=>{this.goBackPage()}}>
                                <FontAwesomeIcon icon={faLongArrowAltLeft} /><span className="px-2">Trở về</span>
                            </Button>
                        </Col>
                        <Col span={6}>
                            <Link to="/menu">
                                <Button className="move-menu-button">
                                    <span className="px-2">Đặt món ăn</span><FontAwesomeIcon icon={faLongArrowAltRight} />
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row className="py-2"><h3 className="text-left p-0">Trạng thái đơn hàng của bạn</h3></Row>
                    {!orderDetailReponseVMList ? <div/> : 
                        <Row className="order-status-wrapper px-4 ">
                        <h4 className="order-number-title"> <FontAwesomeIcon icon={faFileInvoiceDollar}/> Đơn hàng: {order.orderNumber} <span style={{color:'gray'}}>({orderDetailReponseVMList.length} món)</span></h4>
                        {!orderDetailReponseVMList ? <div/> : 
                        orderDetailReponseVMList.map((orderDetail, index) => <DishStatus orderDetail={orderDetail}/> ) }
                    </Row> }
                   
                    
                </Col>
                <Col span={6} className="px-3 bg-light ml-5 h-100">
                    <div className="px-5">
                        <Row className="display-number-border py-5">
                            <Col type="flex">
                                <p className="title-input-order-number-1">Điền <span style={{color:'red'}}>mã đơn hàng</span> của bạn</p>
                                <p className="title-input-order-number-2">để xem trạng thái của món ăn</p>
                                <Row className="display-number-panel">
                                    {/* <Col span={4} className="my-auto"><FontAwesomeIcon icon={faSearch}/></Col> */}
                                    {/* <Col span={24}> </Col>*/}
                                    <Col span={6} className="icon-search"><FontAwesomeIcon icon={faSearch}/></Col>
                                    <Col span={11} className="display-number" style={{padding: '5% 0%'}}><h2>{this.state.number}</h2></Col>
                                </Row>
                            </Col>
                        </Row>
                        <div className="py-2">
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('1')}}>
                                        1   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('2')}}>
                                        2  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('3')}}>
                                        3  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('4')}}>
                                        4   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('5')}}>
                                        5  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('6')}}>
                                        6  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('7')}}>
                                        7   
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('8')}}>
                                        8  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.addNumber('9')}}>
                                        9  
                                    </Button>
                                </Col>
                            
                            </Row>
                            <Row className="py-2">
                                <Col span={8} className="px-2">
                                    <Button className="number-div" onClick={()=>{this.subNumber()}} >
                                        <FontAwesomeIcon icon={faBackspace} />  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="number-div"  onClick={()=>{this.addNumber('0')}}>
                                        0  
                                    </Button>
                                </Col>
                                <Col span={8} className="px-2">
                                    <Button className="search-numberpad-button" onClick={()=>{this.onCheck()}} >
                                        <FontAwesomeIcon icon={faSearch} /><br/>
                                        <span>Tìm</span>    
                                    </Button>
                                </Col>
                            
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}




export default CheckOrder