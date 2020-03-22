import React, {useEffect,useState} from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
  // data fetch
  const [cart, setCart] = useState([]);
  const [orderPlaced,setOrderPlaced] = useState(false);

  const auth = useAuth();

  const handlePlaceholder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  }
  // data load
  useEffect(()=> {
    // cart data load from local storage
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  },[]);

  const removeProduct = (productKeys) => {
    const newCart = cart.filter(pd=> pd.key !== productKeys);
    setCart(newCart);
    removeFromDatabaseCart(productKeys);
  }
  
  // thanks for placeorder
  let  thankyou;
  if(orderPlaced) {
    thankyou = <img src={happyImage} alt="alt"/>;
  }

  return (
    <div className="twin-container"> 
      <div className="product-container">
        {
          cart.map(pd=>
            <ReviewItem key={pd.key} product={pd} removeProduct={removeProduct}></ReviewItem>)
        }
        { thankyou }

        {
          !cart.length && <h2>You have not added yet</h2>
        }

      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to='/shipping'>
            {
              auth.user ? <button className="main-btn">Proceed shipment</button>

              : <button className="main-btn">Log to Proceed</button>
            }
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;