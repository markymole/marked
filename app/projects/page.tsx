import Navigation from "../components/Navigation";
import Projects from "../sections/Projects";

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="darkmode min-h-screen overflow-x-hidden bg-white dark:bg-asphalt md:overflow-x-visible">
        <Projects></Projects>
      </main>
    </>
  );
}
