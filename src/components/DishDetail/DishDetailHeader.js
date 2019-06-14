import React, { Component } from 'react'
import { Button } from 'antd';
import './DishDetailHeader.scss'

export default class DishDetailHeader extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <div className="row">
                <Button type="primary" block className="button-1">
                    Dish detail 
                </Button>
                <Button type="primary" block className="button-2">
                    Dish detail 
                </Button>
                    {/* <button type="button" className="btn w-50 font-weight-bold py-1" style={{backgroundColor:'#4A4A4A', color:'white'}}>
                        Dish detail 
                    </button>  
                    <button type="button" className="btn w-50 font-weight-bold py-1" style={{backgroundColor:'#D2D2D2'}}>
                        Dish's feedback
                    </button>   */}
                </div>
            </div>
        )
    }
}
