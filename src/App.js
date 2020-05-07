import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import CarouselWithText from './Carousel/CarouselWithText';
import WellcomeText from './Jumbotron/WellcomeText';
import CardNavs from './Card/CardNavs';
import NoteKegiatan from './Kegiatan/NoteKegiatan';
import Info from './Info/Info';
import Footer from './Footer/Footer';
import Alumni from './Alumni/Alumni';
import Tentor from './Tentor/Tentor';
import Fasilitas from './Fasilitas/Fasilitas';
import 'tachyons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      route: 'home'
    }
  }

  onRouteChange = (data) => {
    this.setState({ route: data })
  }

  render() {
    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} />
        {
          this.state.route === 'home' ?
            <div>
              <div>
                <CarouselWithText />
              </div>
              <WellcomeText />
              <CardNavs onRouteChange={this.onRouteChange} />
              <NoteKegiatan />
              <Info />
            </div>
            : this.state.route === 'alumni' ?
              <div>
                <Alumni /></div>
              : this.state.route === 'tentor' ?
                <div>
                  <Tentor />
                </div>
                : this.state.route === 'info' ?
                  <div>
                    <Info />
                  </div>
                  : this.state.route === 'fasilitas' ?
                    <div>
                      <Fasilitas />
                    </div>
                    : <p>Ini bukan halaman home ataupun alumni</p>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
