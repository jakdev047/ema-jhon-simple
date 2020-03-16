import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

function ProductDetails() {
  const {productKey} = useParams();

  const singleProduct = fakeData.find(pd => pd.key === productKey);

  console.log(singleProduct)

  return (
    <div>
      <Product showCart={false} product={singleProduct}></Product>
    </div>
  )
}

export default ProductDetails;
