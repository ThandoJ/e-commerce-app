import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearCart } from "../redux/cartSlice"

export default function Checkout(){

    const items = useSelector((state) => state.cart.items );

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    const shipping = 6.99;
    const tax = subtotal * 0.13

    const total = subtotal + shipping + tax;

    return (

        <div className="grid grid-cols-3 gap-8 p-10">

         <div className="col-span-2 space-y-8">

            <div className="bg-white p-6 rounded shadow">

                <h2 className="text-xl font-bold mb-4">
                    Shipping Address
                </h2>

                <input placeholder="Full Name" className="input" />
                <input placeholder="Address" className="input" />
                <input placeholder="City" className="input" />
            </div>

            <div className="bg-white p-6 rounded shadow">

                <h2 className="text-xl font-bold mb-4">
                    Payment Method
                </h2>

                <input placeholder="Card Number" className="input" />
                <input placeholder="Expiry Date" className="input" />
            </div>
         </div>

         <div className="bg-white p-6 rounded shadow">

            <h2 className="text-xl font-bold mb-4">
                Order Summary
            </h2>

            <p>Items: ${subtotal.toFixed(2)} </p>
            <p>Shipping: {shipping} </p>
            <p>Tax: ${tax.tofixed(2)} </p>

            <button className="bg-black text-white w-full mt-4 py-2 rounded">
                Place Order
            </button>
         </div>

        </div>
    )
}