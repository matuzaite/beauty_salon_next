"use client";

import { useEffect, useState } from "react";
import "./styles.scss";

const Services = () => {
  const [services, setServices] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/services", { cache: "no-store" });
        if (!res.ok) {
          const payload = await res.json().catch(() => ({}));
          throw new Error(payload.error || `Request failed: ${res.status}`);
        }
        const data = await res.json();
        setServices(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Services API error:", err);
        setErrorMsg("Nepavyko įkelti paslaugų.");
      }
    };

    fetchServices();
  }, []);

  return (
    <div id="services" className="services-list-wrapper">
      <h2>Mūsų Paslaugos</h2>

      {errorMsg && <div className="error-note">{errorMsg}</div>}

      <ul className="services-list">
        {services.map(service => (
          <li className="service-line" key={service.id}>
            <span className="service-name">{service.name}</span>
          </li>
        ))}
      </ul>

      <p className="services-note">
        * Kainos gali skirtis priklausomai nuo plaukų ilgio, sudėtingumo ar papildomų paslaugų.
      </p>
    </div>
  );
};

export default Services
