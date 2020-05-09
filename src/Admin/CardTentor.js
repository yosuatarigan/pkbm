import React from 'react';


const CardTentor = ({nama,telepon,ondelete}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{telepon}</td>
         <td><input onClick={()=>ondelete(nama)} type='button' value='HAPUS' /></td>
      </tr>
    );
}

export default CardTentor;