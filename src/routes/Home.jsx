import Faqs from "../components/home/Faqs";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import HowWeWorks from "../components/home/HowWeWorks";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Statistics />
      <HowWeWorks />
      <Testimonials />
      <Faqs />
    </>
  );
}
