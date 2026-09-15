import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'

const Add = ({ token }) => {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("Men")
  const [subCategory, setSubCategory] = useState("Topwear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("description", description)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(
        backendURL + "/api/product/add",
        formData,
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success(response.data.message)
        setName("")
        setDescription("")
        setPrice("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setSizes([])
        setBestseller(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const sizeOptions = ["S", "M", "L", "XL", "XXL"]

  return (
    <form onSubmit={onSubmitHandler} className="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">

      {/* Upload Images */}
      <div>
        <p className="text-lg font-semibold text-gray-700 mb-3">
          Upload Images
        </p>

        <div className="flex gap-4 flex-wrap">

          <label
            htmlFor="image1"
            className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition overflow-hidden"
          >
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
              className="w-full h-full object-contain"
            />
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>

          <label
            htmlFor="image2"
            className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition overflow-hidden"
          >
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
              className="w-full h-full object-contain"
            />
            <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>

          <label
            htmlFor="image3"
            className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition overflow-hidden"
          >
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
              className="w-full h-full object-contain"
            />
            <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>

          <label
            htmlFor="image4"
            className="w-28 h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition overflow-hidden"
          >
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
              className="w-full h-full object-contain"
            />
            <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>

        </div>
      </div>

      {/* Product Name */}
      <div>
        <p className="mb-2 font-medium text-gray-700">Product Name</p>

        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Type here"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
        />
      </div>

      {/* Description */}
      <div>
        <p className="mb-2 font-medium text-gray-700">
          Product Description
        </p>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          rows="4"
          placeholder="Write content here"
          required
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none outline-none focus:border-blue-500"
        ></textarea>
      </div>

      {/* Category Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Category */}
        <div>
          <p className="mb-2 font-medium text-gray-700">
            Product Category
          </p>

          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* Sub Category */}
        <div>
          <p className="mb-2 font-medium text-gray-700">
            Sub Category
          </p>

          <select
            onChange={(e) => setSubCategory(e.target.value)}
            value={subCategory}
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          >
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <p className="mb-2 font-medium text-gray-700">
            Product Price
          </p>

          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            placeholder="500"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

      </div>

      {/* Product Sizes */}
      <div>
        <p className="mb-2 font-medium text-gray-700">
          Product Sizes
        </p>

        <div className="flex flex-wrap gap-3">
          {sizeOptions.map((size) => (
            <div
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
                )
              }
              className={`px-5 py-2 rounded-md cursor-pointer transition ${
                sizes.includes(size) ? "bg-gray-800" : "bg-slate-100 hover:bg-gray-200"
              }`}
            >
              <p className={`text-sm font-medium ${sizes.includes(size) ? "text-white" : "text-gray-700"}`}>
                {size}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="bestseller"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
          className="w-5 h-5 cursor-pointer accent-black"
        />

        <label
          htmlFor="bestseller"
          className="text-gray-700 font-medium cursor-pointer"
        >
          Add to Bestseller
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition duration-300"
      >
        ADD PRODUCT
      </button>

    </form>
  )
}

export default Add