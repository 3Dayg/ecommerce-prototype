import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_p9cLIKq6xb5rCX817DLocHwC001H0CdNyC';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
     <StripeCheckout 
        label='Pay now'
        name='Ecom Prototype AM'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
     />   
    )
}

export default StripeCheckoutButton;