import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Catalog from "@/components/Catalog";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <Catalog />
      <Categories />
      <Features />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
