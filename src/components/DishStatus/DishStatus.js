import React, { Component } from 'react'
import restaurantLogo from '../../images/khai-niem-nha-hang.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import './DishStatus.scss'

export default class DishStatus extends Component {

    constructor(props){
        super(props);
        this.state = { 
            isReady : this.props.orderStaus
        }
    }

    render() {

        let myDiv = null;
        if(this.state.isReady){
            myDiv = <div className="col-lg-3 d-flex px-4 justify-content-end align-items-center">            
                <div className="d-flex flex-row">
                    <div className="col-lg-10 ">
                        <div className="row text-right">
                            <a className="status-finish">Finish</a>
                        </div>
                        <div className="row text-right">
                            <a className="status-finish-description">Waiting for pick up</a>
                        </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-end align-items-center check-icon">
                        <FontAwesomeIcon icon={faCheck}/>
                    </div>
                </div>
            </div>
        }else{
            myDiv = <div className="col-lg-3 d-flex px-4 justify-content-end align-items-center" >            
                <a className="status-waiting">Cooking ...</a>
            </div>
        }
        return (
            <div className="container d-flex flex-row p-0 py-3">
                <div className="col-lg-2 p-0">
                    <img src={restaurantLogo} className="img-thumbnail" alt="Cinque Terre"/>
                </div>
                <div className="col-lg-5 p-2 px-3  text-left">
                    <a className="font-weight-bold" style={{fontSize:'17px'}}>Lorem ipsum dolor sit ame consect adipis ame ipsum dolor</a>
                </div>
                <div className="col-lg-2 d-flex justify-content-end align-items-center">
                    <h4 className="mx-auto">x2</h4>
                </div>
                {myDiv}
            </div>  
        
        )
    }
}
