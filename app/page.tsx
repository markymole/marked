import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";
import Slidebox from "./components/Slidebox";
import Experience from "./sections/Experience";
import Expertise from "./sections/Expertise";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Sidebar />
        <Hero />
        <Expertise />
        <About />
        <Experience />
      </main>
    </>
  );
}
