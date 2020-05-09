import React from 'react';


const CardAlumni = ({nama,tahun,pekerjaan,ondelete}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{tahun}</td>
         <td className="pa3">{pekerjaan}</td>
         <td><input onClick={()=>ondelete(nama)} type='button' value='HAPUS' /></td>
      </tr>
    );
}

export default CardAlumni;