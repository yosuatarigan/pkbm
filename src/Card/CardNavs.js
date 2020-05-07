import React from 'react';
import iconalumni from '../image/topiwisuda.png';
import teacher from '../image/teacher.png';
import info from '../image/question.png';
import fasilitas from '../image/fasilitas.png';
import Card from './Card';


const list = [{ idtext : 'alumni', icon : iconalumni, route:'alumni'},
                {idtext: 'tentor', icon: teacher, route:'tentor'},
                {idtext: 'Info',   icon :info, route:'info' },
                {idtext: 'Fasilitas', icon:fasilitas, route:'fasilitas'}];

const CardNavs = ({onRouteChange})=>{
    return(
        <div className=" black bg-near-white"> 
        <div className="tc">
            {list.map((user, i) => {
                return (
                    <Card
                        key={i}
                        idtext={list[i].idtext}
                        icon={list[i].icon}
                        route={list[i].route}
                        onRouteChange={onRouteChange}
                    />
                );
            })}
        </div>
        </div>
    );
}

export default CardNavs;