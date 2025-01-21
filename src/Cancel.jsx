// Cancel.js
import React from 'react';
// import './Cancel.css'; // Assuming you have a separate CSS file for Cancel component styling
import cancelImage from '../cart/cancel/cancel.png'; // Assuming you have the correct path to your cancel image

function Cancel(){
    return(
        <>
        <div className='sc-container'>
            <h1>Payment Cancelled</h1>
            <p>We apologize for the inconvenience</p>
            <img src={cancelImage} alt="Cancel" />
            <a href="/" className='sc-btn'>Back To Homepage</a> {/* Changed href to "/" */}
        </div>
        </>
    );
}

export default Cancel;
