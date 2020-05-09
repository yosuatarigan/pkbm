import React from 'react';


const CardTentor = ({nama,pekerjaan,tahun,onyes,onno}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{pekerjaan}</td>
         <td className="pa3">{tahun}</td>
         <td><input onClick={()=>onyes(nama,pekerjaan,tahun)} type='button' value='Iya' /><input onClick={()=>onno(nama)} type='button' value='Tidak' /></td>
      </tr>
    );
}

export default CardTentor;