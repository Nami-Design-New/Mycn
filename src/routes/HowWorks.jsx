import Steps from "../components/home/Steps";
import useGetAbout from "../hooks/settings/useGetAbout";
import HowWeWorks from "./../components/home/HowWeWorks";

export default function HowWorks() {
  const { data: about } = useGetAbout();

  return (
    <>
      <Steps />
       <HowWeWorks data={about?.workProcessDetail} head={about?.mainWorkProcess} />
    </>
  );
}
