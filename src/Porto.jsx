import './Porto.css';
import React from 'react';

class Porto extends React.Component {
  render()  {
    return (
      <div className="container-fluid p-3 g-4 ">
        <div className="text-center h1 mb-2 bg-bar text-white p-2 edge-round">Information</div>
        <hr />
          <img src={process.env.PUBLIC_URL + '/nikolas.png'} alt="FOTO TWTW" className='shadow d-block img-fluid rounded mx-auto' style={{ "max-width": '30%' }}/>
          <hr />
      
          <div className="container-md px-4">
            <div className="row text-center gx-5">
              <div className="col-md-5">
                <div className="p-4 rounded my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>Nama Saya Edgrant Henderon Suryajaya</b></p>
                  <p>Saya Mungkin IPK-4 <br />
                  Mungkin juga gak</p>
                  <p>Saya Tekkom-2022</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="p-4 rounded my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>About this website</b></p>
                  <p>Saya menggunakan react dan bootstrap karena saya belum bisa tailwind dan udah pernah pake react</p>
                  <p>Harusnya page ini pake router Tapi sementara pake cara illegal</p>
                </div>
              </div>
            </div>

            <div className="row text-center gx-5">
              <div className="col-md-8">
                <div className="p-4 rounded my-2 bg-danger rounded text-white shadow">
                  <p className="lead"><b>Infrastruktur Page</b></p>
                  <p>Seperti sebelumnya saya bilang, harusnya pake router untuk pindah page, tapi saya menggunakan conditional, kurang baik metodenya untuk render page</p>
                  <p>Kalau dilihat, page ini tidak bisa back memakai toolbar browser, hanya bisa back menggunakan button back di bawah page. Itu salah satu dampak tidak menggunakan router</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 rounded my-2 bg-danger rounded text-white shadow">
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
              <div className="col-md-3">
                <div className="p-4 rounded my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Edgrant</b></p>
                  <p>Saya ingin berterima kasih pada edgrant karena telah membuat website saya</p>
                  <p>Tanpa Edgrant, tidak ada website ini. Menurut saya, edgrant orang yang paling membantu dalam pembuatan website ini</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 rounded my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Bang Dio dan Bang Bintang</b></p>
                  <p>Saya ingin berterima kasih pada Bang Dio dan bang Bintang karena telah menonton saya membaut website di lab</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 rounded my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Gio, Nikolas, Wendy, Satrio</b></p>
                  <p>Saya ingin berterima kasih pada mereka karena sudah saya menggunakan fotonya</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-4 rounded my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>Windiarta</b></p>
                  <p>Saya ingin berterima kasih pada kakak saya, karena telat menyuruh saya belajar webdev</p>
                </div>
              </div>
            </div>
          <hr />
          <div className="text-center h2 mb-2 bg-bar text-white p-2 edge-round">Soal Teori</div>
            <div className="row text-center g-5">
              <div className="col-md-3">
                <div className="p-4 rounded my-2 bg-info rounded text-white shadow">
                  <p className="lead"><b>Apa itu Framework</b></p>
                  <p>Alat / library yang membantu penulisan kode standar dan terstruktur </p>
                  <p>Dalam JavaScript, framework menyediakan cara kerja untuk membangun dan mengelola aplikasi web</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-4 rounded my-2 bg-success rounded text-white shadow">
                  <p className="lead"><b>SQL & noSQL</b></p>
                  <p>SQL data disimpan dalam bentuk tabel, jadi ada index. noSQL data tidak dalam berbentuk tabel, bisa graph utk menggambarkan relasi, key-value, atau yang lain</p>
                  <p>SQL lebih baik untuk data yang terstruktur, noSQL lebih baik untuk data yang tidak terstruktur</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-4 rounded my-2 bg-danger rounded text-white shadow">
                  <p className="lead"><b>API</b></p>
                  <p>API adalah perantara server(backend, tempat data disimpan dan diproses) dan client(frontend, tempat user melihat data). API ada standardnya sendiri untuk mempermudah penukaran data FE-BE, salah satunya RESTFUL </p>
                  <p>API very hot</p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="p-4 rounded my-2 bg-primary rounded text-white shadow">
                  <p className="lead"><b>HTTP</b></p>
                  <p>HTTP adalah protocol untuk mengirim text pada sebuah jaringan. HTML dikirim menggunakan HTTP yang akan dirender oleh browser</p>
                  <p>Jenisanya ada GET, POST, DELETE, dan banyak lagi. Tadi di kotak API ada disebut RESTFUL. pada standard itu, GET utk ambil data, POST utk mengirim/modif data, DELETE untuk menghilangkan data.</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="p-4 rounded my-2 bg-secondary rounded text-white shadow">
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

export default Porto;
