import HeroImage from "../../assets/images/hero.png";
import { Card } from "../../components/Card";

export const HeroSection = () => {
  return (
    <div>
      <div className="flex py-10 justify-between md:flex-row flex-col">
        <div className="py-10 md:text-left text-center">
          <div className="font-Jakarta font-bold sm:text-5xl text-3xl">
            Forex trader
            <br /> in your pocket
          </div>
          <div className="mt-10 mb-5">
            Profit from forex trading, without becoming a forex trader, <br />
            XIABOT is the AI that generate trades on your behalf.
          </div>
          <button className="bg-primary rounded py-2 px-5 text-xl font-medium">
            Get started
          </button>
        </div>
        <div className="xl:max-w-2xl lg:max-w-lg md:max-w-sm">
          <img src={HeroImage} alt="XIABOT" />
        </div>
      </div>
      <div className="relative mb-32">
        <Card
          rotation="-4"
          text="Passive income"
          zIndex="4"
          className="md:left-0 md:right-[73%]"
        />
        <Card
          rotation="1"
          text="200+ Customers"
          zIndex="3"
          className="md:left-1/4 md:right-[48%] md:top-14"
        />
        <Card
          rotation="-2"
          text="£7m trading volume"
          zIndex="2"
          className="md:left-1/2 md:right-[23%]"
        />
        <Card
          rotation="2"
          text="93% Success Rate"
          zIndex="1"
          className="md:left-[73%] md:right-0 md:top-14"
        />
      </div>
    </div>
  );
};
