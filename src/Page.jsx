import React from "react";
import './Page.css';

export default class Page extends React.Component {
  render() {
    return(
      <div>
        <div className='bg-title text-left text-white p-4 mb-5 height-title'>
          <img src={process.env.PUBLIC_URL + '/exer.svg'} alt="Logo Exer" className='img-fluid my-5 mx-5' style={{ "width": '50%' }}/>
          <p className="h1-title mx-5 mt-5">Tugas Open Recruitment</p> 
          <p className="h2-title mx-5">Exercise 2024</p> 
          <div className='fixed-bottom'>
            <p className="h3-title mx-5 text-right my-2">
              Made by:
            </p>
            <p className="h3-title mx-5 text-right mb-5">
              Edgrant Henderson Suryajaya
              <br />
              Teknik Komputer 2023
            </p>
          </div>
            
          {/* <img src={process.env.PUBLIC_URL + '/gio.png'} alt="GIO KEREN BANGET" className='shadow d-md-block d-none img-fluid rounded mx-auto' style={{ "max-width": '50%' }}/> */}
          
        </div>
        <div className="container text-center bg-container outer-curve">
          <div className="row py-2">
            <div className="col-md-6 my-2">
              <button className="btn btn-primary btn-block py-2 btn-lg very-curve" onClick={this.props.handlePilihSuhu}>
                <img src={process.env.PUBLIC_URL + '/temperature.svg'} alt="Logo Temperature" className='img-fluid my-5 mx-5' style={{ "width": '50%' }}/>
                <hr className='bg-white'/>
                Temperature Calculator
              </button>
            </div>
            <div className="col-md-6 my-2">
              <button className="btn btn-secondary btn-block py-2 btn-lg very-curve" onClick={this.props.handlePilihCurrency}>
                <img src={process.env.PUBLIC_URL + '/money.svg'} alt="Logo Temperature" className='img-fluid my-5 mx-5' style={{ "width": '50%' }}/>
                <hr className='bg-white'/>
                Currency Calculator
              </button>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-12 py-4">
              <button className="btn bg-button btn-block very-curve btn-lg text-large px-5 shadow text-white border-white" onClick={this.props.handlePorto}>Profile</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}