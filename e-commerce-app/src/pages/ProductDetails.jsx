import { useParams } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Sidebar from "../components/Sidebar";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      <div className="flex bg-gray-100 p-6">
        <Sidebar />
        <div className="flex flex-col pl-10">
          <div className="h-22 w-10 mt-12">Back</div>
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

            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">{product.name}</p>

              <p className="text-3xl font-medium text-gray-500">
                {product.subtitle}
              </p>

              <p className="text-2xl text-green-700">{product.rating}./5</p>

              <p className="text-3xl font-medium">${product.price}</p>

              <p className="text-gray-600">{product.description}</p>


        <p className="text-xl font-semibold">${product.price}</p>

        <p><strong>Brand:</strong>  {product.brand} </p>

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

              <div className="w-full flex justify-end mb-8">
                <button
                  className="bg-black text-white px-6 py-3 rounded-lg w-40"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
