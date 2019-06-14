import React, { Component } from 'react'
import restaurantLogo from '../images/khai-niem-nha-hang.jpg'


export default class MiniCart extends Component {
    
    render() {
        return (
            <div className="container bg-light">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row px-3 text-center">
                            <div className="row px-5 py-1">                              
                                <a className="font-weight-bold">
                                    <i className="fa fa-shopping-basket" style={{ fontSize: "20px" }} /> Your Basket 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-4 py-1">
                    <span className="border border-secondary rounded">
                        <div className="">
                            <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"125px", width: '100%'}}/>
                        </div>
                        <div className="px-1 text-left">
                            <a>
                                Lorem ipsum dolor sit ame consectetur adipis
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 px-4 py-2">
                                <div className="float-left">
                                    <div className="">
                                        <a className="font-weight-bold">
                                            42.000 đ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 px-4 py-2">
                                <div className="float-right">
                                    <div className="">
                                        <a className="">
                                            x2
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
                <div className="row px-4 py-1">
                    <span className="border border-secondary rounded">
                        <div className="">
                            <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre" style={{height:"125px", width: '100%'}}/>
                        </div>
                        <div className="px-1 text-left">
                            <a>
                                Lorem ipsum dolor sit ame consectetur adipis
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 px-4 py-2">
                                <div className="float-left">
                                    <div className="">
                                        <a className="font-weight-bold">
                                            42.000 đ
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 px-4 py-2">
                                <div className="float-right">
                                    <div className="">
                                        <a className="">
                                            x2
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>  
                    </span>
                </div>
                <div class="row ">
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
                <div className="row px-3">
                    <button className="btn btn-custom-3  font-weight-bold" data-toggle="modal" data-target="#exampleModalLong">
                        Purchase
                    </button>
                </div>

                
            </div>
        )
    }
}
