import Clients from "@/components/modules/clients";
import HeroSection from "@/components/modules/hero";
import HrInfo from "@/components/modules/hrInfo";
import HrFeatures from "@/components/modules/hrFeatures";
import HrApp from "@/components/modules/hr-app";
import HrAppB from "@/components/modules/hr-appB";
import Faq from "@/components/modules/faq";
import MarqueeSlider from "@/components/modules/clients/client";
import ClientsMarquee from "@/components/modules/clients";

export default function Home() {
  return (
    <div >
      
        <HeroSection/>
        <ClientsMarquee/>
        
        <HrInfo/>
        <HrFeatures/>
        <HrApp/>
        <HrAppB/>
        <Faq/>
     
    </div>
  );
}
