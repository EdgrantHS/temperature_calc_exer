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
      <div className="container-fluid p-3 g-4">
        <div className="text-center h1 mb-2 bg-light pb-2 edge-round">Information</div>
        <hr />
          <img src={process.env.PUBLIC_URL + '/nikolas.png'} alt="FOTO TWTW" className='shadow d-block img-fluid rounded mx-auto' style={{ "max-width": '30%' }}/>
          <hr />
      
          <div className="container-md px-4">
            <div className="row text-center gx-5">
              <div className="col-md-5">
                <div className="p-4 my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>Nama Saya Edgrant Henderon Suryajaya</b></p>
                  <p>Saya Mungkin IPK-4 <br />
                  Mungkin juga gak</p>
                  <p>Saya Tekkom-2022</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="p-4 my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>About this website</b></p>
                  <p>Saya menggunakan react dan bootstrap karena saya belum bisa tailwind dan udah pernah pake react</p>
                  <p>Harusnya page ini pake router Tapi sementara pake cara illegal</p>
                </div>
              </div>
            </div>

            <div className="row text-center gx-5">
              <div className="col-md-8">
                <div className="p-4 my-2 bg-danger rounded text-white shadow">
                  <p className="lead"><b>Infrastruktur Page</b></p>
                  <p>Seperti sebelumnya saya bilang, harusnya pake router untuk pindah page, tapi saya menggunakan conditional, kurang baik metodenya untuk render page</p>
                  <p>Kalau dilihat, page ini tidak bisa back memakai toolbar browser, hanya bisa back menggunakan button back di bawah page. Itu salah satu dampak tidak menggunakan router</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 my-2 bg-danger rounded text-white shadow">
                  <p className="lead"><b>Responsive / Adaptive page</b></p>
                  <p>Page ini responsive dan adaptive sesuai dengan screen size</p>
                  <p>Jika menggunakan mobile, atau device lain, content page akan menyesuaikan</p>
                </div>
              </div>
            </div>

            <div className="row text-center gx-5">
              <div className="col-md-12">
                <div className="pt-3 pb-1 my-2 bg-success rounded text-white shadow">
                  <p className="lead"><b>Terima Kasih</b></p>
                  <p>saya ingin berterima kasih pada beberapa orang</p>
                </div>
              </div>
            </div>
            
            <div className="row text-center gx-5">
              <div className="col-md-4">
                <div className="p-4 my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Edgrant</b></p>
                  <p>Saya ingin berterima kasih pada edgrant karena telah membuat website saya</p>
                  <p>Tanpa Edgrant, tidak ada website ini. Menurut saya, edgrant orang yang paling membantu dalam pembuatan website ini</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Bang Dio dan Bang Bintang</b></p>
                  <p>Saya ingin berterima kasih pada Bang Dio dan bang Bintang karena telah menonton saya membaut website di lab</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Gio, Nikolas, Wendy, Satrio</b></p>
                  <p>Saya ingin berterima kasih pada mereka karena sudah saya menggunakan fotonya</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="p-4 my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Windiarta</b></p>
                  <p>Saya ingin berterima kasih pada kakak saya, karena telat menyuruh saya belajar webdev</p>
                </div>
              </div>
            </div>
          <hr />
          <div className="text-center h2 mb-2 bg-light pb-2 edge-round">Soal Teori</div>
            <div className="row text-center g-5">
              <div className="col-md-3">
                <div className="p-4 my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>Apa itu Framework</b></p>
                  <p>Alat yang membantu penulisan kode agar terstandardisasi</p>
                  <p>Framwork js membantu pengaturan logika website dengan konsisten</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-4 my-2 bg-success rounded text-white shadow">
                  <p className="lead"><b>SQL & noSQL</b></p>
                  <p>SQL data disimpan dalam bentuk tabel, jadi ada index. noSQL data tidak dalam berbentuk tabel, bisa graph utk menggambarkan relasi, key-value, atau yang lain</p>
                  <p>SQL lebih baik untuk data yang terstruktur, noSQL lebih baik untuk data yang tidak terstruktur</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 my-2 bg-danger rounded text-white shadow">
                  <p className="lead"><b>API</b></p>
                  <p>API adalah perantara server(backend, tempat data disimpan dan diproses) dan client(frontend, tempat user melihat data). API ada standardnya sendiri untuk mempermudah penukaran data FE-BE, salah satunya RESTFUL </p>
                  <p>API very hot</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="p-4 my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>HTTP</b></p>
                  <p>HTTP adalah protocol untuk mengirim text pada sebuah jaringan. HTML dikirim menggunakan HTTP yang akan dirender oleh browser</p>
                  <p>Jenisanya ada GET, POST, DELETE, dan banyak lagi. Tadi di kotak API ada disebut RESTFUL. pada standard itu, GET utk ambil data, POST utk mengirim/modif data, DELETE untuk menghilangkan data.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-4 my-2 bg-secondary rounded text-white shadow">
                  <p className="lead"><b>Git</b></p>
                  <p>git adalah version control, github adalah website microsoft agar ada gui dan colaborasi untuk git</p>
                  <p>commandnya yang biasa diggunakan ada init, add, commit, push, pull, branch, checkout, revert</p>
                </div>
              </div>
  
            </div>

          </div>

      
       
        <hr />
        <div className="d-block text-center py-5">
          <button className='btn btn-secondary' onClick={this.props.back}>Back</button>
        </div>
      </div>
    );
  }
}

export default CurrConvert;
