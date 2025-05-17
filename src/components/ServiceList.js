import React from "react";
import ServiceItem from "./ServiceItem";

const serviceData = [
  { title: "Graphic Design", description: "Grafik tasarım hizmeti." },
  { title: "Web Design", description: "Web tasarım hizmeti." },
  { title: "UI/UX Design", description: "UI/UX tasarım hizmeti." },
  { title: "App Design & Develop", description: "Uygulama tasarım ve geliştirme." },
  { title: "Business Analysis", description: "İş analizi hizmeti." },
  { title: "SEO Marketing", description: "SEO ve dijital pazarlama." },
];

const ServiceList = () => (
  <section id="services">
    <h2>What I Do?</h2>
    <div className="service-list">
      {serviceData.map((item, idx) => (
        <ServiceItem key={idx} item={item} />
      ))}
    </div>
  </section>
);

export default ServiceList; 