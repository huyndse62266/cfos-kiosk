import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg'
import CartItemMini from './CartItemMini'
import ViewBasket from '../../pages/Basket/ViewBasket'

export default class MiniCart extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        return (
            <div className="container bg-light px-2 py-0">
                <div className="row">
                    <Button type="primary" onClick={this.showModal} className="ml-3" style={{zIndex: 2, width: '35px',
                        height:'35px',position:'absolute',right: '220px', top: '10px'}}>
                        <Icon type="left"/>
                    </Button>
                    <div className="col-lg-12">
                        <div className="row px-3 text-center">
                            <div className="row px-5 py-3">                              
                                <a className="font-weight-bold">
                                    <i className="fa fa-shopping-basket" style={{ fontSize: "20px" }} /> Your Basket 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-4 py-1">
                    <span className="border border-secondary rounded">
                        <CartItemMini/>
                    </span>
                </div>
                <div className="row px-4 py-1">
                    <span className="border border-secondary rounded">
                        <CartItemMini/>
                    </span>
                </div>
                <div className="row px-4 py-1">
                    <span className="border border-secondary rounded">
                        <CartItemMini/>
                    </span>
                </div>
               
                <div className="row ">
                    <div className="d-flex justify-content-end align-items-center col-lg-5 px-1">
                        <div className="float-left">
                            <div>
                                <h6>Tổng tiền:</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 px-3 py-2">
                        <div className="float-right">
                            <div >
                                <h5>235.000 đ</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-5">
                    <button className="btn btn-custom-3  font-weight-bold" data-toggle="modal" data-target="#exampleModalLong">
                        Purchase
                    </button>
                </div>
                <Modal
                    title={<span><FontAwesomeIcon icon={faShoppingCart}/> View Basket</span>}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable="true"
                    width="80%"
                    bodyStyle={{padding: 0}}
                    footer={null}
                    centered
                >
                    <ViewBasket/>
                </Modal>
                
            </div>
        )
    }
}
