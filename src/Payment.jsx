import React from 'react';
import './App.css'; 
import { Pro } from './Product';
function Payment() {
    const handlePayment = async () => {
        try {
            const items = JSON.parse(localStorage.getItem('cartItems')); 
            const response = await fetch('http://localhost:3000/stripe-checkout', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    items: items
                })
            });
            const session = await response.json();
            console.log(session.session);
            // const checkoutUrl = `https://checkout.stripe.com/c/pay/${url.sessionId}?apiKey=pk_test_51OtxFmSFT5uerlX1A24oIW4EzYJrJB5ieA0rB7u1DanbML9gZkar7LPyxhiOobNloWU3eX29mkeSRzy0iwsrrb8Y001nSyYG5D`;
            window.location.href = session.session.url; 
        } catch (error) {
            console.log('Error occurred during payment:', error);
        }
    };

    return (
        <button className="btn-buy" onClick={handlePayment}>Pay Now</button>
    );
}

export default Payment;
