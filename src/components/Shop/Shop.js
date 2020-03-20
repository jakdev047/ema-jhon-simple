import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';

import './Shop.css';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Shop = () => {
  // fetch data
  const firstTenData = fakeData.slice(0,10);
  const [products,setProducts] = useState(firstTenData);

  // fetch cart data
  const [cart,setCart] = useState([]);

  // 
  useEffect(()=>{
    // cart data load from local storage
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  },[])

  const handleProduct = (product) => {
    const productToBeAddedKey = product.key;  // to collect product key by click
    const sameProduct = cart.find(pd=> pd.key === productToBeAddedKey); // full product with key
    let count = 1; // initial value set up
    let newCart; // newcart initial
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity  = count;
      const others = cart.filter(pd => pd.key !== productToBeAddedKey);
      newCart = [...others,sameProduct]
    }
    else {
      product.quantity = 1;
      newCart = [...cart,product]
    }
    setCart(newCart);
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
         <Cart cart={cart}>
           <Link to="/review">
              <button className="main-btn">Review Order</button>
            </Link>
         </Cart>
       </div>
    </div>
  );
};

export default  Shop;
