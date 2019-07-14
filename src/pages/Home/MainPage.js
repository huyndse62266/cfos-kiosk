import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faDrumstickBite, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import 'antd/dist/antd.css';


import './Main.scss'
export default class MainPage extends Component {



    render() {
        return (
        <body>
          <div className="home-container">
            <Row className="group-button">
              <Col span={12} className="text-right p-5">
  
                <Link to="/check-order">
                  <button type="button" className="btn button-check">
                    <FontAwesomeIcon icon={faSearch}/><span className="px-3">Kiểm tra tình trạng order</span>
                  </button>
                </Link>
              </Col>
              <Col span={12} className="text-left p-5">
                <Link to="/menu">
                  <button type="button" className="btn button-order" >
                    <FontAwesomeIcon icon={faDrumstickBite}/><span className="px-3">Chạm để đặt món ăn</span><FontAwesomeIcon icon={faLongArrowAltRight}/>
                  </button>
                </Link>
              </Col>
            </Row>
            
            
          </div>
        </body>
            
        )
    }
}
