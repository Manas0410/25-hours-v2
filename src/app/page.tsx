import { Banner } from "@/Sections/banner";
import { AppImages } from "@/Sections/app-images";
import Image from "next/image";
import { NavBar } from "@/Sections/nav-bar";
import { Features } from "@/Sections/features";
import { SpotlightPreview } from "@/Sections/abouttasks";
import { AboutTeam } from "@/Sections/aboutteam";
import { AboutAIFeat } from "@/Sections/aboutAIfeatures";
import { MainNavbar } from "@/Sections/navbar";

export default function Home() {
  return (
    <>
      <MainNavbar />
      <Banner />
      <Features />
      <SpotlightPreview />
      <AboutTeam />
      <AboutAIFeat />
      <AppImages />
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
      <div className="h-[100vh]"></div>
    </>
  );
}
