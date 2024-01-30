import './TempConvert.css';
import React from 'react';

class TempConvert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      suhu: 0,
      sumber: 'celcius',
      tujuan: 'celcius',
      hasil: 0,

      renderedSuhu: 0,
      renderedSumber: 'celcius',
      renderedTujuan: 'celcius',
      renderedHasil: 0
    }

    this.calculate = this.calculate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSuhu = this.handleChangeSuhu.bind(this);
    this.handleChangeSumber = this.handleChangeSumber.bind(this);
    this.handleChangeTujuan = this.handleChangeTujuan.bind(this);
    this.handleCopy = this.handleCopy.bind(this);
    this.renderElement = this.renderElement.bind(this);
  }

  
  handleChangeSuhu = (event) => {
    this.setState({
      suhu: event.target.value,
    });
  }

  handleChangeSumber (event){
    this.setState({
      sumber: event.target.value,
    });
  }

  handleChangeTujuan (event){
    this.setState({
      tujuan: event.target.value,
    });
  }

  renderElement(){
    this.setState({
      renderedSuhu: this.state.suhu,
      renderedSumber: this.state.sumber,
      renderedTujuan: this.state.tujuan,
      renderedHasil: this.state.hasil
    });
  }

  handleSubmit(event){
    event.preventDefault();
    this.calculate();
  }

  handleCopy(){
    const { renderedHasil } = this.state;
    navigator.clipboard.writeText(renderedHasil.toString());
  }

  calculate(){
    let suhu = this.state.suhu;
    let sumber = this.state.sumber;
    let tujuan = this.state.tujuan;
    let hasil = 1;

    if(sumber === 'celcius'){
      if(tujuan === 'celcius'){
        hasil = suhu;
      }else if(tujuan === 'ferenheit'){
        hasil = (suhu * 9/5) + 32;
      }else if(tujuan === 'kelvin'){
        hasil = Number(suhu) + 273.15;
      }
    }else if(sumber === 'ferenheit'){
      if(tujuan === 'celcius'){
        hasil = (suhu - 32) * 5/9;
      }else if(tujuan === 'ferenheit'){
        hasil = suhu;
      }else if(tujuan === 'kelvin'){
        hasil = (suhu - 32) * 5/9 + 273.15;
      }
    }else if(sumber === 'kelvin'){
      if(tujuan === 'celcius'){
        hasil = suhu - 273.15;
      }else if(tujuan === 'ferenheit'){
        hasil = (suhu - 273.15) * 9/5 + 32;
      }else if(tujuan === 'kelvin'){
        hasil = suhu;
      }
    }

    this.setState({
      hasil: hasil
    }, this.renderElement);
  }

  render()  {
    return (
      <div className="container p-3 g-4">
        <div className="text-center h1 mb-2 bg-bar p-2 text-white edge-round">Temperature Converter GIO</div>
        <hr />

        <div className="row">
          <div className="col-md-6 mb-3"><div className="bg-container px-4 pb-2 pt-3 text-white shadow edge-round">
            <div className="text-center h3 bg-bar p-3 very-round">Input Temperature</div>
            <hr />

            <form onSubmit={this.handleSubmit}>
              <div class="form-group row pt-2">
                <label for="inputSuhu" class="col-sm-5 col-form-label">Suhu</label>
                <div class="col-sm-7">
                  <input type="number" class="form-control" id="inputSuhu" placeholder="Suhu" onChange={this.handleChangeSuhu} />
                </div>
              </div>
              
              <fieldset class="form-group" onChange={this.handleChangeSumber}>
                <div class="row">
                  <legend class="col-form-label col-sm-5 pt-0">Sumber</legend>
                  <div class="col-sm-7">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="radio" name="gridSumber" 
                        id="gridSumber1" value="celcius" 
                        checked={this.state.sumber === 'celcius'} />
                      <label class="form-check-label" for="gridSumber1">
                        Celcius
                      </label>
                    </div>
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="radio" name="gridSumber" 
                        id="gridSumber2" value="ferenheit" 
                        checked={this.state.sumber === 'ferenheit'} />
                      <label class="form-check-label" for="gridSumber2">
                        Ferenheit
                      </label>
                    </div>
                    <div class="form-check disabled">
                      <input 
                        class="form-check-input" 
                        type="radio" name="gridSumber" 
                        id="gridSumber3" value="kelvin" 
                        checked={this.state.sumber === 'kelvin'} />
                      <label class="form-check-label" for="gridSumber3">
                        Kelvin
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset class="form-group" onChange={this.handleChangeTujuan}>
                <div class="row">
                  <legend class="col-form-label col-sm-5 pt-0">Tujuan</legend>
                  <div class="col-sm-7">
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="radio" 
                        name="gridTujuan" 
                        id="gridTujuan4" 
                        value="celcius" 
                        checked={this.state.tujuan === 'celcius'} />
                      <label class="form-check-label" for="gridTujuan4">
                        Celcius
                      </label>
                    </div>
                    <div class="form-check">
                      <input 
                        class="form-check-input" 
                        type="radio" 
                        name="gridTujuan" 
                        id="gridTujuan5" 
                        value="ferenheit" 
                         checked={this.state.tujuan === 'ferenheit'} />
                      <label class="form-check-label" for="gridTujuan5">
                        Ferenheit
                      </label>
                    </div>
                    <div class="form-check disabled">
                      <input 
                        class="form-check-input" 
                        type="radio" 
                        name="gridTujuan" 
                        id="gridTujuan6" 
                        value="kelvin"  
                         checked={this.state.tujuan === 'kelvin'} />
                      <label class="form-check-label" for="gridTujuan6">
                        Kelvin
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <hr />
              <div class="form-group row">
                <div class="col-sm-12 pt-2 ">
                  <button type="submit" class="btn btn-primary btn-block shadow">Calculate</button>
                </div>
              </div>
            </form>

          </div></div>  

          <div className="col-md-6"><div className="bg-output  p-3 text-white shadow edge-round">
            <div className="text-center h3 bg-bar p-3 very-round">Output Temperature</div>
            <hr />

            <div className="lead text-center">
              <b>From:</b> <br /> 
              {this.state.renderedSuhu} {this.state.renderedSumber} <br />
              <hr />
              <b>To:</b> <br />
              {this.state.renderedHasil} {this.state.renderedTujuan}
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

export default TempConvert;
