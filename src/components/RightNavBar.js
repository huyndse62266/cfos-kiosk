import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MiniCart from './MiniCart';
import ViewBasket from '../views/Basket/ViewBasket'

class RightNavBar extends Component {
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
            <div>
                <div className="col-lg-12 py-1">
                    <div className="d-flex">
                        <div className="ml-4" style={{width: "15%"}}>
                            <Button type="primary" onClick={this.showModal}>
                                <Icon type="left"/>
                            </Button>
                            <MiniCart/>
                        </div>
                    </div>
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
export default RightNavBar;