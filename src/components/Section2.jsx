import React,{Component} from "react";

class Section2 extends Component {
  render(){
    return(
        <div className="container my-5">
          <div className="row g-5 d-flex justify-content-between sec2-main">
            <div className="col-12 col-sm-6 col-md-2 sec2-div">
              <ul >
                <li className="d-flex justify-content-around align-items-center ">
                  <div>
                  <i class="fa-solid fa-truck-fast fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h6>Worldwide Shipping</h6>
                    <p>Order On $70</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-2 sec2-div">
            <ul>
                <li className="d-flex justify-content-around align-items-center">
                  <div>
                  <i class="fa-brands fa-rocketchat fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h6>Customer Review</h6>
                    <p>Get Feedback</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-2 sec2-div">
            <ul>
                <li className="d-flex justify-content-around align-items-center">
                  <div>
                  <i class="fa-regular fa-circle-question fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h6>Online Support</h6>
                    <p>24*7 Hours</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-2 sec2-div">
            <ul>
                <li className="d-flex justify-content-around align-items-center">
                  <div>
                  <i class="fa-regular fa-credit-card fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h6>Secure Payment</h6>
                    <p>Easy Way</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6 col-md-2 sec2-div">
            <ul>
                <li className="d-flex justify-content-around align-items-center">
                  <div>
                  <i class="fa-solid fa-gift fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h6>Special Gifts</h6>
                    <p>Fisrt Order</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Section2 