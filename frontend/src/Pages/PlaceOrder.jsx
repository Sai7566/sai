import React, { useContext, useState } from 'react';
import CartTotal from '../Components/CartTotal';
import Footer from '../Components/Footer';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const {
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_charges,
  } = useContext(ShopContext);
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", street: "", city: "", state: "", pincode: "", country: "", phone: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const cartAmount = getCartAmount?.() || 0;
    const deliveryCharge = delivery_charges || 0;
    const totalAmount = cartAmount + deliveryCharge;

    if (isNaN(totalAmount) || totalAmount <= 0) {
      alert("Invalid total amount. Please try again.");
      return;
    }

    alert("Order placed successfully!");
    setCartItems({});
  };

  return (
    <div>
      <div className='bg-primary mb-16'>
        <form className='max-padd-container py-10' onSubmit={onSubmitHandler}>
          <div className='flex flex-col gap-10 md:gap-20 xl:flex-row xl:gap-28'>
            {/* Left Side - Delivery Information */}
            <div className='flex flex-1 flex-col gap-3 text-[95%]'>
              <h1 className='bold-20'>Delivery <span className='text-secondary'>Information</span></h1>
              <input onChange={onChangeHandler} value={formData.firstName} type='text' name='firstName' placeholder='First Name' required />
              <input onChange={onChangeHandler} value={formData.lastName} type='text' name='lastName' placeholder='Last Name' required />
              <input onChange={onChangeHandler} value={formData.email} type='email' name='email' placeholder='Email' required />
              <input onChange={onChangeHandler} value={formData.phone} type='number' name='phone' placeholder='Phone Number' required />
              <input onChange={onChangeHandler} value={formData.street} type='text' name='street' placeholder='Street' required />
              <input onChange={onChangeHandler} value={formData.city} type='text' name='city' placeholder='City' required />
              <input onChange={onChangeHandler} value={formData.state} type='text' name='state' placeholder='State' required />
              <input onChange={onChangeHandler} value={formData.pincode} type='number' name='pincode' placeholder='Pin Code' required />
              <input onChange={onChangeHandler} value={formData.country} type='text' name='country' placeholder='Country' required />
            </div>

            {/* Right Side - Order Summary & Payment */}
            <div className='flex flex-1 flex-col'>
              <CartTotal />
              <div className='my-6'>
                <h3 className='bold-20'>Payment <span className='text-secondary'>Method</span></h3>
                <div className='flex flex-col sm:flex-row gap-3'>
                  <div className='py-1 text-xs btn-dark'>Cash On Delivery</div>
                </div>
                <div className='mt-4'>
                <button
  type="button"
  className="btn-secondary py-2 px-4 rounded-md w-full sm:w-auto"
  onClick={() => {
    toast.success("Order placed successfully!");
    navigate("/"); // Redirect to home
  }}
>
  Place Order
</button>

                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
