import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../redux/cartSlice"
import { Link } from "react-router-dom";
import products from "../data/products";
import icon from "../assets/Icon.png";
import Sidebar from "../components/Sidebar"

function Bag(){
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.items);

    
     const enrichedItems = items.map((item) => {
    const product = products.find((p) => p.id === item.id);
    return { ...item, image: product?.image };
  });

  const subtotal = enrichedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
        <div className="bg-gray-100 flex  p-6 gap-6">

            <Sidebar />

            <div className="flex-1">

        <h1 className="text-4xl font-bold mb-8">Check your Bag Items</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div className="col-span-1 lg:border-l-2 border-gray-300 lg:pl-8">
          {enrichedItems.length === 0 ? (
            <p className="text-gray-500">Your bag is empty</p>
          ) : (
            enrichedItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center justify-between bg-white p-6 rounded-xl mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-40 h-40 object-contain"
                  />
                                    {/* Product Info */}
                                    <div className="flex-1 ml-6">
                                        <h2 className="text-xl font-semibold">{item.name}</h2>
                                        <p className="text-gray-400 text-sm"> {item.subtitle} </p>
                                        <p className="text-gray-600 text-sm">{item.description}</p>

                                        {renderStars(item.rating)}

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

                <div className="col-span-1 border-l-2 border-gray-300 pl-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">Bag</h2>

                    <div className="grid grid-cols-3 gap-3 mb-6">
            {enrichedItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-2 flex items-center justify-center">
              <img
                key={item.id}
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-contain"
              />
              </div>
            ))}
        </div>

                    <div className="flex justify-between mb-6 items-center">
                        <p className="text-gray-600">Bag Total:</p>
                        <p className="text-xl font-semibold">
                            ${subtotal.toFixed(2)}
                        </p>
                        </div>

                    
                    <Link to="/checkout">
                        <button className="w-full bg-black text-white p-3 rounded-xl flex items-center justify-center gap-2">
                            <img src={icon} className="w-6 h-6" />
                            Checkout
                        </button>
                    </Link>
                </div>

            </div>
        </div>
        </div>  
    );
}

export default Bag;