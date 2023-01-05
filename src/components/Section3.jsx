import React,{Component} from "react";
import c1img from '../img/iphone.jpg';
import c2img from '../img/ipadpro.jpg';
import c3img from '../img/tv.jpg';
import c4img from '../img/headear.jpg';
import c1img1 from '../img/watch.jpg';
import c2img2 from '../img/watchse.jpg';
import c3img3 from '../img/laptop.jpg';
import c4img4 from '../img/applehead.jpg';
import c1img1f3 from '../img/headphone.jpg';
import c2img2f3 from '../img/pixel7pro1.jpg';
import c3img3f3 from '../img/10pro.png';
import c4img4f3 from '../img/13pro.jpg';
import { Link } from "react-router-dom";
import banner1 from '../img/Cms09.jpg';
import banner2 from '../img/Cms10.jpg';
import lg from '../img/brand1.png';
import samsung from '../img/brand2.png';
import apple from '../img/brand3.png';
import boss from '../img/brand4.png';
import jbl from '../img/brand5.png';


class Section3 extends Component {
      constructor(){
        super()
        this.state={
          cardOne:c1img,
          cardTwo:c2img,
          cardThree:c3img,
          cardFour:c4img,
          title1:"Apple ",
          text1:"Iphone 13 Pro",
          price1:"$1,599.00",
          title2:"Apple ",
          text2:"Ipad Pro",
          price2:"$1,199.00",
          title3:"Sony",
          text3:"TV 4K Ultra HD",
          price3:"$1100.00-$1200.00",
          title4:"Sony",
          text4:"wh-1000xm4",
          price4:"$500.00"
          
        }
      }

      changeDataOne=()=>{
        this.setState({
          cardOne:c1img,
          cardTwo:c2img,
          cardThree:c3img,
          cardFour:c4img,
          title1:"Apple ",
          text1:"Iphone 13 Pro",
          price1:"$1,599.00",
          title2:"Apple ",
          text2:"Ipad Pro",
          price2:"$1,199.00",
          title3:"Sony",
          text3:"TV 4K Ultra HD",
          price3:"$1100.00-$1200.00",
          title4:"Sony",
          text4:"wh-1000xm4",
          price4:"$500.00"
        })
      }

      changeDataTwo=()=>{
        this.setState({
          cardOne:c1img1,
          cardTwo:c2img2,
          cardThree:c3img3,
          cardFour:c4img4,
          title1:"Apple",
          text1:"Watch Series 8 ",
          price1:"$399.00-599.00",
          title2:"Apple",
          text2:"Watch Series SE",
          price2:"$299.00",
          title3:"Asus",
          text3:"Laptop ZenBook",
          price3:"$1100.00-$1200.00",
          title4:"Apple",
          text4:"AirPods Max",
          price4:"$549.00"
        })
      }

      changeDataThree=()=>{
        this.setState({
          cardOne:c1img1f3,
          cardTwo:c2img2f3,
          cardThree:c3img3f3,
          cardFour:c4img4f3,
          title1:'Google',
          text1:"Pixel Buds Pro",
          price1:"$199.99",
          title2:"Google",
          text2:"Pxel 7 Pro",
          price2:"$700.00",
          title3:"OnePlus",
          text3:"10 Pro",
          price3:"$780.00",
          title4:"Xiaomi",
          text4:"13 Pro",
          price4:"$899.00"
        })
      }
  render(){
    return (
       <div className="container">
          <div className="row ">
              <div className="row d-flex justify-content-between">
              <div className="col-12 col-sm-6 col-md-3 ">
                <h5 className="h5">Latest Products</h5>
              </div>
              <div className="col-12 col-sm-6 col-md-9 d-flex justify-content-end">
                <ul className="ul-btn">
                  <li className="">
                    <button  onClick={this.changeDataOne} type="button">Recent Products</button>
                  </li>
                  <li>
                    <button onClick={this.changeDataTwo} type="button">Featured Products</button>
                  </li>
                  <li>
                    <button  onClick={this.changeDataThree}  type="button">Sale Products</button>
                  </li>
                  <li>
                    <Link className="link" to="products"   >All Products</Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="row my-2">
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card " style={{width: '16rem'}}>
                      <img src={this.state.cardOne} className="card-img-top" alt="..." />
                      <div className="card-body text-center lh-1">
                        <h6 className="card-title">{this.state.title1}</h6>
                        <p className="card-text">{this.state.text1}</p>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <p>{this.state.price1}</p>
                        <a href="#re" className="btn btn-light">Add To card</a>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                    <div className="card " style={{width: '16rem'}}>
                      <img src={this.state.cardTwo} className="card-img-top" alt="..." />
                      <div className="card-body text-center lh-1">
                        <h6 className="card-title">{this.state.title2}</h6>
                        <p className="card-text">{this.state.text2}</p>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <p>{this.state.price2}</p>
                        <a href="#re" className="btn btn-light">Add To card</a>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                <div className="card " style={{width: '16rem'}}>
                      <img src={this.state.cardThree} className="card-img-top" alt="..." />
                      <div className="card-body text-center lh-1">
                        <h6 className="card-title">{this.state.title3}</h6>
                        <p className="card-text">{this.state.text3}</p>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <p>{this.state.price3}</p>
                        <a href="#re" className="btn btn-light">Add To card</a>
                      </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3">
                <div className="card " style={{width: '16rem'}}>
                      <img src={this.state.cardFour} className="card-img-top" alt="..." />
                      <div className="card-body text-center lh-1">
                        <h6 className="card-title">{this.state.title4}</h6>
                        <p className="card-text">{this.state.text4}</p>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-warning"></i>
                        <i class="fa-solid fa-star text-secondary"></i>
                        <p>{this.state.price4}</p>
                        <a href="#re" className="btn btn-light">Add To card</a>
                      </div>
                    </div>
                </div>
              </div>

              <div className="row my-4">
                <div className="col-12 col-sm-12 col-md-6">
                    <img src={banner1} alt="" />
                    
                </div>
                <div className="col-12 col-sm-12 col-md-6">
                    <img src={banner2} alt="" />
                </div>
              </div>

              <div className="row my-5">
                <div className="col-6 col-sm-4 col-md-2">
                  <img src={lg} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-2">
                <img src={samsung} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-2">
                <img src={apple} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-2">
                <img src={boss} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-2">
                <img src={jbl} alt="" />
                </div>
                <div className="col-6 col-sm-4 col-md-2">
                <img src={apple} alt="" />
                </div>
              </div>
          </div>
       </div>
    )
  }
}

export default Section3