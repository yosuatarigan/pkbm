import React from 'react';
import Program from './program';
import VisidanMisi from './visidanmisi';
import Kritik from './kritikdansaran';
import Tampilpesan from './Tampilkritikdansaran';

const Info = () => {
    return (

        <div>
            <VisidanMisi/>
            <Program/>
        <section class="center bg-light-gray pa3 ph5-ns">

            <article class="cf ">

                <div class="fl w-50 bg-near-white tc">
                    <img src="http://greenville.ancorathemes.com/wp-content/uploads/2017/03/image-36-411x552.png" width="max" height="auto" alt="d" />
                </div>
                <div className="pl-3 fl w-50 bg-light-gray  dib v-mid">
                    <p className="  f3 ">Anda punya pertanyaan???</p>
                    <p className="  f4 blue">Hubungi kami</p>

                    <p><b>Alamat</b> : 
                    Jl. A.H Nasution Gg Jadi No 18 B Simpang Pos.
                    Kelurahan Kwala Bekala, Kecamatan Medan Johor, Sumatera Utara
                    </p>

                    <p><b> Contact Person</b> : 
                    Jontar Sinaga : 08126572348<br/>
                    Sarah Sihombing : 082150915781
                    </p>

                    <p><b> Jam Operasi Sekolah</b> : 
                    Senin - Sabtu<br/>
                    08.00 Wib - 19.00 Wib
                    </p>
                    
                </div>
            </article>
        </section>
        
        <Kritik/>
        <hr/>
        <Tampilpesan/>
        </div>


    );
}

export default Info;