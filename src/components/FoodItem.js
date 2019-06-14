import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Button, Typography,Modal  } from 'antd';

import DishDetail from '../views/DishDetail/DishDetail'
import DishDetailHeader from '../components/DishDetail/DishDetailHeader';

import restaurantLogo from '../images/khai-niem-nha-hang.jpg';
import 'antd/dist/antd.css';

const { Text } = Typography;

export default class FoodItem extends Component {
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
            <div className="container ml-3 bg-light " style={{ width:'23%'}}>
                <div className="row d-flex flex-row py-2">
                    <div className="col-lg-1 p-0 ">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/>
                    </div>
                    <div className="col-lg-8 px-2 ">
                        {/* <a style={{fontSize:'12px'}}>Nhà hàng Lorem Ipsum</a> */}
                        <Text style={{fontSize:'12px'}}>Nhà hàng Lorem Ipsum</Text>
                    </div>
                    <div className="col-lg-3 p-0 ">
                        <div className="text-center rounded py-1" style={{backgroundColor:'#D2D2D2'}}>
                            <a className="font-weight-bold">-20%</a>
                        </div>
                        
                    </div>
                </div>
                <div className="rounded-lg p-0">
                    <div className="row p-0">
                        <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"125px", width: '100%'}}/>
                    </div>
                    <div className="row p-0">
                        <div className="col-lg-12 p-0">
                            <a className="font-weight-bold text-left d-inline-block text-truncate px-2" style={{fontSize: '15px', maxWidth: '90%'}}>Lorem ipsum dolor sit ame consect adipis ame ipsum dolor</a>  
                        </div>
                    </div>
                    <div className="row d-flex flex-row p-2">
                        <div className="col-lg-8 bg-dagger ">
                            <div className="row py-1">
                                <a className="font-weight-bold" style={{fontSize:'12px'}}>42.000 đ</a> 
                            </div>
                            <div className="row" style={{fontSize:'12px', color:'orange'}}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="col-lg-4 ">
                            <Button style={{backgroundColor: '#4A4A4A', color: 'white'}} onClick={this.showModal}>+Add</Button>
                            {/* <button type="button" className="btn btn-dark px-2 py-1" style={{fontSize:'14px'}}>
                                +Add
                            </button> */}
                        </div>
                    </div>
                </div>
                <Modal
                    title={<span><DishDetailHeader/></span> }
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable="true"
                    width="80%"
                    bodyStyle={{padding:0, height: '700px'}}
                    footer={null}
                    centered
                    >
                    <DishDetail/>
                </Modal>
            </div>
        )
    }
}
