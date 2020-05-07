import React from 'react';


const CardTentor = ({nama,icon,telepon}) => {
    return (
        <div className=" tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow ">
            <img src={icon} width='100px' height='100px' alt="tentor" />
            <div>
                <p className="f3">{nama}</p>
                <p className="f3">{telepon}</p>
            </div>
        </div>
    );
}

export default CardTentor;