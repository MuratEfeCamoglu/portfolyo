import React from "react";
import MenuItem from "./MenuItem";

const menuData = [
  { title: "Ana sayfa", link: "#home" },
  { title: "Ben kimim?", link: "#about" },
  { title: "Neler yapabilirim?", link: "#services" },
  { title: "Portfolyo", link: "#portfolio" },
  {
    title: "İletişim",
    link: "#contact"
  },
];

const Menu = () => (
  <nav>
    <ul>
      {menuData.map((item, idx) => (
        <MenuItem key={idx} item={item} />
      ))}
    </ul>
  </nav>
);

export default Menu; 