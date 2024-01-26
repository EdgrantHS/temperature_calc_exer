import './CurrConvert.css';
import React from 'react';
import currencyapi from '@everapi/currencyapi-js'

const API_KEY = 'cur_live_rhBV17AZGtpuROrvnr68pVwfnVRuxjnH0rN2bK1O';

const options = [
  'USD',
  'EUR',
  'JPY',
  'GBP',
  'AUD',
  'CAD',
  'CHF',
  'CNY',
  'HKD',
  'NZD',
  'SEK',
  'KRW',
  'IDR'
]

class CurrConvert  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uang: 0,
      sumber: 'USD',
      tujuan: 'USD',
      exchangeRateSumber: 0,
      exchangeRateTujuan: 0,
      hasil: 0
    }

    this.populateDropDown = this.populateDropDown.bind(this);
    this.handleDropdownChangeSumber = this.handleDropdownChangeSumber.bind(this);
    this.handleDropdownChangeTujuan = this.handleDropdownChangeTujuan.bind(this);
    this.handleChangeUang = this.handleChangeUang.bind(this);
    this.handleAPICall = this.handleAPICall.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropdownChangeSumber (event){
    this.setState({sumber: event.target.value});
  }

  handleDropdownChangeTujuan (event){
    this.setState({tujuan: event.target.value});
  }

  handleChangeUang (event){
    this.setState({uang: event.target.value});
  }

  populateDropDown(options){
    return options.map((option) => {
      return <option value={option}>{option}</option>
    })
  }

  handleAPICall(){
    const client = new currencyapi(API_KEY)

    client.latest({
        base_currency: this.state.sumber,
        currencies: this.state.tujuan
    }).then(response => {
        console.log(response)
        this.setState({
          hasil: response.data[this.state.tujuan].value * this.state.uang
        })
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.handleAPICall();
    console.log(this.state);
  }

  render()  {
    return (
      <div className="container p-3 g-4">
        <div className="text-center h1 mb-2 bg-light pb-2 edge-round">Currency Converter GIO</div>
        <hr />

        <div className="row">
          <div className="col-md-6 mb-3"><div className="bg-secondary px-4 pb-2 pt-3 text-white shadow edge-round">
            <div className="text-center h3">Input Currency</div>
            <hr />

            <form onSubmit={this.handleSubmit}>
              <div class="form-group row pt-2">
                <label for="inputSuhu" class="col-sm-5 col-form-label">Uang</label>
                <div class="col-sm-7">
                  <input type="number" class="form-control" id="inputSuhu" placeholder="Nominal" onChange={this.handleChangeUang} />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-5">
                  Sumber
                </div>
                <div className="col-7">
                  <select className="select-style" onChange={this.handleDropdownChangeSumber}>
                    {this.populateDropDown(options)}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-5">
                  Tujuan
                </div>
                <div className="col-7">
                  <select className="select-style" onChange={this.handleDropdownChangeTujuan}>
                    {this.populateDropDown(options)}
                  </select>
                </div>
              </div>

              <hr />
              <div class="form-group row">
                <div class="col-sm-12 pt-2 ">
                  <button type="submit" class="btn btn-primary btn-block shadow">Calculate</button>
                </div>
              </div>
            </form>

          </div></div>  

          <div className="col-md-6"><div className="bg-info p-3 text-white shadow edge-round">
            <div className="text-center h3">Output Currency</div>
            <hr />

            <div className="lead text-center">
              <b>From:</b> <br /> 
              {this.state.uang} {this.state.sumber} <br />
              <hr />
              <b>To:</b> <br />
              {this.state.hasil} {this.state.tujuan}
            </div>
            <hr />

            <div className="text-center py-2">
              <div className="py-4"></div>  
              <div className="py-2"></div>  
              <div className="py-1"></div>  
            
              <button type="button" class="btn btn-block py-2  btn-primary btn-sm shadow" onClick={this.handleCopy}>Copy Hasil</button>
            </div>
          </div></div>  
        </div> 
        <div className="d-block text-center py-5">
          <button className='btn btn-secondary' onClick={this.props.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default CurrConvert;
