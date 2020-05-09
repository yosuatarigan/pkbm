import React from 'react';
import CardTransit from './CardTransit';

class Transit extends React.Component {
    constructor() {
        super()
        this.state = {
          transit: [],
          nama: '',
          pekerjaan: '',
          tahun : ''
        }
      }

      componentDidMount() {
        fetch('https://pkbm-hanuba-api.herokuapp.com/transit')
          .then(response => response.json())
          .then(data => this.setState({ transit: data }))
      }

      onsubmityes= (nama,pekerjaan,tahun) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/registeralumni', {
          method: 'post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nama: nama,
            tahun: tahun,
            pekerjaan: pekerjaan
          })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .then(()=>this.onsubmitno(nama))
        .then(alert('Alumni sudah ditambahkan '))
        .then(()=>this.componentDidMount())
      }

      onsubmitno= (nama) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/deletetransit', {
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
                                <th className="fw6 tl pa3 bg-white">Pekerjaan</th>
                                <th className="fw6 tl pa3 bg-white">Tahun Ajaran</th>
                                <th className="fw6 tl pa3 bg-white">Konfirmasi</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            {this.state.transit.map((user, i) => {
                                return (
                                    <CardTransit
                                        key={i}
                                        nama={this.state.transit[i].nama}
                                        pekerjaan={this.state.transit[i].pekerjaan}
                                        tahun={this.state.transit[i].tahun}
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

export default Transit;