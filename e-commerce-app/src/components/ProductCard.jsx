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

        <div className="bg-white p-1 rounded-xl shadow w-44 flex items-center justify-center">

          <img
            src={product.image}
            alt={product.name}
            className="w-38 h-42 object-contain"
          />

        </div>

      </Link>

      {/* Product info UNDER the container */}

      <div className="mt-4 text-left w-40">

        <h2 className="font-semibold">{product.name}</h2>

        <p className="text-gray-400 text-sm">{product.subtitle}</p>

      </div>

      {/* Price and Add Button */}

      <div className="flex justify-between items-center w-36 mt-3">

        <p className="font-bold">${product.price}</p>

        <button
          className=" flex items-center justify-center"
          onClick={() => dispatch(addToCart(product))}
        >
         <img src={Button} className="w-7 h-7" />
        </button>

      </div>

    </div>
  )
}