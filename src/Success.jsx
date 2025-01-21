// Success.js
import React from 'react';
// import './Success.css'; // Assuming you have a separate CSS file for Success component styling
import successImage from '../cart/success/success.png'; // Assuming you have the correct path to your success image

function Success(){
    return(
        <>
        <div className='sc-container'>
            <h1>Payment Successful</h1>
            <p>Your order will arrive in 2 business days</p>
            <img src={successImage} alt="Success" />
            <a href="/" className='sc-btn'>Back To Homepage</a> {/* Changed href to "/" */}
        </div>
        </>
    );
}

export default Success;
