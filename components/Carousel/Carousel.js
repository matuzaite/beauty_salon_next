"use client";

import "./styles.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

const services = [
  { id: 1, name: "Salon Decor 1", image: "/images/cake.jpg" },
  { id: 2, name: "Salon Decor 2", image: "/images/decor.jpg" },
  { id: 3, name: "Salon Decor 3", image: "/images/flower.jpg" },
  { id: 4, name: "Salon Decor 4", image: "/images/pot.jpg" },
];

const CarouselSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setFade(true);
      }, 500);

    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-section">

      <div className="carousel-container">
        <div className={`carousel-image-wrapper ${fade ? "fade-in" : "fade-out"}`}>
          <Image
            src={services[currentIndex].image}
            alt={services[currentIndex].name}
            width={900}
            height={600}
            priority={currentIndex === 0}
            className="carousel-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
