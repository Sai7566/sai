import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke, FaTruckFast } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";

import RelatedProducts from "../Components/RelatedProducts";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { productId } = useParams();
  const {
    products,
    currency,
    addToCart,
  } = useContext(ShopContext);

  const [product, setProduct] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  }, [productId, products]);

  if (!product) {
    return <div className="text-center text-gray-500 py-10">Loading...</div>;
  }

  const handleAddToCart = (id, size) => {
    if (!size) {
      toast.error("Please select a size before adding to cart!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    addToCart(id, size);
    toast.success("Added to cart successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12 bg-primary p-6 rounded-2xl shadow-lg mb-12">
          <div className="flex flex-col xl:flex-1">
            <div className="flex flex-col-reverse xl:flex-row gap-4">
              <div className="flex flex-row xl:flex-col gap-4 justify-center">
                {product.image.map((item, i) => (
                  <img
                    key={i}
                    src={item}
                    alt="productImg"
                    className={`w-16 h-16 xl:w-24 xl:h-24 object-cover rounded-md cursor-pointer border-2 
                                transition-transform duration-300 ease-in-out transform hover:scale-105 
                                ${image === item ? "border-black shadow-md" : "border-gray-300"}`}
                    onClick={() => setImage(item)}
                  />
                ))}
              </div>
              <div className="flex-1">
                <img
                  src={image}
                  alt="productImg"
                  className="rounded-xl w-full object-cover shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{product.name}</h3>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex text-secondary">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke />
              </div>
              <span className="text-gray-500">(122 Reviews)</span>
            </div>

            <h4 className="text-3xl font-bold text-gray-900 mt-4">
              {currency}{product.price}.00
            </h4>

            <p className="text-gray-600 mt-2">{product.description}</p>

            <div className="mt-6">
              <h5 className="font-semibold mb-2">Select Size:</h5>
              <div className="flex gap-3">
                {[...product.sizes]
                  .sort((a, b) => {
                    const order = ["S", "M", "L", "XL", "XXL"];
                    return order.indexOf(a) - order.indexOf(b);
                  })
                  .map((item, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-900 hover:text-white transition 
                        ${size === item ? "bg-gray-900 text-white" : "bg-gray-100"}`}
                      onClick={() => setSize(item)}
                    >
                      {item}
                    </button>
                  ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={() => handleAddToCart(product._id, size)}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition w-full sm:w-auto"
              >
                Add To Cart <TbShoppingBagPlus />
              </button>
            </div>

            <div className="flex items-center gap-2 mt-6 text-gray-700">
              <FaTruckFast className="text-lg" />
              <span>Free delivery on orders over ₹500</span>
            </div>

            <hr className="my-6 w-2/3" />

            <div className="space-y-3 text-gray-700 border border-blue-100 p-4 rounded-lg">
              <div>Authenticity You Can Trust</div>
              <div>Enjoy Cash On Delivery For Your Convenience</div>
              <div>Easy return & exchange within 7 days</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <RelatedProducts category={product.category} subCategory={product.subCategory} />
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Product;

