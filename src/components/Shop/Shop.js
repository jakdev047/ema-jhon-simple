import React, {useState } from 'react';
import fakeData from '../../fakeData';

import './Shop.css';

import Product from '../Product/Product';

const Shop = () => {
  // fetch data
  const firstTenData = fakeData.slice(0,10);
  const [products,setProducts] = useState(firstTenData);

  // fetch cart data
  const [cart,setCart] = useState([]);

  const handleProduct = (product) => {
    // console.log('product added',product);
    const newCart = [...cart,product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {
          products.map((product,index)=> <Product key={index} product={product} handleProduct={handleProduct}></Product>)
        }
      </div>
       <div className="cart-container">
         <h2>This is Cart Container</h2>
         <h5>Order Summary: {cart.length}</h5>
       </div>
    </div>
  );
};

export default  Shop;
