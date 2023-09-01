import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { products } from "../components/allProducts";
import "../styles/ProductDetailsPage.scss";

function ProductDetailsPage() {
  const { productName, category, productImgs } = useLoaderData();
  console.log(productName);
  const [imgPreview, setImgPreview] = useState(productImgs.detailsImg[0]);

  return (
    <div className="product-details-page">
      <p>{`${category.categoryName} > ${category.subCategory.categoryName}`}</p>

      <div className="img-preview">
        <div className="small-img-preview">
          {productImgs.detailsImg.map((img, index) => (
            <div className="small-img" onMouseEnter={(e) => {setImgPreview(img)}}>
              <img src={img} key={index} alt={img} />
            </div>
          ))}
        </div>
        <div className='big-img-preview'>
          <img src={imgPreview} alt="" />
        </div>
      </div>
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
