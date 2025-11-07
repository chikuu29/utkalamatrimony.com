import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Features></Features>
      <Footer></Footer>
    </main>
  );
}
