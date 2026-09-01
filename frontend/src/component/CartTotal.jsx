import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="pb-3 border-b border-gray-200">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
          Order Summary
        </p>

        <h2 className="text-2xl font-medium">
          <Title text1={"CART"} text2={"TOTALS"} />
        </h2>
      </div>

      <div className="flex flex-col gap-3 mt-5 text-sm">
        <div className="flex justify-between text-gray-600">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>

        <div className="flex justify-between pt-3 border-t border-gray-200">
          <b className="text-base">Total</b>
          <b className="text-base">
            {currency}{" "}
            {getCartAmount() === 0
              ? 0
              : getCartAmount() + delivery_fee}
            .00
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;