import React from "react";

const MenuItem = ({ item }) => (
  <li>
    <a href={item.link}>{item.title}</a>
    {item.children && item.children.length > 0 && (
      <ul>
        {item.children.map((child, idx) => (
          <MenuItem key={idx} item={child} />
        ))}
      </ul>
    )}
  </li>
);

export default MenuItem; 