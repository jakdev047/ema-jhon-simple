import React, {useState } from 'react';
import fakeData from '../../fakeData';

import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
  // fetch data
  const firstTenData = fakeData.slice(0,10);
  const [products,setProducts] = useState(firstTenData);

  // fetch cart data
  const [cart,setCart] = useState([]);

  const handleProduct = (product) => {
    const newCart = [...cart,product];
    setCart(newCart);

    const sameProduct = newCart.filter(pd=> pd.key === product.key);
    const count = sameProduct.length;
    addToDatabaseCart(product.key,count);
    
  }

  return (
    <div className="twin-container">

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
