import React, { Component } from 'react';
import CardAlumni from './CardAlumni';
import iconalumni from '../image/2.jpg';

const list = [{ nama: 'Yosua Tarigan', icon: iconalumni, jurusan: 'Sistem Informasi' },
{ nama: 'Sarah Juliana', icon: iconalumni, jurusan: 'Sistem Komputer' },];





class Alumni extends Component {
    constructor(){
        super()
        this.state = {
          alumni:[],
          nama:'',
          tahun:'',
          pekerjaan:''
        }
      }

      onNameChange = (event) => {
        this.setState({nama: event.target.value})
      }
    
      onTahunChange = (event) => {
        this.setState({tahun: event.target.value})
      }
    
      onPekerjaanChange = (event) => {
        this.setState({pekerjaan: event.target.value})
      }

    componentDidMount(){
        fetch('https://pkbm-hanuba-api.herokuapp.com/alumni')
          .then(response => response.json())
          .then(data => this.setState({alumni:data}))
      }


      onsubmitalumni= () => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/registertransit', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: this.state.nama,
            tahun: this.state.tahun,
            pekerjaan: this.state.pekerjaan
          })
        })
        .then(response => response.json())
        .then(alert('respon suah dikirim. '))
        .then(()=>this.componentDidMount())
      }

    // onsubmitalumni = ()=> {
    //     console.log(this.state.nama, this.state.tahun, this.state.pekerjaan)
    // }

    render() {
        return (
            <div className='tc'>
                <p className="f1 bold">ALUMNI YAYASAN PKBM HANUBA</p>

                <article className="bg-light-green br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                    <main className="pa4 black-80">

                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 " >Nama</label>
                                <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent   w-100"

                                    type="text" name="nama" id="name" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 " >Pekerjaan</label>
                                <input onChange={this.onPekerjaanChange} className="pa2 input-reset ba bg-transparent  w-100"

                                    type="text" name="pekerjaan" id="email-address" />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Tahun Ajaran</label>
                                <input onChange={this.onTahunChange} className="b pa2 input-reset ba bg-transparent   w-100"

                                    type="text" name="tahunajaran" id="password" />
                            </div>
                        </fieldset>
                        <div className="">
                            <input onClick={this.onsubmitalumni} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                    </main>
                </article>
                
                {this.state.alumni.map((user, i) => {
                    return (
                        <CardAlumni
                            key={i}
                            nama={this.state.alumni[i].nama}
                            iconalumni={this.state.alumni[i].icon}
                            pekerjaan={this.state.alumni[i].pekerjaan}
                            tahun ={this.state.alumni[i].tahun}
                        />
                    );
                })}

            </div>
        );
    }
}






export default Alumni;