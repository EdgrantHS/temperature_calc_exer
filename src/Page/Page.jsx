import React from "react";
import './Page.css';
// import axios from "axios";

export default class Page extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     apiData: [],
  //   };

  //   this.handleAPI = this.handleAPI.bind(this);
  // }

  // handleAPI = () => {
  //   axios.get('https://catfact.ninja/fact')
  //   .then((response) => {
  //     this.setState({ apiData: response.data.fact});
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // }

  // componentDidMount() {
  //   this.handleAPI();
  //   console.log("data: " + this.state.apiData);
  // }

  render() {
    return(
      <div>
        {/* <h1>{this.state.apiData}</h1> */}
        <div className='bg-title text-white p-4 mb-5 height-title'>
          {/* screen mobile */}
          <p className="h2-title mx-5 mt-5 d-md-none text-center">Exersice 2024</p>
          <p className="h3-title mx-5 d-md-none text-center">Tugas Open Recruitment</p>
          <div className="text-center">
            <img src={process.env.PUBLIC_URL + '/exer.svg'} alt="Logo Exer" className='img-fluid my-5 mx-5 d-md-none text-center' style={{ "width": '50%' }}/>
          </div>

          <div className='fixed-bottom d-md-none text-center'>
            <p className="h3-title mx-5 my-2">
              Made by:
            </p>
            <p className="h3-title mx-5 mb-5">
              Edgrant Henderson Suryajaya
              <br />
              Teknik Komputer 2023
            </p>
          </div>

          {/* screen desktop */}
          <img src={process.env.PUBLIC_URL + '/exer.svg'} alt="Logo Exer" className='img-fluid my-5 mx-5 d-none d-md-block' style={{ "width": '50%' }}/>
          <p className="h1-title mx-5 mt-5 d-none d-md-block">Tugas Open Recruitment</p> 
          <p className="h2-title mx-5 d-none d-md-block">Exercise 2024</p> 
          <div className='fixed-bottom'>
            <p className="h3-title mx-5 text-right my-2 d-none d-md-block">
              Made by:
            </p>
            <p className="h3-title mx-5 text-right mb-5 d-none d-md-block">
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
              <button className="btn border-white btn-block py-2 btn-lg very-curve text-white bg-temp" onClick={this.props.handlePilihSuhu}>
                <img src={process.env.PUBLIC_URL + '/temperature.svg'} alt="Logo Temperature" className='img-fluid my-5 mx-5 ' style={{ "width": '50%' }}/>
                <hr className='bg-white'/>
                Temperature Calculator
              </button>
            </div>
            <div className="col-md-6 my-2">
              <button className="btn border-white btn-block py-2 btn-lg very-curve text-white bg-curr" onClick={this.props.handlePilihCurrency}>
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