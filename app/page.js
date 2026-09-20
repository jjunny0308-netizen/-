import Header from "./components/Header";
import QuickRail from "./components/QuickRail";
import Hero from "./components/Hero";
import Values from "./components/Values";
import About from "./components/About";
import CollabTeaser from "./components/CollabTeaser";
import Services from "./components/Services";
import Location from "./components/Location";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <QuickRail />
      <Hero />
      <About />
      <Values />
      <CollabTeaser />
      <Services />
      <Location />
      <Footer />
    </>
  );
}
