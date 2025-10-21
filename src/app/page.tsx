import { Banner } from "@/Sections/banner";
import { AppImages } from "@/Sections/app-images";
import Image from "next/image";
import { NavBar } from "@/Sections/nav-bar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Banner />
      <AppImages />
    </>
  );
}
