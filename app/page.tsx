import Footer from "@/components/layouts/Footer";
import Hero from "@/components/pages/landing/Hero";
import Introduction from "@/components/pages/landing/Introduction";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Introduction />
      </main>
      <Footer />
    </>
  );
}
