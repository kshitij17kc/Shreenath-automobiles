import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import AIAssistantTeaser from "../components/AIAssistantTeaser";
import AIAssistant from "../components/AIAssistant";









export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs /> 
       <Stats />
       <Testimonials />  
      <Services />
        <HowItWorks /> 
        <AIAssistantTeaser /> 
      <Gallery />
       <AIAssistant /> 
      <Location />
    </>
  );
}
