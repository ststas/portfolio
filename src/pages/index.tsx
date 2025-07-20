import { Geist, Geist_Mono } from "next/font/google";

import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Introduction from "@/components/Introduction/Introduction";
import Projects from "@/components/Projects/Projects";
import TechStack from "@/components/TechStack/TechStack";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} min-h-screen bg-[#d3d3d3]`}>
      <Header />
      <main>
        <Introduction />
        <About />
        <TechStack />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
