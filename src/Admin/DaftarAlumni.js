import React from 'react';
import CardAlumni from './CardAlumni';

class Transit extends React.Component {
    constructor() {
        super()
        this.state = {
          alumni: [],
          nama: '',
          pekerjaan: '',
          tahun : ''
        }
      }

      componentDidMount() {
        fetch('https://pkbm-hanuba-api.herokuapp.com/alumni')
          .then(response => response.json())
          .then(data => this.setState({ alumni: data }))
      }

      

      onsubmitdelete= (nama) => {
        fetch('https://pkbm-hanuba-api.herokuapp.com/deletealumni', {
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
                                <th className="fw6 tl pa3 bg-white">Action</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            {this.state.alumni.map((user, i) => {
                                return (
                                    <CardAlumni
                                        key={i}
                                        nama={this.state.alumni[i].nama}
                                        pekerjaan={this.state.alumni[i].pekerjaan}
                                        tahun={this.state.alumni[i].tahun}
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

export default Transit;