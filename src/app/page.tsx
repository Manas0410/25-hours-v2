import { Banner } from "@/Sections/banner";
// import { AppImages } from "@/Sections/app-images";
// import Image from "next/image";
// import { NavBar } from "@/Sections/nav-bar";
import { Features } from "@/Sections/features";
import { SpotlightSection } from "@/Sections/spotlightContent";
// import { AboutTeam } from "@/Sections/aboutteam";
// import { AboutAIFeat } from "@/Sections/aboutAIfeatures";
import { MainNavbar } from "@/Sections/navbar";
import { Pricing } from "@/Sections/pricing";
import { Testimonials } from "@/Sections/testimonials";
import { Footer } from "@/Sections/footer";
import { Contact } from "@/Sections/contact";
import { AboutShort } from "@/Sections/aboutShort";
import { AboutTeam } from "@/Sections/aboutteam";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <Banner />
      <Features />
      <SpotlightSection />
      {/* <AboutTeam /> */}
      {/* <AboutAIFeat /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <div id="contact"></div>
        <Contact />
      <AboutShort />
      {/* <AppImages /> */}
      <Footer />
    </>
  );
}
