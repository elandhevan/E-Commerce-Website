import React from 'react'
import './Popular.css'
import adddas from '../cart/addidas/new addidas.jpeg';
import image1 from '../cart/addidas/image 1.jpg'
import slidders from '../cart/addidas/slidder.jpg'
import image3 from '../cart/addidas/image 3.jpg'
import puma from '../cart/puma/HD-wallpaper-puma-logo-black-black-puma-logo-logos-red-red-puma-logo.jpg'
import sneekers from '../cart/puma/sneekers.jpg'
import shoe from '../cart/puma/shoe.jpeg'
import slidder from '../cart/puma/slidder.jpg'
import logo from '../cart/nike/logo.png'
import shoe1 from '../cart/nike/shoe1.png'
import shoe2 from '../cart/nike/shoe2.png'
import slidder1 from '../cart/nike/slidder.png'
import Navbar from './Navbar';
import {useNavigate} from "react-router-dom"

const Popular = () => 
{
  const navigate = useNavigate();

  const handleNavigate = (component) => {
    navigate("/Dashboard", {
      state: {
        component
      }
    });
  }
  return (
    <>  
    <Navbar/>
      <div className="wrapper">
        <div className="card" onClick={()=>handleNavigate("Adidas")}>
          <div className="poster"><img src={adddas} alt="Location Unknown"/></div>
          <div className="details">
            <h1>ADDIDAS</h1>
            <h2>Adidasis a German athletic apparel and footwear corporation headquartered in Herzogenaurach,
              Bavaria, Germany.</h2>
            <div className="tags">
              <span className="tag">Footware</span>
              <span className="tag">Sportswear</span>
              <span className="tag">Casuals</span>
            </div>
            <div className="cast">
              <h3>Preview</h3>
              <ul>
            <li><img src={image1} alt="sportswear" title="sportswear"/></li>
						<li><img src={slidder} alt="slidders" title="slidders"/></li>
						<li><img src={image3} alt="casuals" title="casuals"/></li> 
              </ul>
            </div>
          </div>
        </div>
        <div className="card" onClick={()=> handleNavigate("Puma")}>
          <div className="poster"><img src={puma} alt="Location Unknown"/></div>
          <div className="details">
            <h1>PUMA</h1>
            <h2>Puma SE is a German multinational corporation that designs and manufactures athletic and casual
              footwear, apparel, and accessories, headquartered in Herzogenaurach, Bavaria, Germany.</h2>
            <div className="tags">
              <span className="tag">Footware</span>
              <span className="tag">Sportswear</span>
              <span className="tag">Casuals</span>
            </div>
            <div className="cast">
              <h3>Preview</h3>
              <ul>
                 <li><img src={sneekers} alt="sneekers" title="sneekers"/></li>
                <li><img src={shoe} alt="sneekers" title="sneekers"/></li>
                <li><img src={slidders}alt="slidder" title="slidder"/>
                </li> 
              </ul>
            </div>
          </div>
        </div>
        <div className="card" onClick={()=> handleNavigate("Nike")}>
          <div className="poster"><img src={logo}alt="Location Unknown"/></div>
          <div className="details">

            <h1>NIKE</h1>
            <h2>Nike is an American athletic footwear and apparel corporation headquartered
              near
              Beaverton, Oregon, United States</h2>

            <div className="tags">
              <span className="tag yellow">Footware</span>
              <span className="tag">Sportswear</span>
              <span className="tag blue">Casuals</span>
            </div>

            <div className="cast">
              <h3>preview</h3>
              <ul>
                <li><img src={shoe1} alt="sneekers" title="sneekers"/></li>
                <li><img src={shoe2} alt="sneekers" title="sneekers"/></li>
                <li><img src={slidder1} alt="slidder" title="slidder"/></li>
              </ul>
            </div>
          </div>
        </div>
      </div>  

    </>

  )
}

export default Popular
