import React from 'react';
import './App.css';
import puma1 from '../cart/puma1.jpeg';
import puma2 from '../cart/puma2.jpeg';
import puma3 from '../cart/puma3.jpeg';
import puma4 from '../cart/puma4.jpeg';
import puma5 from '../cart/puma5.jpeg';

import { Pro } from './Product';

function Puma({ addProductToCart }) {
    // Function to handle adding product to cart
    const handleAddToCart = (title, price, imgSrc) => {
      addProductToCart(title, price, imgSrc);
    };
  
    const puma_product = [['mens shoe',150,'../cart/puma1.jpeg'],['casuals',200,'../cart/puma2.jpeg'],['running shoe',300,'../cart/puma3.jpeg']]
    return (
        <section>
          <div className='shop container'>
            <h2 className='section-title' style={{
                marginBottom: "2rem"
            }}>Shop Product</h2>
            <div className="shop-content">
            {
              puma_product.map((data)=>{
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
    
    export default Puma;
    
