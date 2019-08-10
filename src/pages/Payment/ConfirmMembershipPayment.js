import React, { Component } from 'react'
import {Row,Col,Button,Modal}  from 'antd'
import ConfirmPaymentModal from '../../components/Payment/Confirm/ConfirmPaymentModal'
import './Payment.css'
export default class ConfirmMembershipPayment extends Component {
        state = {
        loading: false,
        visible: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    render() {
        const { visible, loading } = this.state;
        return (
            <div className="confirm-membership-payment">
                <Button type="primary" onClick={this.showModal}>
                    Open Modal with customized footer
                </Button>
                    <Modal
                    visible={visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width="30%"
                    centered 
                    footer={[
                        <button type="btn" className="btn cancel-btn-modal" key="back" onClick={this.handleCancel}>
                          Hủy
                        </button>,
                        <button  type="btn" className="btn submit-btn-modal" key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                          Xác nhận và thanh toán
                        </button>,
                    ]}
                    >
                        <ConfirmPaymentModal/>    
                    </Modal>
            </div>
        )
    }
}
