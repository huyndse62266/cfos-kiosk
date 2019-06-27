import React, { Component } from 'react'
import {Row,Col,Button} from 'antd'
import {Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import TopBar from '../../components/TopBar'
import CheckOrder from '../Order/CheckOrder'
import { BrowserRouter as Router} from "react-router-dom";
import './Main.scss'
export default class MainPage extends Component {



    render() {
        return (
        <div>
          <Row>
            <Col span={18} offset={3}>
              <img src={'https://cdn.pixabay.com/photo/2017/08/20/07/12/lisbon-2660748_960_720.jpg'}/>  
            </Col>
          </Row>
          <Row className="py-4">
            <Col span={12} className="text-right p-5">
              
              <Link to="/check-order">
                <Button className="button-check">
                  Check your dishes status
                </Button>
              </Link>
            </Col>
            <Col span={12} className="text-left p-5">
              <Link to="/menu">
                <Button className="button-order" >
                  Touch to place your order
                </Button>
              </Link>
            </Col>
            
          </Row>
          
          
        </div>
            
        )
    }
}
