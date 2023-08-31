import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { products } from "../components/allProducts";

function ProductDetailsPage() {
  const {productName } = useLoaderData();
  console.log(productName);

  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
}

export function loader({ params }) {
  let { productName } = params;
  const productDetail = products.find(
    (product) => productName === product.productName
  );
  return productDetail;
}

export default ProductDetailsPage;
