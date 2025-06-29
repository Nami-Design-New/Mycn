import Faqs from "../ui/layout/Faqs";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import HowWeWorks from "../components/home/HowWeWorks";
import Testimonials from "../components/home/Testimonials";
import ExperienceSection from "../components/home/Experiences";
import Transportation from "../components/home/Transportation";
import useGetHome from "../hooks/settings/useGetHome";

export default function Home() {
  const { data: home } = useGetHome();

  return (
    <>
      <Hero slides={home?.sliders} />
      <Features features={home?.whyChooseUsDetail} />
      <ExperienceSection experiences={home?.experienceDetail} />
      <Transportation images={home?.deliveryVehiclesDetail} />
      <HowWeWorks data={home?.workProcessDetail} />
      <Testimonials data={home?.testimonialDetail} />
      <Faqs />
    </>
  );
}
