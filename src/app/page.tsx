import { Banner } from "@/Sections/banner";
import { AppImages } from "@/Sections/app-images";
import Image from "next/image";
import { NavBar } from "@/Sections/nav-bar";
import { Features } from "@/Sections/features";
import { SpotlightPreview } from "@/Sections/abouttasks";
import { AboutTeam } from "@/Sections/aboutteam";
import { AboutAIFeat } from "@/Sections/aboutAIfeatures";
import { MainNavbar } from "@/Sections/navbar";
import { Pricing } from "@/Sections/pricing";
import { Testimonials } from "@/Sections/testimonials";
import { Footer } from "@/Sections/footer";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <Banner />
      <Features />
      <SpotlightPreview />
      <AboutTeam />
      <AboutAIFeat />
      <Testimonials />
      <Pricing />
      {/* <AppImages /> */}
      <Footer />
    </>
  );
}
