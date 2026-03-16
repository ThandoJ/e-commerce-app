import { useParams } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import icon from "../assets/icon.png";

import Sidebar from "../components/Sidebar";

export default function ProductPage() {
  // ⭐ Star Rating Function
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-green-700 text-2xl">
            ★
          </span>
        ))}

        <span className="text-gray-500 ml-2 text-sm">{rating}/5</span>
      </div>
    );
  };

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));
  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <div className="flex bg-gray-100 p-6">
        <Sidebar />
        <div className="flex flex-col pl-10">
          <Link to="/">
            <div className="h-22 w-10 mt-12">Back</div>
          </Link>
          <div className="flex border-0 border-black border-b-2">
            <div className="flex flex-col gap-2 mr-4">
              <img
                src={product.image}
                className="h-12.5 w-12.5 object-contain"
              />
              <img
                src={product.image}
                className="h-12.5 w-12.5 object-contain"
              />
              <img
                src={product.image}
                className="h-12.5 w-12.5 object-contain"
              />
            </div>
            <div className="flex gap-10">
              {/* Product Image */}

              <img
                src={product.image}
                className="h-80 w-68 mr-8 object-contain"
              />
            </div>

            {/* Product Info */}

            <div className="flex flex-col gap-5 max-w-lg">
              <h1 className="text-3xl font-bold">{product.name}</h1>

              <p className="text-gray-500">{product.subtitle}</p>



                <div>
                  {renderStars(product.rating)}
                </div>


              <p className="text-3xl font-medium">${product.price}</p>

              <p className="text-gray-600">{product.description}</p>

              <div className="w-full flex justify-end mb-8">
                <button
                  className="bg-black text-white px-6 py-3 rounded-lg w-40 cursor-pointer"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-medium mt-8 mb-2">Description</h1>
          <p className="text-sm font-400 text-gray-800 w-121">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea saepe
            ipsum sequi, expedita delectus, magni voluptas provident ipsam
            doloribus consectetur neque dicta. Natus tenetur quaerat laborum
            facilis, fugit voluptates cum?
          </p>
        </div>
        {/* Bag Section */}

        <div className="w-64 border-l-2 border-black pl-6 ml-15 mt-12">
          <h2 className="text-xl font-bold mb-6 text-center">Bag</h2>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {cart.map((item) => (
              <img
                key={item.id}
                src={item.image}
                className="w-14 h-14 object-contain bg-gray-100 rounded-lg"
              />
            ))}
          </div>

          <Link to="/checkout">
            <button className="w-full bg-black text-white p-3 rounded-xl flex items-center justify-center gap-2">
              <img src={icon} className="w-6 h-6" />
              View Bag
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
