import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MiniCart from './Cart/MiniCart'
import ViewBasket from '../pages/Basket/ViewBasket'

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
                <div className="col-lg-12 px-3 py-0">
                    <div className="d-flex" style={{marginLeft:'-10px'}}>
                        <div style={{position: 'absolute'}}>
                            
                        </div>
                        <div>
                            <MiniCart/>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default RightNavBar; 