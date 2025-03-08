'use client'
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import MyWork from "@/components/MyWork";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";
export default function Home() {
  return (
<>
<Navbar></Navbar>
<Hero></Hero>
<About></About>
<TechStack></TechStack>
<Gallery></Gallery>
<MyWork></MyWork>
<Contact></Contact>
<Footer></Footer>

</>    
  );
}
