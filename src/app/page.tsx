import Hero from "@/features/landing/components/Hero";
import LogoStrip from "@/features/landing/components/LogoStrip";
import Catalog from "@/features/catalog/components/Catalog";
import Categories from "@/features/catalog/components/Categories";
import Features from "@/features/landing/components/Features";
import CTA from "@/features/landing/components/CTA";
import Testimonials from "@/features/landing/components/Testimonials";
import Footer from "@/features/landing/components/Footer";

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
