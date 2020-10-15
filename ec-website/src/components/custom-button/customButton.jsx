import React from 'react';
import './custom-button.scss'

const CustomBtn =({isGoogleSignIn,children, ...otherProps})=>(
<button className={`${isGoogleSignIn? 'googleSignIn' :''} customBtn` }
     {...otherProps}>
    {children}
</button>
);


export default CustomBtn ;