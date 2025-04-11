import React, { useState } from "react";
import upload_icon from "../assets/upload_icon.png";
import axios from "axios";
import { backend_url } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [popular, setPopular] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("popular", popular);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backend_url + "/api/product/add",
        formData,
        { headers: { token } }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="px-2 sm:px-8 mt-2 sm:mt-14 pb-16">
      <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-3 medium-14 lg:w-[777px]">
        <div className="w-full">
          <h5 className="h5">Product Name</h5>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Write here..."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>

        <div className="w-full">
          <h5 className="h5">Product Description</h5>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            rows={5}
            placeholder="Write here..."
            className="px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-lg"
          />
        </div>

        {/* category */}
        <div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-row gap-4">
              <div>
                <h5 className="h5">Category</h5>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                  className="max-w-20 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded"
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>
              <div>
                <h5 className="h5">Subcategory</h5>
                <select
                  onChange={(e) => setSubCategory(e.target.value)}
                  value={subCategory}
                  className="max-w-28 px-3 py-2 text-gray-30 ring-1 ring-slate-900/5 bg-white rounded"
                >
                  <option value="Topwear">Topwear</option>
                  <option value="Bottomwear">Bottomwear</option>
                  <option value="Winterwear">Winterwear</option>
                </select>
              </div>
            </div>

            <div>
              <h5 className="h5">Product Price</h5>
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="number"
                placeholder="Enter price"
                className="px-3 py-2 bg-white rounded max-w-24 ring-1 ring-slate-900/5"
              />
            </div>
          </div>
        </div>

        {/* sizes */}
        <div>
          <h5 className="h5">Available Sizes</h5>
          <div className="flex gap-3 mt-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size} onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }>
                <span className={`${sizes.includes(size) ? "bg-tertiary text-white" : "bg-white"} text-gray-30 rounded ring-1 ring-slate-900/5 px-3 py-1 cursor-pointer`}>
                  {size}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* images */}
        <div className="flex gap-2 pt-2">
          {[image1, image2, image3, image4].map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img
                src={image ? URL.createObjectURL(image) : upload_icon}
                alt={`prdImg${index + 1}`}
                className="w-16 h-16 aspect-square object-cover ring-1 ring-slate-900/5 rounded-lg"
              />
              <input
                onChange={(e) => {
                  const setImage = [setImage1, setImage2, setImage3, setImage4][index];
                  setImage(e.target.files[0]);
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>

        {/* popular checkbox */}
        <div className="flexStart gap-2 my-2">
          <input
            onChange={() => setPopular((prev) => !prev)}
            type="checkbox"
            checked={popular}
            id="popular"
          />
          <label htmlFor="popular" className="cursor-pointer">Add to Popular</label>
        </div>

        <button type="submit" className="btn-dark mt-3 max-w-44 sm:w-full">Add Product</button>
      </form>
    </div>
  );
};

export default Add;
