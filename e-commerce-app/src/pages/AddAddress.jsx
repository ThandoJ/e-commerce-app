import Sidebar from "../components/Sidebar"
import { useNavigate } from "react-router-dom"
import lock from "../assets/lock.png"


export default function AddAddress() {


  const navigate = useNavigate()


  return (
    <div className="bg-gray-100 min-h-screen flex p-6 gap-6">


      <Sidebar />


      <div className="flex-1 flex justify-center items-center">


        <div className="bg-white p-8 pb-16 rounded-2xl shadow w-full max-w-xl relative">


          {/* Form */}
          <div className="space-y-4">


            <div>
              <label className="text-gray-500 text-sm">Shipping Name</label>
              <input
                placeholder="John Maker"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>


            <div>
              <label className="text-gray-500 text-sm">Street Name</label>
              <input
                placeholder="123 Plae Grond Stret"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>


            <div>
              <label className="text-gray-500 text-sm">City</label>
              <input
                placeholder="Vermont"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>


            <div>
              <label className="text-gray-500 text-sm">State / Province</label>
              <input
                placeholder="California"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>


            <div>
              <label className="text-gray-500 text-sm">Country</label>
              <input
                placeholder="United States of America"
                className="w-full mt-1 p-3 rounded-xl bg-gray-100 outline-none"
              />
            </div>


          </div>


          {/* Checkbox */}
          <div className="flex items-center gap-2 mt-6 mb-6">
            <input type="checkbox" />
            <span className="text-gray-600 text-sm">
              Save this as your default address
            </span>
          </div>


          {/* Button */}
          <button
            onClick={() => alert("Order Placed!")}
            className="w-full bg-black text-white py-3 rounded-xl"
          >
            Add Address
          </button>


          {/* Bottom Row */}
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center text-sm">


            <button
              onClick={() => navigate("/add-payment")}
              className="text-gray-500"
            >
              Back
            </button>


           
                      <div className="flex items-center gap-2 text-green-600">
                          <img src={lock} className="w-5 h-6 object-contain" />
                          <span>Secure Connection</span>
                      </div>




          </div>


        </div>


      </div>


    </div>
  )
}

