import Sidebar from "../components/Sidebar";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";
import React from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 6.99
  const gst = subtotal * 0.13;
  const total = subtotal + shipping + gst;
  return (
    <div className="bg-gray-100 min-h-screen py-10">

<Sidebar />

    <div className="grid grid-cols-3 gap-10">
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

          <div key={item.id}>


            <img src={item.image} className="w-24 h-24 object-contain" />

            <div className="ml-6 flex-1">

              <h3 className="text-lg font-semibold">{item.name}</h3>

            <p className="text-gray-500">{item.color}</p>

              <p className="text-gray-600">{item.description}</p>

              <div className="flex items-center gap-2 mt-2 text-green-600">
              <span> ★ ★ ★ ★ ☆</span>
              <span className="text-gray-700">
                {item.rating} / 5
              </span>
              </div>

              <p className="mt-2">
                ${item.price} x {item.quantity}
              </p>

            </div>


            {/* Quantity */}
            <div className="flex items-center gap-4 text-xl">
              <button onClick={() => dispatch(decreaseQty(item.id))} className="text-red-500">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => dispatch(increaseQty(item.id))} className="text-green-600">+</button>
            </div>
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

        <button className="w-full bg-green-900 text-white py-3 rounded-lg mb-4">
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
