import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendURL, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendURL + "/api/order/list",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) =>{
    try {
      const response = await axios.post(backendURL + '/api/order/status', {orderId, status:event.target.value},{headers:{token}})
      if(response.data.success){
        await fetchAllOrders()
      }
      
    } catch (error) {
      console.log(error);
      toast.error(response.data.message)
      
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div className="p-5">
      <h3 className="text-2xl font-semibold mb-6">Order Page</h3>

      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-[0.5fr_2fr_1fr] gap-6 border rounded-lg p-5 mb-5 shadow-sm bg-white"
          >
            {/* Parcel Icon */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={assets.parcel_icon}
                alt="parcel"
                className="w-14 h-14"
              />
            </div>

            {/* Order Details */}
            <div>
              <div className="mb-3">
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    {item.name} x {item.quantity}
                    <span className="font-medium"> ({item.size})</span>
                    {index !== order.items.length - 1 && ","}
                  </p>
                ))}
              </div>

              <p className="font-semibold">
                {order.address.firstName} {order.address.lastName}
              </p>

              <div className="text-gray-600 text-sm mt-1">
                <p>{order.address.street}</p>
                <p>
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country},{" "}
                  {order.address.pinCode || order.address.pincode}
                </p>
              </div>

              <p className="mt-2 text-sm">
                <span className="font-medium">Phone:</span>{" "}
                {order.address.phone}
              </p>
            </div>

            {/* Order Info */}
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Items:</span>{" "}
                {order.items.length}
              </p>

              <p>
                <span className="font-semibold">Method:</span>{" "}
                {order.paymentMethod}
              </p>

              <p>
                <span className="font-semibold">Payment:</span>{" "}
                <span
                  className={
                    order.payment ? "text-green-600" : "text-red-500"
                  }
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>

              <p>
                <span className="font-semibold">Date:</span>{" "}
                {new Date(order.date).toLocaleDateString()}
              </p>

              <p className="font-bold text-lg text-gray-800">
                {currency} {order.amount}
              </p>

              <select onChange={(event)=>statusHandler(event,order._id)}
                defaultValue={order.status}
                className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Order placed">Order placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">
                  Out for delivery
                </option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;