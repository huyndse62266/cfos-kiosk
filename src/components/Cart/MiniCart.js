import React, { Component }  from 'react'
import { Modal, Button, Row,Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import ScrollArea from 'react-scrollbar';
import NumberFormat from 'react-number-format';
import { Link} from "react-router-dom";
import CartItemMini from './CartItemMini'
import ViewBasket from '../../pages/Basket/ViewBasket'

import './Cart.scss'

class MiniCart extends Component {
    state = {
        visible: false,
        items: this.props.items
    };

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
                    return <CartItemMini food={item} key={index}  index={index} cartQuantity={item.cartQuantity}/>
                })
            ):(
                <span></span>
            );
          
        return (
            
            <div className="mini-cart-wrapper" >
            
                <Row>
                    <Button type="primary" onClick={this.showModal} className="ml-3 px-0" style={{zIndex: 2, width: '30px',
                        height:'30px',position:'absolute',right: '94%', top: '10px'}}>
                        <FontAwesomeIcon icon={faAngleLeft} style={{fontSize: '30px', textAlign:'center'}}/>
                    </Button>
                    <Col span={24} className="px-4 py-3 text-center" >
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize:'20px'}}/><span className="font-weight-bold" style={{fontSize:'15px'}}> Your Basket</span>
                    </Col>
                </Row>
                <ScrollArea speed={0.8}
                    verticalScrollbarStyle={{display:'none'}}
                    className="area"
                    contentClassName="content"
                    horizontal={false} style={{height: '60%'}}>
                    <Row>
                        {addedItems}
                    </Row>
                </ScrollArea>
                <Row className="total-price-wrapper p-3">
                    <Col span={12} className="float-left">
                        <h6>Tổng tiền: </h6>
                    </Col>
                    <Col span={12} >
                        <h6 className="float-right font-weight-bold"><NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h6>
                    
                    </Col>
                </Row>
                <Row>
                    <Col span={18} offset={3}>
                       
                            <Link to="/payment"><Button  className="purchase-button-1">Purchase</Button></Link>
                   
                       
                    </Col>   
                </Row>
                <Modal
                    title={<h5><FontAwesomeIcon icon={faShoppingCart}/> View Basket</h5>}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable
                    width="95%"
                    bodyStyle={{padding: 0, height: '100%'}}
                    footer={<Row type="flex" justify="end">
                    <Col span={8} className="py-1 text-right">
                      <Col span={4} className="py-3">        
                          <h2>Total: </h2>
                      </Col>
                      <Col span={7} className="py-3">
                          <h2><NumberFormat value={this.props.pricetotal} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','}/> đ</h2>
                      </Col>
                      <Col span={13} className="py-2">
                          
                        <Button className="w-75 h-100 text-center bg-success">
                            <Link to="/payment"><div className="py-3" style={{color: 'white', fontWeight: 'bold'}}>Purchase</div></Link>  
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
