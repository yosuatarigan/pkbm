import React, { Component } from 'react';
import CardTentor from './CardTentor';
import fototentor from '../image/tentor.jpg';



class Tentor extends Component   {
    constructor() {
        super()
        this.state = {
          listtentor: []
        }
      }


      componentDidMount(){
        fetch('https://pkbm-hanuba-api.herokuapp.com/tentor')
          .then(response => response.json())
          .then(data => this.setState({listtentor:data}))
      }

    render(){
        return (
            <div className="tc">
                <p className="f1">Tentor Yayasan PMBK Hanuba</p>
                {this.state.listtentor.map((user, i) => {
                    return (
                        
                        <CardTentor
                            key={i}
                            nama={this.state.listtentor[i].nama}
                            telepon={this.state.listtentor[i].telepon}
                        />
                       
                    );
                })}
            </div>
        );
    }
}
    


export default Tentor;