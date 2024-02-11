import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Artworks from "./sections/Artworks";
import FeaturedProjects from "./sections/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="darkmode overflow-x-hidden bg-white dark:bg-asphalt md:overflow-x-visible">
        <Sidebar />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <FeaturedProjects />
        <Artworks />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
