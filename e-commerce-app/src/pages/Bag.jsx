import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice"
import { Link } from "react-router-dom";

 function Bag(){

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const shipping = 6.99;
    const gst = subtotal * 0.13;
    const total = subtotal + shipping + gst

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-16">
            <div className="grid grid-cols-3 gap-10">
            <div className="col-span-2">
                {items.map((item, index) => (
                    <div key={item.id}>
                        <img src={item.image} alt={item.name} className="w-32 object-contain" />
                        <div className="flex-1">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <p className="text-gray-500">{item.color}</p>
                            <p className="text-gray-600">{item.description}</p>
                        </div>

                        {/* Rating, Price, and Quantity */}
                        <div>
                            <div className="flex items-center gap-2 mt-3 text-green-600">
                                <span>★ ★ ★ ★ ☆ </span>
                                <span className="text-gray-700">
                                    {item.rating} / 5
                                </span>
                                {/* Price */}
                                <p className="mt-3 text-lg">
                                    ${item.price} x {item.quantity}
                                </p>
                            </div>
                            {/* Quantity */}
                            <div className="flex items-center gap-4 text-xl">
                                <button onClick={() => dispatch(decreaseQty(item.id))} className="text-red-500">
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => dispatch(increaseQty(item.id))} className="text-green-600">
                                    +
                                </button>
                            </div>
                        </div>

                        // eslint-disable-next-line no-undef, no-undef
                        {index !== items.length - 1 && (
                            <hr className="border-gray-300" />
                        )}
                    </div>
                ))}
            </div>
            <div className="bg-white p-8 rounded-2xl shadow h-fit">
                <h2 className="text-xl font-bold mb-6">
                    Order Summary
                </h2>

                <div className="flex justify-between mb-3">
             <span>Items:</span>
             <span>${subtotal.toFixed(2)} </span>
                </div>

                <div className="flex justify-between mb-3">
             <span>Shipping:</span>
             <span>${shipping} </span>
                </div>

                <div className="flex justify-between mb-3">
             <span>Estimated GST:</span>
             <span>${gst.toFixed(2)} </span>
                </div>

                <div className="flex justify-between mb-3">
             <span>Gift Card:</span>
             <span>$0.00 </span>
                </div>

                <hr className="mb-4" />

                <div className="flex justify-between mb-3">
             <span>Order Total:</span>
             <span>${total.toFixed(2)} </span>
                </div>

                <Link to="/checkout" className="block text-center bg-green-900 text-white py-3 rounded-lg mb-4">
                Place your order
                </Link>

                <Link to="/" className="block text-center border border-gray-400 py-2 rounded-lg">
                ← Back
                </Link>
                </div>
            </div>
        </div>
    );
}

export default Bag;