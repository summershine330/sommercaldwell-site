import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Speaking from "@/components/Speaking";
import Consulting from "@/components/Consulting";
import BookSommer from "@/components/BookSommer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <About />
      <Speaking />
      <Consulting />
      <BookSommer />
      <Footer />
    </>
  );
}
