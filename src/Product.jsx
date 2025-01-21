// Product.js
import React from 'react';
import './App.css';
import nike1 from '../cart/nike 1.jpeg';
import nike2 from '../cart/nike 2.jpeg';
import nike3 from '../cart/nike 3.jpeg';
import nike4 from '../cart/nike4.jpeg';
import nike5 from '../cart/nike 5.jpeg';
import nike6 from '../cart/nike 6.jpeg'; 

export const Pro = (props) =>{
  const {name,price,image, addToCart} = props
  return(
    <>
        <div className="product-box">
            <img src={image} alt="" className='product-img' />
            <h2 className="product-title">{name}</h2> 
            <span className="price">${price}</span> 
            <button className="bx bx-shopping-bag add-cart" onClick={() => addToCart(name, price, image)}></button>
        </div>
    </>
  )
}


function Product({ addProductToCart }) {
  // Function to handle adding product to cart
  const handleAddToCart = (title, price, imgSrc) => {
    addProductToCart(title, price, imgSrc);
  };

  const nikes_product = [['mens shoe',150,'../cart/nike 1.jpeg'],['casuals',200,'../cart/nike 2.jpeg'],['running shoe',300,'../cart/nike 3.jpeg']]
  

  return (
    <section>
      <div className='shop container'>
        <h2 className='section-title' style={{
                marginBottom: "2rem"
            }}>Shop Product</h2>
        <div className="shop-content">
        {
          nikes_product.map((data, index)=>{
            return (
              <Pro key={index} name={data[0]} price={data[1]} image={data[2]} addToCart={handleAddToCart}/>
            )
          })
        }
        
        
          {/* <div className="product-box">
            <img src={nike2} alt="" className='product-img' />
            <h2 className="product-title">mens shoe</h2> 
            <span className="price">$150</span> 
            <button className="bx bx-shopping-bag add-cart" onClick={() => handleAddToCart('mens shoe', 150, nike2)}></button>
          </div> */}
          {/* <div className="product-box">
            <img src={nike3} alt="" className='product-img' />
            <h2 className="product-title">casuals</h2>
            <span className="price">$200</span>
            <button className="bx bx-shopping-bag add-cart" onClick={() => handleAddToCart('casuals', 200, nike3)}></button>
          </div> */}
          {/* <div className="product-box">
            <img src={nike4} alt="" className='product-img' /> 
            <h2 className="product-title">running shoe</h2> 
            <span className="price">$80</span> 
            <button className="bx bx-shopping-bag add-cart" onClick={() => handleAddToCart('running shoe', 80, nike4)}></button>
          </div> */}
          {/* <div className="product-box">
            <img src={nike5} alt="" className='product-img' /> 
            <h2 className="product-title">waffle iron</h2> 
            <span className="price">$80</span> 
            <button className="bx bx-shopping-bag add-cart" onClick={() => handleAddToCart('waffle iron', 80, nike5)}></button>
          </div> */}
          {/* <div className="product-box">
            <img src={nike6} alt="" className='product-img' /> 
            <h2 className="product-title">air mosaic</h2> 
            <span className="price">$80</span> 
            <button className="bx bx-shopping-bag add-cart" onClick={() => handleAddToCart('air mosaic', 80, nike6)}></button>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Product;
