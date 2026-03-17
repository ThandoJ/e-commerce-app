import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice"
import { Link } from "react-router-dom";
import products from "../data/products";

function Bag(){
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    const subtotal = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

   

    return (
        <div className="bg-gray-100 min-h-screen py-10 px-16">
            <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
                <div className="col-span-2">
                    {items.length === 0 ? (
                        <p className="text-gray-500">Your bag is empty</p>
                    ) : (
                        items.map((item, index) => (
                            <div key={item.id}>
                                <div className="flex items-center justify-between bg-white p-6 rounded-xl mb-6">
                                    {/* Product Image */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-28 h-28 object-contain bg-gray-100 rounded-lg p-2"
                                    />
                                    {/* Product Info */}
                                    <div className="flex-1 ml-6">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-400 text-sm"> {item.subtitle} </p>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                        <p className="mt-2 text-lg font-medium">
                                            ${item.price} x {item.quantity}
                                        </p>
                                    </div>
                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-4 text-xl">
                                        <button
                                            onClick={() => dispatch(decreaseQty(item.id))}
                                            className="text-red-500"
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() => dispatch(increaseQty(item.id))}
                                            className="text-green-600"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                {/* Divider */}
                                {index !== items.length - 1 && (
                                    <hr className="border-gray-300 mb-6" />
                                )}
                            </div>
                        ))
                    )}
                </div>
                <div className="col-span-1 border-l-2 border-black pl-6">
                    <h2 className="text-xl font-bold mb-6 text-center">Bag</h2>
                    <div className="mb-6 text-center">
                        <p className="text-gray-600">Bag Total:</p>
                        <p className="text-xl font-semibold">
                            ${subtotal.toFixed(2)}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 justify-items-center">
                        {items.map((item) => (
                            <img
                                key={item.id}
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 object-contain bg-gray-100 rounded-xl p-2"
                            />
                        ))}
                    </div>
                    <Link to="/checkout">
                        <button className="w-full bg-black text-white p-3 rounded-xl">
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>   
    );
}

export default Bag;