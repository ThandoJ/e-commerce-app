import Sidebar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"
import card from "../assets/card.png"
import lock from "../assets/lock.png"

export default function AddPayment() {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-100 min-h-screen flex p-6 gap-6">

      <Sidebar />

      <div className="flex-1 flex justify-center items-start">

        <div className="w-full max-w-xl space-y-6">

          {/* SELECT CARD */}
          
         <div className="bg-white rounded-2xl p-6 shadow">
         

            <h2 className="tracking-widest text-lg font-semibold mb-4">
              SELECT A CARD
            </h2>
<div className="space-y-3 text-gray-600">

  <p className="flex items-center gap-3">
    <img src={card} className="w-8 h-5 object-contain" />
    MasterCard ending in 4242
  </p>

  <p className="flex items-center gap-3">
    <img src={card} className="w-8 h-5 object-contain" />
    VISA Debit ending in 2894
  </p>

</div>
          </div>

          {/* ADD NEW CARD */}
          <div className="bg-white rounded-2xl p-6 pb-16 shadow relative">

            <h2 className="tracking-widest text-lg font-semibold mb-6">
              ADD A NEW CARD
            </h2>

            {/* Name */}
            <div className="mb-4">
              <label className="text-gray-500 text-sm">Cardholder Name</label>
              <input
                placeholder="John Maker"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <label className="text-gray-500 text-sm">Card Number</label>
              <input
                placeholder="5126-5987-2214-7621"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>

            {/* Expiry + CVC */}
            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label className="text-gray-500 text-sm">Expiry Date</label>
                <input
                  placeholder="MM / YYYY"
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>

              <div className="w-32">
                <label className="text-gray-500 text-sm">CVC</label>
                <input
                  placeholder="123"
                  className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" />
              <span className="text-gray-600 text-sm">
                Save this as your default payment method
              </span>
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/add-address")}
              className="w-full bg-black text-white py-3 rounded-xl"
            >
              Add Payment Method
            </button>

            {/* Bottom Row */}
            <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-sm">

              <button
                onClick={() => navigate("/checkout")}
                className="text-gray-500"
              >
                Back
              </button>

              <div className="flex items-center gap-2 text-green-600">
                <img src={lock} className="w-5 h-6 object-contain"/>
                <span>Secure Connection</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}