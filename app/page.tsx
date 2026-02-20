import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ServicesSection from "./components/servicessection";
import ProjectsSection from "./components/projectssection";
import AboutPreview from "./components/aboutpreview";
import Feedback from "./components/Feedback"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProjectsSection />
      <AboutPreview />
      <Feedback />
    </>
  );
}
