import React,{ useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

function ProductDetails() {
  const {productKey} = useParams();

  // fetch product data
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    fetch(`https://morning-fortress-29937.herokuapp.com/products/${productKey}`)
    .then(res=>res.json())
    .then(data=> {
      setProduct(data);
    })
    .catch(error=>console.log(error));
  },[productKey])

  return (
    <div>
      {
        product && <Product showCart={false} product={product}></Product>
      }
    </div>
  )
}

export default ProductDetails;
