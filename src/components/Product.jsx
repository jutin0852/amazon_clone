import React from "react";
import "../styles/product.scss";
import { Link } from "react-router-dom";



export default function Product({
  name,
  topDeal,
  percentOff,
  singleImg,
  productInfo,
  seeAllDeals,
  explore,
  shopNow,
  seeMore,
  fourImages
}) {
  return (
    <div className="product">
      <h2>{name}</h2>
      <div className="product-details">
        {singleImg && <img src={singleImg} alt="shoe" />}

        {!singleImg && (
          <div className="four-images">
            {fourImages.map((img) => (
              <div className="content" key={img.name}>
                <img src={img.img} alt="" />
                <p>{img.name}</p>
              </div>
            ))}
          </div>
        )}

        {percentOff && (
          <span className="percent-off">{`Up to ${percentOff}% off`}</span>
        )}
        {topDeal && <strong className="top-deal">Top Deal</strong>}
        {productInfo && <p className="product-info"> {productInfo}</p>}
      </div>
      <div className="more">
        {seeAllDeals && <Link>see all deals</Link>}
        {explore && <Link>Explore</Link>}
        {shopNow && <Link>Shop now</Link>}
        {seeMore && <Link>See more</Link>}
      </div>
    </div>
  );
}

