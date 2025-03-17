

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./details.css"; // Ensure CSS has responsive styles

function Details() {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  const handlesubmit = () => {
    navigate("/Conformation");
  };

  console.log("Product Data:", product); // Debugging log

  if (!product) {
    return (
      <div className="no-product">
        No product found. Please go back to the{" "}
        <a href="/" className="home-link">
          home page
        </a>.
      </div>
    );
  }

  return (
    <div className="details-page homebg">
      <div className="details-container">
        <div className="details-section">
          {/* Image Section */}
          {product.img ? (
            <img
              src={product.img.startsWith("http") ? product.img : `${process.env.PUBLIC_URL}/${product.img}`}
              alt={product.name}
              className="pro-image"
              onError={(e) => (e.target.src = "/img/default-placeholder.png")} // Fallback image
            />
          ) : (
            <img src="/img/default-placeholder.png" className="pro-image" alt="Default" />
          )}

          {/* Product Info */}
          <h2 className="p-4">{product.name}</h2>
          <h5>PLOT AREA: {product.PlotArea}</h5>
          <p className="details-price">
            <b>PRICE:</b> {product.price}
          </p>
          <div className="p-4">
            <b>Owner:</b> {product.Owner}
          </div>
          <p>
            <b>Details: </b> {product.Details}
          </p>

          {/* Button */}
          <div>
            <button type="submit" className="btn-primary" onClick={handlesubmit}>
              View Phone Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
