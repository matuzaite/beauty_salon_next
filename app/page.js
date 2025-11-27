import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Specialists from "@/components/Specialists/Specialists";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import LocalBusinessSchema from "@/components/SEO/LocalBusinessSchema";


const Home = () => {
  return (
    <>
      <LocalBusinessSchema />
      <Navbar />
      <Hero />
      <Services />
      <Specialists />
      <Footer />
    </>
  );
};

export default Home;
