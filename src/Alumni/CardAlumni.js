import React from 'react';


const CardAlumni = ({nama,iconalumni,pekerjaan,tahun}) => {
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow ">
            <img src={iconalumni} width='100px' height='100px' alt="alumni" />
            <div>
                <p className="f3">{nama}</p>
                <p>{pekerjaan}</p>
                <p>Tahun Ajaran : {tahun}</p>
            </div>
        </div>
    );
}

export default CardAlumni;