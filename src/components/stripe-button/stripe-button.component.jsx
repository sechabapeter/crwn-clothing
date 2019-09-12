import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey= 'pk_test_Sxo4dvPFSlvpPeBn7RWPgfgy00yZG1f9Vj';
  const  onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='Sechaba Clothing Web Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount={ priceForStripe }
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishablekey}
        
        />
    )
};

export default StripeCheckoutButton;