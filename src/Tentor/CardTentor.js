import React from 'react';
import Febrina from '../image/Febrina.jpeg';
import Petrus from '../image/petrus.jpeg';
import Sari from '../image/sari.jpeg';
import Deviana from '../image/deviana.jpeg';
import Regina from '../image/Regina.jpeg';
import Sopian from '../image/Sopian.jpeg';
import Dortua  from '../image/dortua.jpeg';
import Jontar from '../image/jontar.jpeg';
import Cintia from '../image/cintia.jpeg';
import Manogu from '../image/manogu.jpeg';




const CardTentor = ({nama,icon,telepon}) => {

    if(nama==='Febrina Odelia M S.Sos'){
        icon = Febrina;
    }
    else if(nama==='Petrus K Van Elia Napitupulu SE'){
        icon = Petrus;
    }
    else if(nama==='Sari Nanda Sembiring'){
        icon = Sari;
    }
    else if(nama==='Deviana Helena Surbakti S.Pd'){
        icon = Deviana;
    }
    else if(nama==='Regina Simbolon'){
        icon = Regina;
    }
    else if(nama==='Sopian Nasution S.Pd'){
        icon = Sopian;
    }
    else if(nama==='Dortua Simbolon'){
        icon = Dortua;
    }
    else if(nama==='Jontar Sinaga SE'){
        icon = Jontar;
    }
    else if(nama==='Cintia V Milala'){
        icon = Cintia;
    }
    else if(nama==='Manogu Siahaan S.Pd'){
        icon = Manogu;
    }
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow ">
            <img src={icon} width='200px' height='200px' alt="tentor" />
            <div>
                <p className="f6">{nama}</p>
                <p className="f6">{telepon}</p>
            </div>
        </div>
    );
}

export default CardTentor;