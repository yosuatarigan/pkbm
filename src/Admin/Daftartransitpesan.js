import React from 'react';
import CardTransitpesan from './CardTransitpesan';

class Transitpesan extends React.Component {
    constructor() {
        super()
        this.state = {
          transitpesan: [],
          nama: '',
          pesankritik: ''
        }
      }

      componentDidMount() {
        fetch('https://pkbm-hanuba-api.herokuapp.com/transitpesan')
          .then(response => response.json())
          .then(data => this.setState({ transitpesan: data }))
      }

      onsubmityes= (nama,pesankritik) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/pesanmasuk', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: nama,
            pesankritik: pesankritik
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(()=>this.onsubmitno(nama))
        .then(alert('Pesan sudah ditambahkan '))
        .then(()=>this.componentDidMount())
      }

      onsubmitno= (nama) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/deletetransitpesan', {
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
            <div className="pa2">
                <div className="overflow-auto">
                    <table className="f6 w-100 mw8 center" cellspacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="fw6 tl pa3 bg-white">Name</th>
                                <th className="fw6 tl pa3 bg-white">Pesan dan Kritik</th>
                                <th className="fw6 tl pa3 bg-white">Konfirmasi</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            {this.state.transitpesan.map((user, i) => {
                                return (
                                    <CardTransitpesan
                                        key={i}
                                        nama={this.state.transitpesan[i].nama}
                                        pesankritik={this.state.transitpesan[i].pesankritik}
                                        onyes = {this.onsubmityes}
                                        onno = {this.onsubmitno}
                                    />
                                );
                            })}

                        </tbody>
                    </table>
                </div>





            </div>
        );
    }
}

export default Transitpesan;