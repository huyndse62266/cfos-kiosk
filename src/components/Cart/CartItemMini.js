import React, { Component } from 'react'
import {Col,Row,Button} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg'
import './Cart.scss'
export default class CartItem extends Component {
    render() {
        return (
            <div className="border-custom mb-3">
                <Row>
                    <img src={restaurantLogo} className="img-thumbnail pb-0" alt="Cinque Terre" style={{height:"100px", width: '100%'}}/>
                    <Button className="trash-button">
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </Row>
                <Row>
                     <div className="px-2 text-left font-weight-bold text-left">
                            <a>
                                Lorem ipsum dolor sit ame consectetur adipis
                            </a>
                        </div>
                </Row>
                <Row>
                    <div className="px-2 py-1">
                        <Col span={16}>
                            <p className="font-weight-bold">42.000 đ</p>
                        </Col>
                        <Col span={8}><p className="float-right">x2</p></Col>
                    </div>
                </Row>
            </div>
        )
    }
}
