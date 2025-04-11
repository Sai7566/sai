import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { products } from "../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import Item from "./Item";
import { ShopContext } from "../Context/ShopContext";

const NewArrivals = () => {
  const {products} = useContext(ShopContext)
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 10);
    setNewArrivals(data);
  }, []);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">🆕 New Arrivals</h2>
          <p className="text-gray-500 mt-2">
            Check out the latest additions to our store
          </p>
        </div>

        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 24 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5, spaceBetween: 32 },
          }}
          modules={[Autoplay, Pagination]}
          className="pt-4"
        >
          {newArrivals.map((product) => (
            <SwiperSlide key={product._id}>
              <Item product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;


