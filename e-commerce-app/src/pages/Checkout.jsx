import products from "../data/products";
import card from "../assets/card.png"
import gift from "../assets/gift.png"


import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom"


const Checkout = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [billingChecked, setBillingChecked] = useState(true);

  const enrichedItems = items.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...item, image: product?.image };
  });

  const subtotal = enrichedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 6.99
  const gst = subtotal * 0.13;
  const total = subtotal + shipping + gst;

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    return (
        <div className="flex items-center gap-1">
            {[...Array(full)].map((_, i) => (
                <span key={i} className="text-green-700 text-xl">★</span>
            ))}
            {half && <span className="text-green-700 text-xl">✩</span>}
            <span className="text-green-700 ml-2 text-sm"> {rating} / 5 </span>
            </div>
            )
  }


  return (
    <div className="bg-gray-100 min-h-screen p-6 gap-6">


    <div className="grid grid-cols-1. lg:grid-cols-3 gap-10">
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


          <Link to="/add-address">
          <button className="border px-6 py-2 rounded-full">
            Change
          </button>
         </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 flex justify-between items-start">

          <div>
          <h2 className="text-2xl tracking-widest font-semibold mb-6">
            PAYMENT METHOD
          </h2>

         <div className="flex items-center gap-3 mb-3">
          <img src={card} className="w-6 h-6" alt="card" />
          <span>
            <span className="font-semibold">Mastercard</span>{" "}
            <span className="text-gray-400">ending in 1252</span>
          </span>
         </div>

         <div className="flex items-center gap-3 mb-3">
          <img src={gift} className="w-6 h-6" alt="gift" />
          <span>
            <span className="font-semibold">$ 53.21</span>{" "}
            <span className="text-gray-400">gift card balance</span>
          </span>
         </div>

          <div className="flex items-center gap-3">
            <div 
            onClick={() => setBillingChecked(!billingChecked)}
            className={`transition-all duration-200 rounded cursor-pointer border-2 ${
              billingChecked
              ? "w-5 h-6 bg-green-700 border-green-700"
              : "w-6 h-6 bg-white border-gray-400"
            }`} />
            <span>Billing address same as Shipping Address</span>
          </div>
          </div>

        <Link to="/add-payment">
          <button className="border px-6 py-2 rounded-lg">
            Change
          </button>
</Link>
        </div>
        
        <div className="bg-white rounded-2xl p-8">

          <h2 className="text-2xl tracking-widest font-semibold mb-8">
            REVIEW YOUR BAG
          </h2>

       {enrichedItems.map((item) => (
  <div key={item.id} className="mb-10">

    <div className="flex justify-between items-center">

      {/* Left side */}
      <div className="flex gap-8">

        {/* Image */}
        <img
          src={item.image}
          className="w-32 h-32 object-contain"
          alt={item.name}
        />

        {/* Text */}
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
          <div className=" mt-3">
           {renderStars(item.rating)}
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

      <div>
      <div className="bg-white p-8 rounded-2xl shadow mb-4">
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
          <span className="font-semibold text-red-500">Order Total:</span>
          <span className="font-semibold text-red-500">${total.toFixed(2)}</span>
        </div>

       <button
         onClick={() => navigate("/add-payment")}
         className="w-full bg-black text-white py-3 rounded-lg mb-4">
            Place your Order
       </button>
       </div>
        
        <Link to="/bag" className=" flex justify-end mt-4">
        <button className="border border-gray-400 py-2 px-8 rounded-full">
          ← Back
          </button>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Checkout;
