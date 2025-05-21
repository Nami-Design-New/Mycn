import Faqs from "../ui/layout/Faqs";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import HowWeWorks from "../components/home/HowWeWorks";
// import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import Clients from "../components/home/Transportation";
import ExperienceSection from "../components/home/Experiences";
import Transportation from "../components/home/Transportation";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ExperienceSection />
       <Transportation />
      {/* <Statistics /> */}
      <HowWeWorks />
      <Testimonials />
      <Faqs />
    </>
  );
}
