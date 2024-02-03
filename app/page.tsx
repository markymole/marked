import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Expertise from "./sections/Expertise";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Sidebar />
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
