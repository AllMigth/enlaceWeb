import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default ({ sku }) => {
    const [stripe, setStripe] = useState({});
    useEffect(()=>{
			setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
		},[]); //componentDidMount
		
		const redirectToCheckout = async(ev) => {
			const response = await stripe.redirectToCheckout({
				items: [ { sku: sku.id, quantity: 1 } ],
				successUrl: `http://localhost:8000/completado`,
				cancelUrl: `http://localhost:8000`,
			});
			if (response.error){
				console.log(response.error);
			}
		}

    return(
        <button onClick={redirectToCheckout} className="app-btn text-xl"> Checkout </button>
    )
}