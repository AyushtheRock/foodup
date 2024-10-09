import React, { useEffect } from 'react';
import "../components/cart.css";
import { useState } from 'react';

function Cart({ cart }){

  const[CART, setCART] = useState([]);


  useEffect(() => {
    setCART(cart)
  },[cart])


  return (
  <div>
    {
      CART?.map((cartitem , cartindex) => {
        return(
          <div className='CartDetail'>
            <div className='cartImage'>
            <img src={cartitem.image}  width={100}></img>
            </div>
            <div className='cartName'>
            <h3>{cartitem.name}</h3>
            </div>
            <span>Price - {cartitem.caloriesPerServing*cartitem.quantity}</span>
            <div className='CartButton'>
            <button className='button1' 
             onClick={()=>{
              const _CART = CART.map((item, index) => {
                return cartindex === index ? { ...item, quantity:item.quantity > 0 ? item.quantity - 1:0}: item
              })
              setCART(_CART)
            }}
            >-</button>
            <span>{cartitem.quantity}</span>
            
            <button className='button1'
            onClick={()=>{
              const _CART = CART.map((item, index) => {
                return cartindex === index ? { ...item, quantity:item.quantity +1}: item
              })
              setCART(_CART)
            }}>+</button>
            </div>
           
          </div>
        )
      })
    }
    <p className='TotalCart'> Total Cart Value - Rs <space></space>
            {
              CART.map(item => item.caloriesPerServing * item.quantity).reduce((total, value) => total + value,0)
            }
            </p>
  </div>
  )
}

export default Cart;