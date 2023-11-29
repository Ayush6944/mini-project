import React from "react"
import {useParams} from "react-router-dom"
// import ProductsData from "./productsData"
import ProductsData from "./product/ProductsData"
// import <qr className="png"></qr>
const products= ProductsData
function ProductDetail() {
    const {productId} = useParams()
    // // const {productname} = useParams()
    // const thisProduct = ProductsData.find(prod => prod.price === productId)
    
    return (
        <div>
            <h1 className="m-10 bg-orange-200 text-center
            ">Please pay Rs.{productId}  to following QR</h1>
            <div>
                <img src="logo.png" alt="hj" />
            </div>
            
        </div>
    )
}

export default ProductDetail