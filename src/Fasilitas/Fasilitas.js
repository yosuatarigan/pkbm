import React from 'react';
import CardFasilitas from './CardFasilitas';
import Perpustakaan1 from '../image/perpustakaan.jpeg';
import Perpustakaan2 from '../image/dipojokbaca.jpg';
import belajarmusik from '../image/alatmusik.jpeg';
import keterampilan from '../image/keterampilan.jpeg';
import jahit from '../image/jahit.jpeg';
const Fasilitas = () => {
  return (
    <div className="pv2 black bg-washed-green">
      <p className=" tc f2"> Fasilitas</p>
      
      


      <section className="mw7 center avenir">
        
      <CardFasilitas name={'1. Perpustakaan'} gambar1={Perpustakaan1}/>
      <CardFasilitas name={'2. Komputer'}/>
      <CardFasilitas name={'3. Alat Musik'} gambar1={belajarmusik}/>
      <CardFasilitas name={'4. Belajar Keterampilan'} gambar1={keterampilan}/>
      <CardFasilitas name={'5. Belajar Kewirausahaan'} gambar1={jahit}/>
      <CardFasilitas name={'6. Pojok Baca di Klinik Medica kwala Bekala'} gambar1={Perpustakaan2}/>




       
      </section>
    </div>
  );
}

export default Fasilitas;