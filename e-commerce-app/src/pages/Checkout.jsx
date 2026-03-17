import Sidebar from "../components/Sidebar";
import products from "../data/products";
import DellXPS13 from "../assets/Dell XPS 13.png"
import card from "../assets/card.png"
import gift from "../assets/gift.png"


import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";
import React from "react";
import { useNavigate } from "react-router-dom"
const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate()

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 6.99
  const gst = subtotal * 0.13;
  const total = subtotal + shipping + gst;


  return (
    <div className="bg-gray-100 min-h-screen flex p-6 gap-6">

<Sidebar />

    <div className="grid grid-cols-3 flex-1 gap-10">
      <div className="col-span-2 space-y-8">
        <div className="bg-white rounded-2xl p-8 flex justify-between items-start">
          <div>
            
        <h2 className="text-2xl tracking-widest font-semibold mb-6">
          SHIPPING ADDRESS
        </h2>

        <p className="text-lg">John Maker</p>
        <p>123 Plae Ground </p>
        <p>Vermont, California </p>
        <p>United States of America</p>

          </div>

          <button className="border px-6 py-2 rounded-lg">
            Change
          </button>

        </div>

        <div className="bg-white rounded-2xl p-8 flex justify-between">

          <div>
          <h2 className="text-2xl tracking-widest font-semibold mb-6">
            PAYMENT METHOD
          </h2>

          <p className="mb-2">
            💳 Mastercard ending in 1252
          </p>

          <p className="mb-2">
            🎁 $53.21 gift card balance
          </p>

          <p>
            ☑ Billing address same as Shipping Address
          </p>
          </div>

          <button className="border px-6 py-2 rounded-lg">
            Change
          </button>

        </div>

        <div className="bg-white rounded-2xl p-8">

          <h2 className="text-2xl tracking-widest font-semibold mb-8">
            REVIEW YOUR BAG
          </h2>

       {items.map((item) => (
  <div key={item.id} className="mb-10">

    <div className="flex justify-between items-center">

      {/* LEFT SIDE */}
      <div className="flex gap-8">

        {/* IMAGE */}
        <img
          src={item.image}
          className="w-32 h-32 object-contain"
          alt={item.name}
        />

        {/* TEXT CONTENT */}
        <div className="flex flex-col justify-center">

          <h2 className="text-2xl font-semibold">
            {item.name}
          </h2>

          <p className="text-gray-500 text-lg">
            {item.subtitle}
          </p>

          <p className="text-gray-600 mt-2 max-w-md">
            {item.description}
          </p>

          {/* RATING */}
          <div className="flex items-center gap-3 mt-3 text-green-700 text-lg">
            <span>★ ★ ★ ★ ☆</span>
            <span className="text-gray-600 text-base">
              {item.rating} / 5
            </span>
          </div>

          {/* PRICE */}
          <p className="mt-4 text-lg">
            ${item.price} x {item.quantity}
          </p>

        </div>
      </div>

      {/* RIGHT SIDE (QUANTITY) */}
      <div className="flex items-center gap-6 text-xl pr-6">

        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          className="text-red-500 text-2xl"
        >
          -
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() => dispatch(increaseQty(item.id))}
          className="text-green-600 text-2xl"
        >
          +
        </button>

      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-b border-gray-300 mt-8"></div>

  </div>
))}
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow h-fit">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

        <div className="flex justify-between mb-3">
          <span>Items:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

         <div className="flex justify-between mb-3">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>

         <div className="flex justify-between mb-3">
          <span>Estimated GST</span>
          <span>${gst.toFixed(2)}</span>
        </div>

         <div className="flex justify-between mb-3">
          <span>Gift Card:</span>
          <span>$0.00</span>
        </div>

        <hr className="my-4" />

         <div className="flex justify-between mb-3">
          <span>Order Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>

       <button
         onClick={() => navigate("/add-payment")}
         className="w-full bg-green-900 text-white py-3 rounded-lg mb-4">
            Place your Order
       </button>
        
        <Link to="/bag" className="block text-center border border-gray-400 py-2 rounded-lg">
          ← Back
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
