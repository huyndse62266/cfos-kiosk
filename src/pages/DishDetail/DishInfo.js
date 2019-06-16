import React, { Component } from 'react'
import { Avatar, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTag, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

import Foodingredients from '../../components/DishDetail/Foodingredients'
import MoreOption from '../../components/DishDetail/MoreOption'

import 'antd/dist/antd.css';
import './DishInfo.scss'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg'

export default class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
    }
    IncrementItem = () => {
        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    render() {
        
        return (
            <div className="container-fluid" style={{height: "80%"}}>
                <div className="row py-2">
                    <div className="row border-bottom">
                        {/* Cot hinh anh */}
                        <div className="image-container-scroll col-lg-4">
                            <div className="image-wrapper-scroll">
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                <div className="h-25 m-2">
                                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"100%", width: '100%'}}/>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-lg-8 pr-4">
                            <div className="row d-flex flex-row ">
                                <div class="col-lg-6">
                                    {/* start div store info */}
                                    <div className="d-flex flex-row py-2">
                                        <div className="col-lg-1 px-1">
                                            <Avatar style={{ backgroundColor: '#87d068' }} icon="user" size="small"/>
                                        </div>
                                        <div className="col-lg-11 px-2 py-0 ">
                                            <a>Nhà hàng Lorem Ipsum</a>
                                        </div>
                                    </div>
                                    {/* end  div store info */}
                                    {/* start div food info */}
                                    <div class="d-flex flex-column px-3">
                                        <div className="row">
                                            <h4 className="text-left">Lorem ipsum dolor sit ame consect adipis ame</h4>
                                        </div>
                                        <div className="row py-2">
                                            <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                            <FontAwesomeIcon icon={faStar} style={{color: 'orange'}}/>
                                        </div>
                                        <div className="row py-1">
                                            <h6 className="font-weight-bold">84.000 đ</h6>
                                        </div>
                                        <div className="row border-top py-2">
                                            <a className="text-left" style={{fontSize: '14px'}}>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor</a>
                                        </div>
                                    </div>
                                    {/* end  div food info */}
                                    {/* start div promotion info */}
                                    <div className="row px-3 py-2 border-top">
                                        <div className="col-lg-1 px-1">
                                            <FontAwesomeIcon icon={faTag} style={{color: 'green',fontSize:'24px'}} />
                                        </div>
                                        <div className="col-lg-11 p-0">
                                            <h6 className="text-left px-3">20% Discount all dishes</h6>
                                        </div>
                                    </div>
                                    {/* end  div promotion info */}
                                    {/* start div add quantity */}
                                    <div className="d-flex flex-column border-top px-3">
                                        <div className="row py-3">
                                            <h5>Amount</h5>
                                        </div>
                                        <div className="row p-0">
                                            <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.DecreaseItem} ><FontAwesomeIcon icon={faMinus} /></Button>
                                            {/* <button type="button" onClick={this.DecreaseItem} className="btn">
                                                <i class="fa fa-minus"></i>
                                            </button> */}
                                            <div className="px-3 py-1">
                                                { this.state.show ? <h2 style={{fontSize:'1rem'}}>{ this.state.clicks }</h2> : '' }
                                            </div>
                                            <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.IncrementItem} ><FontAwesomeIcon icon={faPlus} /></Button>
                                            {/* <button type="button" onClick={this.IncrementItem} className="btn">
                                                <i className="fa fa-plus"></i>
                                            </button> */}
                                        </div>
                                    </div>
                                    {/* end div add quantity */}
                                </div>
                                <div class="col-lg-6 ">
                                    <Foodingredients/>
                                    <div className="d-flex flex-column px-3">
                                        <div className="row">
                                            <h6>More options</h6>
                                        </div>
                                        <MoreOption name="Cheese slice" price="15"/>
                                        <MoreOption name="Salad" price="10"/>            
                                        <MoreOption name="Bacon" price="5"/>        
                                    </div>
                                    <div className="row d-flex float-right p-3">
                                        <button type="button " className="btn font-weight-bold py-1"  style={{backgroundColor:'#D2D2D2'}}>
                                            <i class="fa fa-refresh" aria-hidden="true"></i> Reset to default
                                        </button>
                                    </div>
                                </div>   
                            </div>
                            <div className="row border-top d-flex justify-content-end align-items-center py-3">
                                <div class="col-lg-2 mx-auto">
                                </div>
                                <div class="col-lg-5 p-0 mx-auto" >
                                    <h3 className=""><small>Provisional:</small> 95 000 đ</h3>
                                </div>
                                <div class="col-lg-5 mx-auto">
                                    <Button className="button">
                                        Add to Basket
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
                    
                </div>
            </div>
        )
    }
}

