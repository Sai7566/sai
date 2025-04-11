import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../tempContext/ShopContext';
import Item from './Item';

const PopularProducts = () => {
  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    if (products?.length) {
      const filteredProducts = products.filter((item) => item.popular);
      setPopularProducts(filteredProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <section className='max-padd-container py-16'>
      <Title
        title1="Elite"
        title2="Collection"
        titleStyles="pb-10"
        paraStyles="!block"
      />

      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {popularProducts.map((product) => (
          <Item key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
