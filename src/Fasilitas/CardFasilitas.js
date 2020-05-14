import React from 'react';

const CardFasilitas = ({name,gambar1}) => {
    return (
        <div>
            <h2 className="baskerville fw1 ph3 ph0-l">{name}</h2>
        <article className="bt bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={gambar1} className="db" alt="fasilitas" />
                
                
              </div>
              <div className="w-100 w-60-ns pl3-ns">
              
               
                
              </div>
            </div>
          </a>
        </article>
        </div>

        

    );
}

export default CardFasilitas;