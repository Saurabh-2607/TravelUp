import Image from "next/image";
import HeroSection from "./Sections/HeroSection";
import Category from "./Sections/Category";
import RecentArticles from "./Sections/RecentArticles";
import PromoProducts from "./Sections/PromoProducts";

export default function Home() {
  return (
    <>
        <HeroSection/>
        <Category/>
        <RecentArticles/>
        <PromoProducts/>
        

    </>
  );
}
