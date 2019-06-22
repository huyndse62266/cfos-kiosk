import React, { Component } from 'react'
import MiniCart from './Cart/MiniCart'
class RightNavBar extends Component {
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
        return (
            <div>
                <div className="col-lg-12 px-3 py-0">
                    <div className="d-flex" style={{marginLeft:'-10px'}}>
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