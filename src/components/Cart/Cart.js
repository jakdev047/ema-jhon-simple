import React from 'react';

function Cart(props) {
  const cart = props.cart;

  const totalPrice = cart.reduce((total,product) => total + product.price,0);

  let shipping = 0;
  if(totalPrice>35) {
    shipping = 12.99;
  }
  else if(totalPrice>15) {
    shipping = 4.99;
  }
  else if (totalPrice>0) {
    shipping = 12.99;
  }

  const tax = Math.round(totalPrice/10).toFixed(2);

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Order: {cart.length}</h5>
      <p>Product Price {totalPrice}</p>
      <p><small>Shipping Cost {shipping}</small></p>
      <p><small>Tax: {Number(tax)}</small></p>
      <p>Total Price {totalPrice + shipping + Number(tax)}</p>
    </div>
  )
}

export default Cart
