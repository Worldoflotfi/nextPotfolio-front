import HeroSection from "../components/NavBar";
import NavBar from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection"
import ProjectSection from "../components/ProjectSection"

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection/>
      <ServiceSection/>
      <ProjectSection/>
      {/* Other sections like About, Projects, etc. */}
    </>
  );
};

export default HomePage;
