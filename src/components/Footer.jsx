import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

const footer = [
  [
    { value: "Careers", to: "" },
    { value: "Blog", to: "" },
    { value: "About Amazon", to: "" },
    { value: "Investor Relations", to: "" },
    { value: "Amazon Devices", to: "" },
    { value: "Amazon Science", to: "" },
  ],
  [
    { value: "Sell products on Amazon", to: "" },
    { value: "Sell on Amazon Business", to: "" },
    { value: "Sell apps on Amazon", to: "" },
    { value: "Become an Affiliate", to: "" },
    { value: "Self-Publish with Us", to: "" },
    { value: "Host an Amazon Hub", to: "" },
    { value: "›See More Make Money with Us", to: "" },
  ],
  [
    { value: "Amazon Business Card", to: "" },
    { value: "Shop with Points", to: "" },
    { value: "Reload Your Balance", to: "" },
    { value: "Amazon Currency Converter", to: "" },
  ],
  [
    { value: "Amazon and COVID-19", to: "" },
    { value: "Your Account", to: "" },
    { value: "Your Orders", to: "" },
    { value: "Shipping Rates & Policies", to: "" },
    { value: "Returns & Replacements", to: "" },
    { value: "Manage Your Content and Devices", to: "" },
    { value: "Amazon Assistant", to: "" },
    { value: "Help", to: "" },
  ],
];

function Footer() {

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="footer">
      <div onClick={backToTop} className="footer1">
        Back to top
      </div>

      <div className="footer2">
        <div className="footer2-container">
          <ul>
            <h3>Get to Know Us</h3>
            {footer[0].map((footer, index) => (
              <li key={index}>
                <Link>{footer.value}</Link>
              </li>
            ))}
          </ul>

          <ul>
            <h3>Make money with Us</h3>
            {footer[1].map((footer,index) => (
              <li key={index}>
                <Link>{footer.value}</Link>
              </li>
            ))}
          </ul>

          <ul>
            <h3>Amazon Payments Products</h3>
            {footer[2].map((footer, index) => (
              <li key={index}>
                <Link>{footer.value}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <h3>Amazon Payments Products</h3>
            {footer[3].map((footer,index) => (
              <li key={index}>
                <Link>{footer.value}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
