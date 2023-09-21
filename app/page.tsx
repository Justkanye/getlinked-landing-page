import Footer from "@/components/layouts/Footer";
import FAQs from "@/components/pages/landing/FAQs";
import Hero from "@/components/pages/landing/Hero";
import Introduction from "@/components/pages/landing/Introduction";
import KeyAttributes from "@/components/pages/landing/KeyAttributes";
import RulesAndGuidelines from "@/components/pages/landing/RulesAndGuidelines";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Introduction />
        <RulesAndGuidelines />
        <KeyAttributes />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
