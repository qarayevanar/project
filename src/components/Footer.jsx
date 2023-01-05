import React,{Component} from "react";
import fimg from '../img/pay.png'

class Footer extends Component {
   render(){
    return (

      <div className="container py-3">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-sm-6 col-md-3">
            <h1>Get In Touch</h1>
            <div className="d-flex justify-content-between ">
                <div className="me-3">
                  <i class="fa-solid fa-house text-warning"></i>
                  </div>
                <div className="mb-2">
                  <h6> Horse Carrefour 1487 Rocky  Horse Arlington,  TX 16819 United</h6>
                </div>
            </div>
            <div className="d-flex  ">
                <div className="me-3">
                <i class="fa-solid fa-phone text-warning"></i>
                  </div>
                <div>
                  <h6>1-661-395-1234</h6>
                </div>
            </div>
            <div className="d-flex  ">
                <div className="me-3">
                <i class="fa-solid fa-blender-phone text-warning"></i>
                  </div>
                <div>
                  <h6>1-661-395-1234</h6>
                </div>
            </div>
            <div className="d-flex  ">
                <div className="me-3">
                <i class="fa-regular fa-envelope text-warning"></i>
                  </div>
                <div>
                  <h6>support@pressmart.com</h6>
                </div>
            </div>
            <div className="d-flex ">
                <div className="me-3">
                  <i class="fa-regular fa-clock text-warning"></i>
                </div>
                <div>
                  <h6>Mon-Fri/9.00-6.00 PM</h6>
                </div>
            </div>
            
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3  text-center">
            <h4 className="fw-bold">Static Link</h4>
            <p className="fp">About Us</p>
            <p className="fp">Store Location</p>
            <p className="fp">Contact Us</p>
            <p className="fp">Shippping & Delivery</p>
            <p className="fp">Latest News</p>
            <p className="fp">Our Sitemap</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 text-center">
          <h4 className="fw-bold">Our Service</h4>
            <p className="fp">Privacy Policy</p>
            <p className="fp">Terms of Sale</p>
            <p className="fp">Customer Service</p>
            <p className="fp">Delivery Information</p>
            <p className="fp">Payments</p>
            <p className="fp">Saved Cards</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 mt-3 text-center">
          <h4 className="fw-bold">My Account</h4>
            <p className="fp">My Account</p>
            <p className="fp">My Shop</p>
            <p className="fp">My Cart</p>
            <p className="fp">Checkout</p>
            <p className="fp">My Wishlist</p>
            <p className="fp">Tracking Order</p>
          </div>
        </div>
          <hr />
        <div className="row my-1 ">
          <div className="col-12 col-sm-6 ">
            <p className=" align-items-center mt-2">© 2022 presslayouts.com. All Rights Reserved.</p>
          </div>
          <div className="col-12 col-sm-6  d-flex justify-content-end  align-items-center">
              <img src={fimg} alt="" />
          </div>
        </div>
      </div>
    )
   }
}

export default Footer