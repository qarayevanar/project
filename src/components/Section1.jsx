import React, { Component } from 'react';


 class Section1 extends Component {
  render() {
    return (
      <div className="container my-5">
        <div className="row g-5 ">
          <div className=" col-12 col-sm-6 col-md-6 ">
            <div className='sec-start '>
              <div className='p-5 text-white'>
                <h6>Flat Online Deal</h6>
                <h2>Apple Kit's</h2>
                <h1>Ipad Pro Max</h1>
                <p>Only <span>$225.00</span></p>
                <button className='sec1btn'>Shop Now</button>
              </div>
            </div>
          </div> 
          

          <div className="col-12 col-sm-6 col-md-6">
            <div className="row g-5">
            <div className='sec1-mid me-5 text-center '>
              <h6 className='mt-4'>Battery Life</h6>
              <h3>Truly Wireless</h3>
              <p>4GB RAM | 64GB ROM | </p>
            </div>
          
            <div className='sec1-end text-center text-white'>
              <h2 className='mt-4'>For 4K Ultra</h2>
              <h2>Smart HD TV's</h2>
              <p>Safe & Enjoy Life !!</p>
            </div> 
            </div>

          </div>


        </div>
      </div>
    )
  }
}

export default Section1