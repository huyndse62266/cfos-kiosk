import React, { Component } from 'react'
import 'antd/dist/antd.css';
import TopBar from '../../components/TopBar'
import { BrowserRouter as Router} from "react-router-dom";

export default class MainPage extends Component {
    render() {
        return (
            <div className="container-fluid w-100 p-0">
                <div style={{width:"88%"}}>
                    <Router>
                        <TopBar/>
                    </Router>
                </div>
            </div>


        )
    }
}
