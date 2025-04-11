import React from 'react';
import img1 from "../assets/features/feature1.png";
import img2 from "../assets/features/feature2.png";

const Features = () => {
  return (
    <section className='max-padd-container pt-14 pb-20'>
      <div className='grid grid-cols-1 xl:grid-cols-[1.5fr_2fr] gap-6 gap-y-12 rounded-xl'>
        
        {/* Images Section */}
        <div className='flexCenter gap-x-10'>
          <div>
            <img src={img1} alt="Express Delivery" height={77} width={222} className='rounded-full' />
          </div>
          <div>
            <img src={img2} alt="Secure Shopping" height={77} width={222} className='rounded-full' />
          </div>
        </div>
        
        {/* Features Text */}
        <div className='flexCenter flex-wrap sm:flex-nowrap gap-x-5'>
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Quality Products</h4>
            <p>We provide the best quality clothing that lasts long and feels great.</p>
          </div>
          
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Fast Delivery</h4>
            <p>Get your orders delivered quickly with our express shipping service.</p>
          </div>
          
          <div className='p-4 rounded-3xl'>
            <h4 className='h4 capitalize'>Secure Payments</h4>
            <p>Your transactions are safe with end-to-end encrypted payment gateways.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
