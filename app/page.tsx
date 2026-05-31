import { Hero } from "../components/Hero";
import { BrandStatement } from "../components/BrandStatement";
import { ContactSection } from "@/components/ContactSection";
import { ContactMarquee } from "@/components/ContactMarquee";
import { FloatingNavDemo } from "@/components/FloatingNav";
import { LogoTicker } from "@/components/LogoTicker";
import { Disciplines } from "@/components/Disciplines";
import { HowWeWork } from "@/components/HowWeWork";
import { VelocityScrollSection } from "@/components/VelocityScroll";
import { AboutStudio } from "@/components/AboutStudio";
import ShowreelSection from "@/components/ShowreelSection";
import { MeetTheCrew } from "@/components/MeetTheCrew";
import { TestimonialsSection } from "@/components/Testimonials";
import { IndustriesSection } from "@/components/IndustriesSection";
import { FaqSection } from "@/components/FaqSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      
      {/* Floating Navbar */}
      <FloatingNavDemo />

      <main className="flex flex-1 flex-col">
        
        {/* Hero */}
        <section
          id="home"
          className="w-full"
        >
          <Hero />
        </section>

        {/* Showreel Section */}
        <section className="bg-[#0c0c0b] w-full">
          <ShowreelSection />
        </section>

        {/* Brand Statement (Previously Hero) */}
        <section
          id="brand-statement"
          className="w-full bg-white relative z-20"
        >
          <BrandStatement />
        </section>

        {/* What We Do — Disciplines */}
        <section
          id="about"
          className="min-h-screen"
        >
          <Disciplines />
        </section>

        {/* Scroll Velocity Separator */}
        <VelocityScrollSection />

        {/* How We Work */}
        <HowWeWork />

        {/* Industries We Serve */}
        <IndustriesSection />

        {/* About Studio (Bento Grid) */}
        <AboutStudio />

        {/* Meet the Crew */}
        <div id="team">
          <MeetTheCrew />
        </div>

        {/* Testimonials */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* Marquee Separator */}
        <ContactMarquee />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact */}
        <ContactSection />

      </main>
    </div>
  );
}
