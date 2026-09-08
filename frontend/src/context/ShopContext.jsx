// import { createContext, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = "₹";
//   const delivery_fee = 10;

//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setCartItems] = useState({});

//   const navigate = useNavigate();

//   // Add Product to Cart
//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error("Select Product Size");
//       return;
//     }

//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       if (cartData[itemId][size]) {
//         cartData[itemId][size] += 1;
//       } else {
//         cartData[itemId][size] = 1;
//       }
//     } else {
//       cartData[itemId] = {};
//       cartData[itemId][size] = 1;
//     }

//     setCartItems(cartData);
//   };

//   // Get Total Cart Items
//   const getCartCount = () => {
//     let totalCount = 0;

//     for (const itemId in cartItems) {
//       for (const size in cartItems[itemId]) {
//         try {
//           if (cartItems[itemId][size] > 0) {
//             totalCount += cartItems[itemId][size];
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     }

//     return totalCount;
//   };

//   // Update Cart Quantity
//   const updateQuantity = async (itemId, size, quantity) => {
//     let cartData = structuredClone(cartItems);

//     if (cartData[itemId]) {
//       if (quantity === 0) {
//         delete cartData[itemId][size];

//         if (Object.keys(cartData[itemId]).length === 0) {
//           delete cartData[itemId];
//         }
//       } else {
//         cartData[itemId][size] = quantity;
//       }

//       setCartItems(cartData);
//     }
//   };

//   // Get Total Cart Amount
//   const getCartAmount = () => {
//     let totalAmount = 0;

//     for (const itemId in cartItems) {
//       const itemInfo = products.find(
//         (product) => product._id === itemId
//       );

//       if (!itemInfo) continue;

//       for (const size in cartItems[itemId]) {
//         try {
//           if (cartItems[itemId][size] > 0) {
//             totalAmount +=
//               itemInfo.price * cartItems[itemId][size];
//           }
//         } catch (error) {
//           console.log(error);
//         }
//       }
//     }

//     return totalAmount;
//   };

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     setCartItems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  // Add to Cart
  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    setCartItems(cartData);

    if(token){
      try {
        await axios.post(backendURL+ '/api/cart/add',{itemId,size},{headers:{token}})
        
      } catch (error) {
        console.log(error);
        toast.error(error.message)
        
      }
    }
  };

  // Cart Count
  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalCount += cartItems[itemId][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalCount;
  };

  // Update Quantity
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (quantity === 0) {
        delete cartData[itemId][size];

        if (Object.keys(cartData[itemId]).length === 0) {
          delete cartData[itemId];
        }
      } else {
        cartData[itemId][size] = quantity;
      }

      setCartItems(cartData);
      if(token){
        try {
          await axios.post(backendURL +'/api/cart/update',{itemId,size,quantity},{headers:{token}})
          
        } catch (error) {
          console.log(error);
          toast.error(error.message)

        }
      }


    }
  };

  // Total Amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemInfo = products.find(
        (product) => product._id === itemId
      );

      if (!itemInfo) continue;

      for (const size in cartItems[itemId]) {
        try {
          if (cartItems[itemId][size] > 0) {
            totalAmount +=
              itemInfo.price * cartItems[itemId][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    return totalAmount;
  };

  // Fetch Products
  const getProductsData = async () => {
    try {
      const response = await axios.get(
        backendURL + "/api/product/list"
      );

      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getUserCart = async (token) =>{
    try{
      const response = await axios.post(backendURL +'/api/cart/get',{},{headers:{token}})

      if(response.data.success){
        setCartItems(response.data.cartData)
      }



    } catch(error){
      console.log(error);
      toast.error(error.message)
      

    }
  }

  // Load Token
useEffect(()=>{
  if(!token && localStorage.getItem('token')){
    setToken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'))
  }
},[])

  // Load Products
  useEffect(() => {
    getProductsData();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendURL,
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;