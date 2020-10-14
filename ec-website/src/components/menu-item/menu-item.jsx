import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';

const MenuItem=({title,bgUrl,size,history,match,linkUrl})=>{
return(
    <div className={`${size} menu-item`}>
            <div className='bgImg' style={{backgroundImage:`url(${bgUrl})`}} onClick={()=>history.push(`${match.url}${linkUrl}`)}/>
            <div className='item-content'>
                    <h1 className='item-title'>{title.toUpperCase()}</h1>
                    <span className='item-subtitle'>SHOP NOW</span>
             </div>
     </div>
)
}

export default withRouter(MenuItem);