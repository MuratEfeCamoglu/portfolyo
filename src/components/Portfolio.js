import React from "react";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  { title: "Project Title 1", category: "Design" },
  { title: "Project Title 2", category: "Brand" },
  { title: "Project Title 3", category: "Photos" },
  // Alt projeler örneği:
  // { title: "Project Title 4", category: "Design", children: [ { title: "Sub Project", category: "Brand" } ] },
];

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portfolio</h2>
    <div className="portfolio-list">
      {portfolioData.map((item, idx) => (
        <PortfolioItem key={idx} item={item} />
      ))}
    </div>
  </section>
);

export default Portfolio; 