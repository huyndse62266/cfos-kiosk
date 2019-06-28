import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSync, faUser } from '@fortawesome/free-solid-svg-icons'
import { Menu,Row,Col } from 'antd';
export default class RightHeader extends Component {
    state = {
        current: 'popular',
      };
    
      handleClick = e => {
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                <Menu.Item key="popular">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <FontAwesomeIcon icon={faUser}/>
                    </div>
                </Menu.Item>
                <Menu.Item key="promotion">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                            <FontAwesomeIcon icon={faSync} />
                            <span className="px-1">Cancel</span>
                    </div>
                </Menu.Item>
                
            </Menu>
        )
    }
}
