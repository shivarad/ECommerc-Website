import React from 'react';
import './collectionItem.scss';


const CollectionItem =({imageUrl,name,price,id})=>(
    <div className='collection-item'>
        <div className='bgImg' style={{backgroundImage:`url(${imageUrl})`}}/>
        <div className='collection-info'>
            <span className='collection-name'>{name}</span>
<span className='collection-price'>${price}</span>
        </div>

    </div>
)

export default CollectionItem;