import React from 'react';
import './menu-item.scss';

const MenuItem=({title,bgUrl,size})=>{
return(
    <div className={`${size} menu-item`}>
            <div className='bgImg' style={{backgroundImage:`url(${bgUrl})`}} />
            <div className='item-content'>
                    <h1 className='item-title'>{title}</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
             </div>
     </div>
)
}

export default MenuItem;