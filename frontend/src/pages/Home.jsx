import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Subjects from "../components/home/Subjects";
import LatestNotes from "../components/home/LatestNotes";
import Features from "../components/home/Features";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Subjects />
      <LatestNotes />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
      <Dashboard />
    </>
  );
}