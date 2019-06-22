import React, { Component } from 'react'
import { Modal, Button, Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import ScrollArea from 'react-scrollbar';
import NumberFormat from 'react-number-format';
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg'
import CartItemMini from './CartItemMini'
import ViewBasket from '../../pages/Basket/ViewBasket'
import './Cart.scss'

class MiniCart extends Component {
    state = { visible: false };

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
  
            let addedItems =  this.props.items.length ?
            (
                this.props.items.map((item,index) =>{
                    return <CartItemMini food={item} key={index}  index={index}/>
                })
            ):(
                <span></span>
            );
        return (
            
            <div className="container bg-light p-0 h-100 ">
            
                <Row>
                    <Button type="primary" onClick={this.showModal} className="ml-3 px-0" style={{zIndex: 2, width: '30px',
                        height:'30px',position:'absolute',right: '94%', top: '10px'}}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: '30px', textAlign:'center'}}/>
                    </Button>
                    <Col span={24} className="px-4 py-3 text-center" >
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'20px'}}/><a className="font-weight-bold" style={{fontSize:'15px'}}> Your Basket</a>
                    </Col>
                </Row>
                <ScrollArea speed={0.8}
                    verticalScrollbarStyle={{display:'none'}}
                    className="area"
                    contentClassName="content"
                    horizontal={false} style={{height: '550px'}}>
                    <Row>
                        {addedItems}
                    </Row>
                </ScrollArea>
                <Row className="p-3">
                    <Col span={12} className="float-left">
                        <h6>Tổng tiền: </h6>
                    </Col>
                    <Col span={12} >
                        <h6 className="float-right font-weight-bold"><NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h6>
                    </Col>
                </Row>
                {/* <div className="row px-5">
                    <button className="btn btn-custom-3  font-weight-bold" data-toggle="modal" data-target="#exampleModalLong">
                        Purchase
                    </button>
                </div> */}
                <Row>
                    <Col span={18} offset={3}>
                        <Button onClick={this.showModal} className="purchase-button-1">
                            Purchase
                        </Button>
                    </Col>   
                </Row>
                <Modal
                    title={<span><FontAwesomeIcon icon={faShoppingCart}/> View Basket</span>}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable="true"
                    width="95%"
                    bodyStyle={{padding: 0}}
                    footer={<Row type="flex" justify="end">
                    <Col span={12} className="py-1">
                      <Col span={4} className="py-3">        
                          <h2>Total: </h2>
                      </Col>
                      <Col span={7} className="py-3">
                          <h2><NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h2>
                      </Col>
                      <Col span={8} className="py-2">
                          <Button className="w-75 h-100 text-center bg-success">
                            <div className="py-3" style={{color: 'white', fontWeight: 'bold'}}>Purchase</div>
                          </Button>  
                      </Col>
                      <Col span={5} className="py-2">
                          <Button className="w-75 h-100 text-center bg-danger" onClick={()=>{this.handleCancel()}}>
                            <div  className="py-3" style={{color: 'white', fontWeight: 'bold'}}>
                              Cancel
                            </div>
                          </Button>  
                      </Col>      
                    </Col>
                  </Row>  }
                    centered
                >
                    <ViewBasket/>
                </Modal>
                
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

export default connect(mapStateToProps,null)(MiniCart);