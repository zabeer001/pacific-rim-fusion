import React from "react";

const Cart = () => {
  return (
    <div>
      <EmptyCart />
    </div>
  );
};

export default Cart;

const EmptyCart = () => {
  return (
    <div>
      <h3 className="font-semibold text-[32px] leading-[38.4px] text-center text-primary-green-hover">
        Sorry
      </h3>
      <p className="font-normal text-[20px] leading-[24px] text-center text-gray-500">
        Your shopping cat is Empty!
      </p>
    </div>
  );
};
