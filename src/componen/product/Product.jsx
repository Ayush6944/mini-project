import React from "react";
import { Link } from "react-router-dom";
import productsdata from "./product";
import ProductsData from "./ProductsData";
// import products from "./products";
export default function Product() {
 
  const products= ProductsData
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most popular products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={[product.imageSrc||product.thumbnail] }
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                {/* <img src={product.images} alt=""  className="h-full w-full object-cover object-center lg:h-full lg:w-full" */}
                {/* /> */}
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name} {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Rs.{product.price}</p>
               </div>
                <div>
                <Link to={`/payment/${product.price}`}><button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-orange-100 text-lg shadow">
    <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span class="relative text-black group-hover:text-white">Buy Now</span>
  </button></Link>
                </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
