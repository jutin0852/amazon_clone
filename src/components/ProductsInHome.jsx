import Product from "./Product";
import ProductSlide from "./ProductSlide";

const shopDealsInFashion = [
  { img: "images/product/deals1.jpg", name: "jeans under $50" },
  { img: "images/product/deal2.jpg", name: "tops under $25" },
  { img: "images/product/deals3.jpg", name: "dresses under $30" },
  { img: "images/product/deals4.jpg", name: "shoes under $50" },
];
const refreshYourSpace = [
  { img: "images/product/dining.jpg", name: "dining" },
  { img: "images/product/home.jpg", name: "home" },
  { img: "images/product/kitchen.jpg", name: "kitchen" },
  { img: "images/product/health_beauty.jpg", name: "Health and Beauty" },
];

const drugstore = [
  "images/product/drug/drug1.jpg",
  "images/product/drug/drug2.jpg",
  "images/product/drug/drug3.jpg",
  "images/product/drug/drug4.jpg",
  "images/product/drug/drug5.jpg",
  "images/product/drug/drug6.jpg",
  "images/product/drug/drug7.jpg",
  "images/product/drug/drug8.jpg",
  "images/product/drug/drug9.jpg",
  "images/product/drug/drug10.jpg",
  "images/product/drug/drug11.jpg",
  "images/product/drug/drug12.jpg",
  "images/product/drug/drug13.jpg",
];

const pc = [
  "images/product/pc/pc1.jpg",
  "images/product/pc/pc2.jpg",
  "images/product/pc/pc3.jpg",
  "images/product/pc/pc4.jpg",
  "images/product/pc/pc5.jpg",
  "images/product/pc/pc6.jpg",
  "images/product/pc/pc7.jpg",
  "images/product/pc/pc9.jpg",
  "images/product/pc/pc10.jpg",
  "images/product/pc/pc11.jpg",
  "images/product/pc/pc12.jpg",
  "images/product/pc/pc13.jpg",
];

const baby = [
  "images/product/baby/baby1.jpg",
  "images/product/baby/baby2.jpg",
  "images/product/baby/baby3.jpg",
  "images/product/baby/baby4.jpg",
  "images/product/baby/baby5.jpg",
  "images/product/baby/baby6.jpg",
  "images/product/baby/baby7.jpg",

  "images/product/baby/baby8.jpg",
  "images/product/baby/baby9.jpg",
  "images/product/baby/baby10.jpg",
  "images/product/baby/baby11jpg",
  "images/product/baby/baby12.jpg",
  "images/product/baby/baby13.jpg",
];

const deals = [
  "images/product/deals/deal1.jpg",
  "images/product/deals/deal2.jpg",
  "images/product/deals/deal3.jpg",
  "images/product/deals/deal4.jpg",
  "images/product/deals/deal5.jpg",
  "images/product/deals/deal6.jpg",
  "images/product/deals/deal7.jpg",
  "images/product/deals/deal8.jpg",
  "images/product/deals/deal9.jpg",
  "images/product/deals/deal10.jpg",
  "images/product/deals/deal11.jpg",
];

export default function ProductsInHome() {
  return (
    <div>
      <div className="all-products">
        <Product
          name={"Top Deal"}
          percentOff={34}
          singleImg={"images/product/shoe.jpg"}
          seeAllDeals={true}
          productInfo={"Women's Shoes from Coutgo, FISACE, and more"}
        />
        <Product
          singleImg={"images/product/stretch.jpg"}
          name={"Get fit at home"}
          explore={true}
        />
        <Product
          singleImg={"images/product/personal.jpg"}
          name={"Health & Personal Care"}
          link={
            "products?category=beauty-and-personal-care&subcategory=personal-care"
          }
          shopNow={true}
        />
        <Product
          fourImages={shopDealsInFashion}
          name={"Shop deals in fashion"}
          seeMore={true}
        />
        <Product
          name={"Computers & Accessories"}
          singleImg={"images/product/computer.jpg"}
          shopNow={true}
        />
        <Product
          singleImg={"images/product/beauty.jpg"}
          name={"Get fit at home"}
          shopNow={true}
        />
        <Product
          fourImages={refreshYourSpace}
          name={"Refresh Your Space"}
          seeMore={true}
        />
        <Product
          singleImg={"images/product/dresses.jpg"}
          name={"Get fit at home"}
          shopNow={true}
        />
        <ProductSlide
          products={drugstore}
          title={"Frequently repurchased in Drugstore"}
        />
        <ProductSlide
          products={pc}
          title={"Popular products in PC internationally"}
        />
        <Product
          singleImg={"images/product/home_fresh.jpg"}
          name={"Home refresh ideas"}
          shopNow={true}
        />
        <Product
          singleImg={"images/product/strip_lights.jpg"}
          name={"Create with strip lights"}
          seeMore={true}
        />
        <Product
          singleImg={"images/product/trends.jpg"}
          name={"Discover fashion Trends"}
          seeMore={true}
        />
        <Product
          singleImg={"images/product/laptop.jpg"}
          name={"Shop laptops and tablet"}
          shopNow={true}
        />
        <ProductSlide products={baby} title={"Popular gifts in Baby "} />
        <Product
          singleImg={"images/product/tools.jpg"}
          name={"Deals in tools and Home improvement"}
          shopNow={true}
        />
        <Product
          singleImg={"images/product/fitness.jpg"}
          name={"For your Fitness Needs"}
          seeMore={true}
        />
        <Product
          singleImg={"images/product/pets.jpg"}
          name={"Shop Pet supplies"}
          seeMore={true}
        />
        <Product
          singleImg={"images/product/spring.jpg"}
          name={"Spring new arrivals"}
          shopNow={true}
        />
      </div>
    </div>
  );
}
