import './Pemilihan.css';
import React from 'react';
import TempConvert from './TempConvert';
import CurrConvert from './CurrConvert';
import Porto from './Porto';

class Pemilihan extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pilihan : 0
    }

    this.handlePilihSuhu = this.handlePilihSuhu.bind(this);
    this.handlePilihCurrency = this.handlePilihCurrency.bind(this);
    this.handleBalik = this.handleBalik.bind(this);
    this.handlePorto = this.handlePorto.bind(this);
  }

  handlePilihSuhu(event){
    this.setState({
      pilihan: 1
    });
  }

  handlePilihCurrency(event){
    this.setState({
      pilihan: 2
    });
  }

  handleBalik(event){
    this.setState({
      pilihan: 0
    });
  }
  
  handlePorto(event){
    this.setState({
      pilihan: 3
    });
  }


  render(){
    return(
      (this.state.pilihan === 0) ? 
        <div>
          <div className='bg-title text-center text-white pt-4 mb-5'>
            <p className="h1">Tugas Open Recruitment</p> 
            <p className="h2">Exercise 2024</p> 
            {/* <img src={process.env.PUBLIC_URL + '/gio.png'} alt="GIO KEREN BANGET" className='shadow d-md-block d-none img-fluid rounded mx-auto' style={{ "max-width": '50%' }}/> */}
            <img src={process.env.PUBLIC_URL + '/exer.svg'} alt="Logo Exer" className='shadow d-md-block d-none img-fluid rounded mx-auto my-4' style={{ "max-width": '50%' }}/>
          </div>
          <div className="container text-center bg-container">
            <div className="row py-2">
              <div className="col-md-6 my-2">
                <button className="btn btn-primary btn-block py-2 btn-lg" onClick={this.handlePilihSuhu}>Temperature Calculator</button>
              </div>
              <div className="col-md-6 my-2">
                <button className="btn btn-secondary btn-block py-2 btn-lg" onClick={this.handlePilihCurrency}>Currency Calculator</button>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-12 py-4">
                <button className="btn btn-info btn-lg px-5 shadow" onClick={this.handlePorto}>Portfolio</button>
              </div>
            </div>
        </div>
      </div>
      :
      (this.state.pilihan === 1) ?
        <TempConvert back={this.handleBalik}/>
        :
      (this.state.pilihan === 2) ?
        <CurrConvert back={this.handleBalik}/>
        :
        <Porto back={this.handleBalik}/>
    )
  }
}

export default Pemilihan;