import React from "react";

const PortfolioItem = ({ item }) => (
  <div className="portfolio-item">
    <h4>{item.title}</h4>
    <p>{item.category}</p>
    {item.children && item.children.length > 0 && (
      <div className="portfolio-children">
        {item.children.map((child, idx) => (
          <PortfolioItem key={idx} item={child} />
        ))}
      </div>
    )}
  </div>
);

export default PortfolioItem; 