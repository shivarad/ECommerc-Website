import React from 'react';
import SHOP_DATA from './SHOP_DATA';
import CollectionPreview from '../../components/collectionPreview/collectionPreview';

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            ShopCollections:SHOP_DATA
        }
    }

    
    render(){
        const { ShopCollections } = this.state;
        return (
          <div className='shop-page'>
             {ShopCollections.map(({ id, ...otherCollectionProps }) => (
              <CollectionPreview key={id} {...otherCollectionProps} />
            ))} 
          </div>
        );
      
        
    }
}

export default ShopPage;