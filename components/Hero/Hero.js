import CarouselSection from "../Carousel/Carousel";
import "./styles.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-text">
        <h2>Aukštos Kokybės Paslaugos</h2>
        <p>
          Mes suteikiame geriausias grožio paslaugas, naudodami modernias
          technologijas ir profesionalias technikas. Jūsų pasitikėjimas yra mūsų
          prioritetas.
        </p>
      </div>
      <CarouselSection />
    </div>
  );
};
export default About;
