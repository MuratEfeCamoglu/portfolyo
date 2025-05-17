import React from "react";

const ServiceItem = ({ item }) => (
  <div className="service-item">
    <h4>{item.title}</h4>
    <p>{item.description}</p>
    {item.children && item.children.length > 0 && (
      <div className="service-children">
        {item.children.map((child, idx) => (
          <ServiceItem key={idx} item={child} />
        ))}
      </div>
    )}
  </div>
);

export default ServiceItem; 