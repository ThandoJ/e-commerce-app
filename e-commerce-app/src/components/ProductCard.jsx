import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"
import { Link } from "react-router-dom"
import Button from "../assets/Button.png"

export default function ProductCard({ product }) {

  const dispatch = useDispatch()

  return (

    <div className="flex flex-col items-center">

      {/* White container ONLY for image */}

      <Link to={`/product/${product.id}`}>

        <div className="bg-white p-6 rounded-xl shadow flex justify-center items-center">

          <img
            src={product.image}
            alt={product.name}
            className="w-28 h-28 object-contain"
          />

        </div>

      </Link>

      {/* Product info UNDER the container */}

      <div className="mt-3 text-center">

        <h2 className="font-semibold">{product.name}</h2>

        <p className="text-gray-400 text-sm">{product.subtitle}</p>

      </div>

      {/* Price and Add Button */}

      <div className="flex justify-between items-center w-full mt-2 px-2">

        <p className="font-bold">${product.price}</p>

        <button
          className=" text-white w-10 h-10 rounded-lg flex items-center justify-center"
          onClick={() => dispatch(addToCart(product))}
        >
         <img src={Button} className="w-6 h-6" />
        </button>

      </div>

    </div>
  )
}