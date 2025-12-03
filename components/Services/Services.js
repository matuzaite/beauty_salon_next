"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import "./styles.scss";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Supabase fetch error:", error);
      } else {
        setServices(data || []);
      }
    };

    fetchServices();
  }, []);

  return (
    <div id="services" className="services-list-wrapper">
      <h2>Mūsų Paslaugos</h2>

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
