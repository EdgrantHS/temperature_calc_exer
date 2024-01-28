import './Pemilihan.css';
import React from 'react';
import TempConvert from './TempConvert';
import CurrConvert from './CurrConvert';
import Porto from './Porto';
import Page from './Page'; 
import Navbar from './Navbar';

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
      <div>
        <Navbar handleBalik={this.handleBalik} handlePilihSuhu={this.handlePilihSuhu} handlePilihCurrency={this.handlePilihCurrency} handlePorto={this.handlePorto}/>
        {this.state.pilihan === 0 ? 
          <Page handlePilihSuhu={this.handlePilihSuhu} handlePilihCurrency={this.handlePilihCurrency} handlePorto={this.handlePorto}/>
        :
        this.state.pilihan === 1 ?
          <TempConvert back={this.handleBalik}/>
        :
        this.state.pilihan === 2 ?
          <CurrConvert back={this.handleBalik}/>
        :
          <Porto back={this.handleBalik}/>
        }
      </div> 
    )
  }
}

export default Pemilihan;