import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Avatar, Button, Typography,Modal  } from 'antd';

import DishDetail from '../pages/DishDetail/DishDetail'
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
        var { food } = this.props;
        return (
            <div className="container ml-3 my-2 bg-light " style={{ width:'23%'}}>
                <div className="row d-flex flex-row py-2">
                    <div className="col-lg-1 p-0 ">
                        <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/>
                    </div>
                    <div className="col-lg-8 px-2 ">
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
                        <img src={food.foodImage} className="img-thumbnail" alt="Cinque Terre" style={{height:"125px", width: '100%'}}/>
                    </div>
                    <div className="row p-0">
                        <div className="col-lg-12 p-0">
                            <a className="font-weight-bold text-left d-inline-block text-truncate px-2" style={{fontSize: '15px', maxWidth: '90%'}}>{food.foodName}</a>  
                        </div>
                    </div>
                    <div className="row d-flex flex-row p-2">
                        <div className="col-lg-6 bg-dagger ">
                            <div className="row py-1">
                                <a className="font-weight-bold" style={{fontSize:'12px'}}>{food.price} đ</a> 
                            </div>
                            <div className="row" style={{fontSize:'12px', color:'orange'}}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 text-right">
                            <Button style={{backgroundColor: '#4A4A4A', color: 'white'}} onClick={this.showModal}>+Add</Button>

                        </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    closable="true"
                    width="80%"
                    bodyStyle={{padding:0, height: '750px'}}
                    footer={null}
                    centered
                    >
                    <DishDetail food={food}/>
                </Modal>
            </div>
        )
    }
}
