import React, { useState, useEffect } from 'react';
import './App.css';
import Product from './Product';
import Payment from './Payment';
import {useLocation} from "react-router-dom"
import Adidas from './Addidas';
import Puma from './Puma';


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
const state = useLocation();
console.log(state.state.component);
  const toggleCart = () => {
    setCartOpen(!cartOpen);
    updatecartIcon();
  };
  const addProductToCart = (title, price, imgSrc) => {
    setCartItems(prevItems => [...prevItems, { title, price, imgSrc, quantity: 1 }]);
  };

  const removeCartItem = (indexToRemove) => {
    setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const updateQuantity = (index, quantity) => {
    const newCartItems = [...cartItems];
      newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
    updatecartIcon();

  };

  const updateTotal = (items) => {
    return items.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0).toFixed(2);
  };

  const loadCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(cartItems);

    const cartTotal = localStorage.getItem('cartTotal');
    if (cartTotal) {
      document.querySelector(".total-price").innerText = "$" + cartTotal;
    }
    updatecartIcon();
  };

  function updatecartIcon() {
    var cartboxes = document.getElementsByClassName('cart-box');
    var quantity = 0;
    for (var i = 0; i < cartboxes.length; i++) {
      var cartBox = cartboxes[i];
      var quantityElemnt = cartBox.getElementsByClassName('cart-quantity')[0];
      quantity += parseInt(quantityElemnt.value);
    }

    var cartIcon = document.querySelector('#cart-icon');
    cartIcon.setAttribute('data-quantity', quantity);
  }

  useEffect(() => {
    loadCartItems();
  }, []);

  useEffect(() => {
    const total = updateTotal(cartItems);
    localStorage.setItem('cartTotal', total);
    document.querySelector(".total-price").innerText = "$" + total;
  }, [cartItems]);

  const handlePayment = async () => {
    try {
      const items = JSON.parse(localStorage.getItem('cartItems'));
      const response = await fetch('/stripe-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          items: items
        })
      });
      const url = await response.json();
      window.location.href = url;
    } catch (error) {
      console.log('Error occurred during payment:', error);
    }
  };

  return (
    <>
      <header>
        <div className="nav container" style={{
          background: "black",
          color: "white"
        }}>
          <h2 className="logo">{state.state.component.toUpperCase()}</h2>
          <div className="cart-icon-wrapper" style={{
            marginRight:"10px"
          }}>
            <i className='bx bx-shopping-bag' id="cart-icon" data-quantity="0" onClick={toggleCart}></i>
          </div>
          <div className={`cart ${cartOpen ? 'active' : ''}`}>
            <h2 className="cart-title">YOUR CART</h2>
            <div className="cart-content">
              {cartItems.map((item, index) => (
                <div className="cart-box" key={index}>
                  <img src={item.imgSrc} alt="" className="cart-img" />
                  <div className="detail-box">
                    <div className="cart-product-title">{item.title}</div>
                    <div className="cart-price">{item.price}</div>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                      className="cart-quantity" />
                  </div>
                  <i className='bx bxs-trash-alt cart-remove' onClick={() => removeCartItem(index)}></i>
                </div>
              ))}
            </div>
            <div className="total">
              <div className="total-title">TOTAL</div>
              <div className="total-price">${updateTotal(cartItems)}</div>
            </div>

            <Payment handlePayment={handlePayment} /> {/* Use Payment component */}
            <i className='bx bx-x' id="close-cart" onClick={toggleCart}></i>
          </div>
        </div>
      </header>
      {state.state.component === "Nike" ?
              <Product addProductToCart={addProductToCart} /> : null}
              {state.state.component === "Adidas" ?
              <Adidas addProductToCart={addProductToCart} /> : null}
              {state.state.component === "Puma" ?
              <Puma addProductToCart={addProductToCart} /> : null}
    </>
  );
}

export default App;
