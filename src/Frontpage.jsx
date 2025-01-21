import React from 'react'
import './Frontpage.css'
// import hand_icon from '../assets/hand_icon.png'
import arrow_icon from './assets/arrow.png'
import hero from './assets/hero.png'
import arrow from './assets/arrow.png'
import Navbar from './Navbar'
const Frontpage = () => {
  return (
    <>
    <Navbar/>
    <div className='hero'>
      <div className="hero-left">
      <div>
        <h4>Our Summer collections</h4>
        <div className="hand-hand-icon">           
        <h1>The New Arrival</h1>
          
          </div>
          <h2>Branded Shoes</h2>
       <p>discover stylish Nike Addidas Puma arrivals </p>
       <p>quality comfort,and innovation for your active life</p>
       
        </div>
        
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
      </div>
    
      </>
  )
}

export default Frontpage
