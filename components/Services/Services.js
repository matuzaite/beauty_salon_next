"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import "./styles.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("/api/services")
      .then(res => setServices(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div id="services" className="services-list-wrapper">
      <h2>Mūsų Paslaugos</h2>

      <ul className="services-list">
        {services.map(service => (
          <li className="service-line" key={service.id}>
            <span className="service-name">{service.name}</span>
            <span className="service-price">{service.price} €</span>
          </li>
        ))}
      </ul>

      <p className="services-note">
        * Kainos gali skirtis priklausomai nuo plaukų ilgio, sudėtingumo ar papildomų paslaugų.
      </p>
    </div>
  );
};

export default Services;