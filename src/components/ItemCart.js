import React, { Component } from 'react'
import { Avatar, Button, Typography  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import restaurantLogo from '../images/khai-niem-nha-hang.jpg'
export default class ItemCart extends Component {
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
            <div className="container-fluid p-0" style={{backgroundColor: '#E6E6E6', borderRadius: 10, width: "80%"}}>
                <div className="col-lg-12 p-0">
                    <img src={restaurantLogo} className="img-thumbnail rounded" alt="Cinque Terre"/>
                </div>
                <div className="col-lg-12 text-left px-3">
                    <a className="font-weight-bold">Lorem ipsum dolor sit amet consectetuer adipi</a>
                </div>
                <div className="row px-3 py-1">
                    <div class="col-lg-4">

                        <Button style={{backgroundColor: '#D2D2D2'}}><FontAwesomeIcon icon={faTrash} /></Button>
                    </div>
                    <div class="col-lg-8 d-flex flex-row px-3 py-1">
                         <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.DecreaseItem} ><FontAwesomeIcon icon={faMinus} /></Button>
                        <div className="px-3 py-1">
                            { this.state.show ? <h2 style={{fontSize:'1rem'}}>{ this.state.clicks }</h2> : '' }
                        </div>
                        <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.IncrementItem} ><FontAwesomeIcon icon={faPlus} /></Button>
                    </div>
                    <div className="row px-4 py-1">
                        <h5>84.000 đ</h5>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-dark font-weight-bold px-4">
                            Customize Order
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
