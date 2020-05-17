import React from 'react';
import Cardtampil from './Cardtampilpesan';

class Tampilsaran extends React.Component {
    constructor() {
        super()
        this.state = {
            listsaran: []
        }
    }

    componentDidMount() {
        fetch('https://pkbm-hanuba-api.herokuapp.com/pesan')
            .then(response => response.json())
            .then(data => this.setState({ listsaran: data }))
    }

    render() {

        return (
            <div>
                {this.state.listsaran.map((user, i) => {
                    return (
                        <Cardtampil
                            key={i}
                            nama={this.state.listsaran[i].nama}
                            pesankritik={this.state.listsaran[i].pesankritik}
                        />
                    );
                })}
            </div>
        );

    }
}

export default Tampilsaran;