import Navigation from "./components/Navigation";
import Hero from "./sections/Hero";
import Sidebar from "./components/Sidebar";
import About from "./sections/About";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Sidebar />
      </main>
    </>
  );
}
