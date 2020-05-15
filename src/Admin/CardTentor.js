import React from 'react';


const CardTentor = ({nama,detail,ondelete}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{detail}</td>
         <td><input onClick={()=>ondelete(nama)} type='button' value='HAPUS' /></td>
      </tr>
    );
}

export default CardTentor;