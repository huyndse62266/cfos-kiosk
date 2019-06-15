import React, { Component } from 'react'
import { Modal, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MiniCart from '../../components/MiniCart'
import TopBar from '../../components/TopBar'
import ViewBasket from '../Basket/ViewBasket'
import PopularScreen from '../../components/screen/PopularScreen';
import PromotionScreen from '../../components/screen/PromotionScreen';
export default class MainPage extends Component {
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
            <div className="container-fluid w-100 p-0">
                <div style={{width:"88%"}}>
                    <TopBar/>
                </div>
                <div className="col-lg-12 py-1">
                    <div className="d-flex">
                        <div className="" style={{width:"85%"}}>
                            <PromotionScreen/>
                        </div>
                        <div className="ml-4"  style={{width:"15%"}}>
                            <Button type="primary" onClick={this.showModal}>
                                <Icon type="left" />
                            </Button>
                            <MiniCart/>
                        </div>
                    </div>
                </div>
                <Modal
                    title={<span><FontAwesomeIcon icon={faShoppingCart} /> View Basket</span> }
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable="true"
                    width="80%"
                    bodyStyle={{padding:0}}
                    footer={null}
                    centered
                    >
                    <ViewBasket/>
                </Modal>
            </div>

            
        )
    }
}
