import React from 'react';


const Cardpesan = ({nama,pesankritik,ondelete}) => {
    return (
        <tr className="stripe-dark">
        <td className="pa3">{nama}</td>
         <td className="pa3">{pesankritik}</td>
         <td><input onClick={()=>ondelete(nama)} type='button' value='HAPUS' /></td>
      </tr>
    );
}

export default Cardpesan;