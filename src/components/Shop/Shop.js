import React, {useState } from 'react';
import fakeData from '../../fakeData';

import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  // fetch data
  const firstTenData = fakeData.slice(0,10);
  const [products,setProducts] = useState(firstTenData);

  // fetch cart data
  const [cart,setCart] = useState([]);

  const handleProduct = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">

      <div className="product-container">
        {
          products.map((product,index)=> <Product key={index} showCart={true} product={product} handleProduct={handleProduct}></Product>)
        }
      </div>

       <div className="cart-container">
         <Cart cart={cart}></Cart>
       </div>
    </div>
  );
};

export default  Shop;
