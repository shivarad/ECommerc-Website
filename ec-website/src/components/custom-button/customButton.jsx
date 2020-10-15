import React from 'react';
import './custom-button.scss'

const CustomBtn =({children, ...otherProps})=>(
<button className='customBtn'
     {...otherProps}>
    {children}
</button>
);


export default CustomBtn ;