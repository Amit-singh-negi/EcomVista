import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [location, showSearch])

  return showSearch && visible ? (
    <div className="border-t border-b border-gray-200 bg-gray-50 text-center py-6">
      <div className="inline-flex items-center justify-center border border-gray-300 px-5 py-2 rounded-full w-3/4 sm:w-1/2 focus-within:border-gray-500 transition-colors">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search products..."
        />
        <img className="w-4" src={assets.search_icon} alt="Search" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer ml-3 hover:opacity-60 transition-opacity"
        src={assets.cross_icon}
        alt="Close search"
      />
    </div>
  ) : null
}

export default SearchBar;