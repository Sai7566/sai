import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300">
      <div className="w-full">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-contain rounded-md"
          />
        </Link>
      </div>

      <h2 className="text-lg font-bold mt-3">{product.name}</h2>

      <p className="text-gray-600 text-sm">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <p className="font-semibold text-blue-600 text-lg">₹{product.price}.00</p>
        <div className="flex items-center gap-1 text-secondary">
          <FaStar className="text-xl" />
          <span className="text-gray-800 font-medium">4.8</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
