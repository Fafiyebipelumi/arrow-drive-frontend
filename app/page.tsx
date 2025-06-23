import Aboutpage from "@/components/About/Aboutpage";
import Features from "@/components/Features/Features";
import HeroWithFooter from "@/components/Footer/Footer";
import Homepage from "@/components/Home/Homepage";
import HowItWorks from "@/components/How-it-works/How-it-works";


export default function Home() {
  return (
    <div>
      <Homepage />
      <Aboutpage />
      <Features />
      <HowItWorks />
      <HeroWithFooter />
    </div>
  );
}
