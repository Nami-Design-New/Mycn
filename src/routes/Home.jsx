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
      <Features features={home?.whyChooseUsDetail} head={home?.mainWhyChooseUs}/>
      <ExperienceSection experiences={home?.experienceDetail} head={home?.mainExperience} />
      <Transportation images={home?.deliveryVehiclesDetail} head={home?.mainDeliveryVehicles} />
      <HowWeWorks data={home?.workProcessDetail} head={home?.mainWorkProcess} />
      <Testimonials data={home?.testimonialDetail} head={home?.mainTestimonial} />
      <Faqs />
    </>
  );
}
