// LandCard.js
import React from "react";


const LandCard = ({ land }) => {
  return (
    <div className="land-card">
      <img src={land.image} alt={land.name} className="land-image" />
      <div className="land-details">
        <h3>{land.name}</h3>
        <p>{land.location}</p>
        <p><strong>Price:</strong> ${land.price}</p>
        <button className="buy-button">Buy Now</button>
      </div>
    </div>
  );
};

export default LandCard;
