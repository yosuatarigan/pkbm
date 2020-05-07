import React from 'react';
import gambar1 from '../image/1.jpg';
import gambar2 from '../image/2.jpg';
import gambar3 from '../image/3.jpg';
import { UncontrolledCarousel } from 'reactstrap';


  

const items = [
    {
      src: gambar1,
      altText: 'Slide 1',
      // caption: 'Slide 1',
      // header: 'Slide 1 Header',
      viewBox: "0 0 800 400",
      key: '1'
    },
    {
      src: gambar2,
      altText: 'Slide 2',
      // caption: 'Slide 2',
      // header: 'Slide 2 Header',
      viewBox: "0 0 800 400",
      key: '2'
    },
    {
      src: gambar3,
      altText: 'Slide 3',
      // caption: 'Slide 3',
      // header: 'Slide 3 Header',
      viewBox: "0 0 800 400",
      key: '3'
    }
  ];

  

const CarouselUtama = ()=>{
    return(
      <div >
        <UncontrolledCarousel items={items}/>
        </div>
    );
}

export default CarouselUtama;