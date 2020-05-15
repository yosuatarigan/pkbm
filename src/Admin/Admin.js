import React from 'react';
import axios from 'axios';
import CardTentor from './CardTentor';
import Transit from './transit';
import DaftarAlumni from './DaftarAlumni';
import './Admin.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      tentor: [],
      nama: '',
      detail: ''
    }
  }

  onNameChange = (event) => {
    this.setState({ nama: event.target.value })
  }

  onDetailChange = (event) => {
    this.setState({ detail: event.target.value })
  }


  componentDidMount() {
    fetch('https://pkbm-hanuba-api.herokuapp.com/tentor')
      .then(response => response.json())
      .then(data => this.setState({ tentor: data }))
  }

  


  onsubmittentor = () => {
    fetch('https://pkbm-hanuba-api.herokuapp.com/registertentor', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama: this.state.nama,
        telepon: this.state.detail
      })
    })
      .then(response => response.json())
      .then(() => this.componentDidMount())
  }

  ondelete= (nama) => {
    fetch('https://pkbm-hanuba-api.herokuapp.com/deletetentor', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nama: nama
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(()=>this.componentDidMount())
  }



  render() {
    return (
      <div className="tc">
        <p className="tc f2 b black">HALAMAN ADMIN PKBM HANUBA</p>

        <article className="bg-light-green br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <main className="pa4 black-80">

            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0">Tambah tentor</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 " >Nama</label>
                <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent   w-100"

                  type="text" name="nama" id="name" />
              </div>

              <div className="mt3">
                <label className="db fw6 lh-copy f6">Detail </label>
                <input onChange={this.onDetailChange} className="b pa2 input-reset ba bg-transparent   w-100"

                  type="text" name="tahunajaran" id="password" />
              </div>

              
            </fieldset>
            <div className="">
              <input onClick={this.onsubmittentor} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
            </div>
          </main>
        </article>
       
        <p className="tc f4 b black">Daftar Tentor PKBM HANUBA</p>
        <div className="pa3">
          <div className="overflow-auto">
            <table className="f6 w-100 mw8 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">Name</th>
                  <th className="fw6 tl pa3 bg-white">Detail</th>
                  <th className="fw6 tl pa3 bg-white">Action</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {this.state.tentor.map((user, i) => {
                  return (
                    <CardTentor
                      key={i}
                      nama={this.state.tentor[i].nama}
                      detail={this.state.tentor[i].telepon}
                      ondelete={this.ondelete}
                    />
                  );
                })}

              </tbody>
            </table>
          </div>

         



        </div>
        <p className="tc f4 b black">Daftar Konfirmasi Alumni PKBM HANUBA</p>
        <Transit/>

        <p className="tc f4 b black">Daftar  Alumni PKBM HANUBA</p>
        <DaftarAlumni/>
        

      </div>
    );
  }
}

export default App;
