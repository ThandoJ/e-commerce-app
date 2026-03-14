import { useParams } from "react-router-dom"
import products from "../data/products"
import { useDispatch } from "react-redux"
import { addToCart } from "../redux/cartSlice"

export default function ProductPage() {

  const { id } = useParams()
  const dispatch = useDispatch()

  const product = products.find(p => p.id === Number(id))

  return (

    <div className="p-10 flex gap-10">

      {/* Product Image */}

      <img
        src={product.image}
        className="w-80 object-contain"
      />

      {/* Product Info */}

      <div className="flex flex-col gap-4">

        <h1 className="text-3xl font-bold">{product.name}</h1>

        <p className="text-gray-500">{product.subtitle}</p>

        <p className="text-xl font-semibold">${product.price}</p>

        <p><strong>Brand:</strong>  {product.brand} Apple</p>

        <p><strong>Category:</strong> {product.category} </p>

        <p><strong>Rating:</strong>  {product.rating}</p>

        <p><strong>Stock:</strong> {product.stock} available</p>

        <p className="text-gray-600">{product.description}</p>

        <button
          className="bg-black text-white px-6 py-3 rounded-lg w-40"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

      </div>

    </div>
  )
}