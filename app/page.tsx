import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Sidebar />
      </main>
    </>
  );
}
