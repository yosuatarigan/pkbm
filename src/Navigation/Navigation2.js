import React from 'react';

const Navigation = ({ onRouteChange})=>{
    
    
        return(
            <nav style={{display : 'flex', justifyContent : 'flex-end'}}>
                 <p  onClick={()=>onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>PKBM hanuba</p>
                <p  onClick={()=>onRouteChange('alumni')} className='f3 link dim black underline pa3 pointer'>Alumni</p>
                <p  onClick={()=>onRouteChange('alumni')} className='f3 link dim black underline pa3 pointer'>Tutor</p>
                <p  onClick={()=>onRouteChange('alumni')} className='f3 link dim black underline pa3 pointer'>Fasilitas</p>
            </nav>
        );
    
   
   
   
}

export default Navigation;