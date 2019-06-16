import React, { Component } from "react";
import ItemCart from "../../components/ItemCart";

export default class ViewBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }
  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="row px-3 text-center">
                {/* <div className="row px-5 py-3">
                    <i class="fa fa-shopping-basket" style={{ fontSize: "25px" }} />
                    <h5 className="px-2">
                        Your Basket <small class="text-secondary">(5 dishes)</small>
                    </h5>
                </div> */}
              <div data-spy="scroll">
                <div className="wrapper-content">
                  <div className="row my-4">
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                    <div class="col-lg-3 p-0">
                        <ItemCart/>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-end align-items-center">
                  <div className="px-2">
                    <h4>Tổng tiền:</h4>
                  </div>
                  <div className="px-4">
                    <h2>235.000 đ</h2>
                  </div>
                  <button className="btn btn-custom-1 mr-3 font-weight-bold">
                    Purchase
                  </button>
                  <button className="btn btn-custom-2 font-weight-bold">Cancel</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
