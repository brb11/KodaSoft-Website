import Aurora from "./components/Aurora";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Services from "./sections/Services";
import About from "./sections/About";
import Process from "./sections/Process";
// import Work from "./sections/Work";
// import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useDirection } from "./hooks/useDirection";

export default function App() {
  useDirection();

  return (
    <div className="grain relative">
      <ScrollProgress />
      <CursorGlow />
      <Aurora />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <About />
        <Process />
        {/* <Work />
        <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
