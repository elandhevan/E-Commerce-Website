import React from 'react';
import './App.css';
import adidas1 from '../cart/adidas1.jpeg';
import adidas2 from '../cart/adidas2.jpeg';
import adidas3 from '../cart/adidas3.jpeg';
import adidas4 from '../cart/adidas4.jpeg';
import adidas5 from '../cart/adidas5.jpeg';

import { Pro } from './Product';

function Adidas({ addProductToCart }) {
    // Function to handle adding product to cart
    const handleAddToCart = (title, price, imgSrc) => {
      addProductToCart(title, price, imgSrc);
    };
  
    const adidas_product = [['mens shoe',150,'../cart/adidas1.jpeg'],['casuals',200,'../cart/adidas2.jpeg'],['running shoe',300,'../cart/adidas3.jpeg']]
    return (
        <section>
          <div className='shop container'>
            <h2 className='section-title' style={{
                marginBottom: "2rem"
            }}>Shop Product</h2>
            <div className="shop-content">
            {
              adidas_product.map((data)=>{
                return (
                  <Pro name={data[0]} price={data[1]} image={data[2] } addToCart={handleAddToCart}/>
                )
              })
            }
            </div>
          </div>
        </section>
      );
    }
    
    export default Adidas;
    
