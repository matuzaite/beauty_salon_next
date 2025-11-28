import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Specialists from "@/components/Specialists/Specialists";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import LocalBusinessSchema from "@/components/SEO/LocalBusinessSchema";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";


const Home = () => {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <Hero />
      <ScrollAnimation>
        <Services />
      </ScrollAnimation>
      <ScrollAnimation delay={100}>
        <Specialists />
      </ScrollAnimation>
      <Footer />
    </>
  );
};

export default Home;
