import { useParams } from "react-router-dom";
import products from "../data/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import Sidebar from "../components/Sidebar";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === Number(id));

   if (!product) {
    return <p className="p-10">Product not found</p>
  }

  // ⭐ Star Rating Function
  const renderStars = (rating) => {

    const fullStars = Math.floor(rating)

    return (
      <div className="flex items-center gap-1">

        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-green-500 text-xl">
            ★
          </span>
        ))}

        <span className="text-gray-500 ml-2 text-sm">
          {rating}
        </span>

      </div>
    )
  }

  return (
    <>
      <div className="flex bg-gray-100 p-6">
        <Sidebar />
        <div className="flex flex-col pl-10">
          <div className="h-22 w-10 mt-12">Back</div>
          <div className="flex border-0 border-black border-b-2">
            <div className="flex flex-col gap-2 mr-4">
              
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

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="text-gray-500">
          {product.subtitle}
        </p>

        <p className="text-2xl font-semibold">
          ${product.price}
        </p>

        <div>
          <strong>Rating:</strong>
          {renderStars(product.rating)}
        </div>

        <p>
          <strong>Brand:</strong> {product.brand}
        </p>

        <p>
          <strong>Category:</strong> {product.category}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock} available
        </p>

        <p className="text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <button
          className="bg-black text-white px-6 py-3 rounded-xl w-48 hover:bg-gray-800 transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>

      </div>

    </div>

  

              </div>
            </div>
          
        
      
    </>
  );
}
