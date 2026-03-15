import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/cartSlice"
import { Link } from "react-router-dom";

export default function Bag(){

    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="grid grid-cols-3 gap-8 p-10">
            <div className="col-span-2">
                {items.map((item) => (
                    <div key={item.id} className="flex mb-6 bg-white p-4 rounded">
                        <img src={item.image} className="w-24 h-24 object-cover" />
                        <div className="ml-6 flex-1">
                            <h3 className="font-bold">{item.name}</h3>
                            <p className="text-gray-500">{item.description}</p>
                            <p>${item.price}</p>
                        </div>
                        {/* Quantity */}
                        <div className="flex items-center gap-4">
                            <button onClick={() => dispatch(decreaseQty(item.id))}>
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increaseQty(item.id))}>
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">
                    Bag
                </h2>
                <p className="mb-4">
                    Total: ${total.toFixed(2)}
                </p>
                <Link to="/checkout" className="bg-black text-white px-6 py-2 rounded">
                    Checkout
                </Link>
            </div>
        </div>
    )
}