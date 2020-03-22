import React from 'react';
import { useForm} from 'react-hook-form';
import { useAuth } from '../Login/useAuth';

const Shipping = () => {
  const { register, handleSubmit,errors } = useForm();
  const onSubmit = data => { console.log(data) };

  const auth = useAuth();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name"/>
      {errors.name && <span>Name is required</span>} <br/><br/>

      <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email"/>
      {errors.email && <span>Email is required</span>} <br/><br/>

      <input name="addressLine1" ref={register({ required: true })} placeholder="Address One"/>
      {errors.addressLine1 && <span>Address is required</span>} <br/><br/>

      <input name="addressLine2" ref={register} placeholder="Addrees two"/>
      {errors.addressLine2 && <span>Address is required</span>} <br/><br/>

      <input name="city" ref={register({ required: true })} placeholder="City"/>
      {errors.city && <span>City is required</span>} <br/><br/>

      <input name="country" ref={register({ required: true })} placeholder="Country"/>
      {errors.country && <span>Country is required</span>} <br/><br/>

      <input name="zipcode" ref={register({ required: true })} placeholder="Zipcode" />
      {errors.zipcode && <span>Zipcode is required</span>} <br/><br/>
      
      <input type="submit" />
    </form>
  )
};

export default Shipping;