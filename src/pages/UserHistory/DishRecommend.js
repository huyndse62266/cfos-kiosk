import React, { Component } from 'react'
import {Row, Col} from 'antd'
import DishOrdered from '../../components/History/DishOrdered'
import PopularDishes from '../../components/History/PopularDishes'
import MiniCart from '../../components/Cart/MiniCart'
export default class DishRecommend extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Row>
                    <Col span={18} className="pl-5">
                        <DishOrdered/>
                        <PopularDishes/>
                    </Col>
                    <Col span={6} style={{paddingLeft: '6rem',paddingRight: '3rem'}}>
                    <MiniCart/>
                    </Col>
                </Row>
            </div>
        )
    }
}
