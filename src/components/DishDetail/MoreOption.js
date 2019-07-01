import React, { Component } from 'react'
import { Button  } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
export default class MoreOption extends Component {
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
            <div className="row border-top px-2 py-1">
                <div className="col-lg-6">
                    <div className="row font-weight-bold">
                        {this.props.name}
                    </div>
                    <div className="row">
                        +{this.props.price}.000 đ
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-row py-2 px-3">
                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.DecreaseItem} ><FontAwesomeIcon icon={faMinus} /></Button>

                    <div className="px-3 py-1">
                        { this.state.show ? <h2 style={{fontSize:'1rem'}}>{ this.state.clicks }</h2> : '' }
                    </div>
                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.IncrementItem} ><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
            </div>
        )
    }
}
