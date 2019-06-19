import React, { Component } from 'react'
import 'antd/dist/antd.css';
import TopBar from '../../components/TopBar'
import { BrowserRouter as Router} from "react-router-dom";
export default class MainPage extends Component {
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
          <div className="container-fluid w-100 p-0">
            <Router>
              <TopBar/>
            </Router>
        </div>

            
        )
    }
}
