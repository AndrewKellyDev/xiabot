import { useRef } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { IntroSection } from "./IntroSection";
import { JudgeSection } from "./JudgeSection";
import { ReviewSection } from "./ReviewSection";
import { PricingSection } from "./PricingSection";
import { WorkSection } from "./WorkSection";

export const Home = () => {
  const pricingSecRef = useRef(null);
  const faqSecRef = useRef(null);
  const homeRef = useRef(null);
  const workSecRef = useRef(null);

  const scrollClick = (val) => {
    switch (val) {
      case "pricing":
        pricingSecRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "faq":
        faqSecRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "work":
        workSecRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background scroll-smooth	">
      <div className="lg:px-[8%] px-[5%]" ref={homeRef}>
        <Navbar scrollClick={scrollClick} />
        <HeroSection />
        <IntroSection />
        <div ref={workSecRef}>
          <WorkSection />
        </div>
        <div ref={faqSecRef}>
          <FaqSection />
        </div>
        <JudgeSection />
        <div ref={pricingSecRef}>
          <PricingSection />
        </div>
        <ReviewSection />
      </div>
      <Footer scrollClick={scrollClick} />
    </div>
  );
};
