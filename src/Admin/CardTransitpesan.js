import React from 'react';


const CardTransitpesan = ({nama,pesankritik,onyes,onno}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{pesankritik}</td>
         <td><input onClick={()=>onyes(nama,pesankritik)} type='button' value='Iya' /><input onClick={()=>onno(nama)} type='button' value='Tidak' /></td>
      </tr>
    );
}

export default CardTransitpesan;