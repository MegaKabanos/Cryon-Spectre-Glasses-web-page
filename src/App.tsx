import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import UseCases from "./components/UseCases";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import TechSpecsSheet from "./components/TechSpecsSheet";
import CallToAction from "./components/CallToAction";
import { useEffect } from "react";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    return () => lenis.destroy();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <ImageSlider />
      <UseCases />
      <TechSpecsSheet />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
