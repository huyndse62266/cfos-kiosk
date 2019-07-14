import React, { Component } from 'react'
import { Button  } from 'antd';
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import NumberFormat from 'react-number-format';
import {actDecOption, actIncOption} from '../../action/options'
class MoreOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
          clicks: 0,
          show: true
        };
    }
    IncrementOption = () => {
        var quantity = this.state.clicks;
        quantity += 1;
        this.setState({ clicks: this.state.clicks + 1 });
        this.props.IncrementOption(this.props.foodOption,quantity) 
        
    }
    DecreaseOption = () => {

        if(this.state.clicks > 0){
            var quantity = this.state.clicks;
            quantity -= 1;
            this.setState({ clicks: this.state.clicks - 1 });
            this.props.DecreaseOption(this.props.foodOption,quantity) 
        } 
         
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }

    componentDidMount(){
        if(this.props.optionQuatity){
            let optionCart = this.props.optionQuatity.find(option => option.foId === this.props.foodOption.foId)  
            if(optionCart){
                this.setState({
                    clicks: optionCart.quantity
                })
            }          
            
        }
        
    }
    render() {
        var {foodOption} = this.props
        return (
            <div className="row border-top px-2 py-1">
                <div className="col-lg-6">
                    <div className="row font-weight-bold">
                        {foodOption.foName}
                    </div>
                    <div className="row">
                        <span><NumberFormat value={foodOption.optionPrice} displayType={'text'} thousandSeparator={','} />  đ</span>
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-row py-2 px-3">
                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.DecreaseOption} ><FontAwesomeIcon icon={faMinus} /></Button>

                    <div className="px-3 py-1">
                        { this.state.show ? <h2 style={{fontSize:'1rem'}}>{ this.state.clicks }</h2> : '' }
                    </div>
                    <Button style={{backgroundColor: '#D2D2D2'}} onClick={this.IncrementOption} ><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps= (dispatch)=>{
    return{
        incQuantity: (foodOption, foodId)=>{
     
            // dispatch(actIncOption(foodOption, foodId))
        },
        decQuantity: (foodOption, foodId)=>{
            // dispatch(actDecOption(foodOption, foodId))
        },
    }
}
export default connect(null,mapDispatchToProps)(MoreOption);