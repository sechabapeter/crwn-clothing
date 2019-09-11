import React from 'react';
import './custom-buttom.styles.scss';

const CustomButtom = ({ children, isGoogleSignIn , inversted, ...otherProps }) => (
<button className={`${inversted ? 'inversted': ''} ${isGoogleSignIn ? 'google-sign-in': ''} custom-button`} {...otherProps}>
     {children}


</button>

);

export default CustomButtom;
