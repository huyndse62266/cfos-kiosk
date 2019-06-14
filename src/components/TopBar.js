import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faPercentage } from '@fortawesome/free-solid-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons'
import { Menu, Icon } from 'antd';

export default class TopBar extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            // <div>
            //     <nav className="navbar navbar-expand-lg navbar-light nav-fill bg-info" style={{borderBottomRightRadius: 90}}>
            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>
            //         <div className="collapse navbar-collapse" id="navbarNav">
            //             <ul className="navbar-nav">
            //             <li className="nav-item active px-4 ml-4">
            //                 <a className="nav-link p-3 px-4" href="#" style={{fontSize:'15px'}}><i className="fa fa-star-o px-3"></i> Popular <span class="sr-only">(current)</span></a>
            //             </li>
            //             <li className="nav-item px-4 ml-4">
            //                 <a className="nav-link p-3 px-4" href="#" style={{fontSize:'15px'}}><i className="fa fa-percent px-3"></i> Promotion </a>
            //             </li>
            //             <li className="nav-item px-4 ml-4">
            //                 <a className="nav-link p-3 px-4" href="#" style={{fontSize:'15px'}}><i className="fa fa-spoon px-3"></i> Meals </a>
            //             </li>
            //             <li className="nav-item px-4 ml-4">
            //                 <a className="nav-link p-3 px-4" href="#" style={{fontSize:'15px'}}><i className="fa fa-coffee px-3"></i> Drinks </a>
            //             </li>
            //             <li className="nav-item px-4 ml-4">
            //                 <a className="nav-link p-3 px-4" href="#" style={{fontSize:'15px'}}><i className="fa fa-cutlery px-3"></i> Restaurant </a>
            //             </li>
            //             </ul>
            //         </div>
            //     </nav>
            // </div>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" inlineIndent='50'>
                <Menu.Item key="popular">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faStar} />
                        <a className="px-2">Popular</a>
                    </div>
                </Menu.Item>
                <Menu.Item key="promotion">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faPercentage} />
                        Promotion
                    </div>
                    
                </Menu.Item>
                <Menu.Item key="meal">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faConciergeBell} />
                        Meal
                    </div>
                    
                </Menu.Item>
                <Menu.Item key="drink">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faMugHot} />
                        Drink
                    </div>
                </Menu.Item>
                <Menu.Item key="restaurant">
                    <div className="px-5 py-2" style={{fontSize: '20px'}}>
                        <FontAwesomeIcon icon={faUtensils} />
                        Restaurant
                    </div>
                    
                </Menu.Item>
            
            </Menu>
        )
    }
}
