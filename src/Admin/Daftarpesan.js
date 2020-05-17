import React from 'react';
import Cardpesan from './Cardpesan';

class Daftarpesan extends React.Component {
    constructor() {
        super()
        this.state = {
          pesan: [],
          nama: '',
          pesankritik: ''
        }
      }

      componentDidMount() {
        fetch('https://pkbm-hanuba-api.herokuapp.com/pesan')
          .then(response => response.json())
          .then(data => this.setState({ pesan: data }))
      }

      

      onsubmitdelete= (nama) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/deletepesan', {
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
                                <th className="fw6 tl pa3 bg-white">Action</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            {this.state.pesan.map((user, i) => {
                                return (
                                    <Cardpesan
                                        key={i}
                                        nama={this.state.pesan[i].nama}
                                        pesankritik={this.state.pesan[i].pesankritik}
                                        ondelete = {this.onsubmitdelete}
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

export default Daftarpesan;