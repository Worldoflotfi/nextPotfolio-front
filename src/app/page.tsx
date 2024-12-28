import HeroSection from "../components/NavBar";
import NavBar from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"


const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection/>
      <ServiceSection/>
      <ProjectSection/>
      <ContactSection/>
      {/* Other sections like About, Projects, etc. */}
    </>
  );
};

export default HomePage;
