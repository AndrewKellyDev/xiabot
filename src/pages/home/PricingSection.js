import { useState } from "react";
import { PlanCard } from "../../components/PlanCard";

export const PricingSection = () => {
  const [activeCard, setActiveCard] = useState(2);

  return (
    <div className="py-10" id="pricing">
      <div className="font-Jakarta sm:text-5xl text-3xl font-bold text-center">
        Simple
        <span className="text-primary">,</span>
        easy pricing
      </div>
      <div className="font-Inter text-xl text-gray-500 mt-10 mb-20 text-center sm:block hidden">
        Only difference between our two packages is that one enables you to run
        two bots simultaneously. This is for those wanting one account to
        compound/save and another to withdraw as they please
      </div>
      <div className="font-Inter text-xl text-gray-500 mt-10 mb-20 text-center sm:hidden block">
        Personal or enterprise?
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <PlanCard
          type="personal"
          active={activeCard === 1}
          setActiveCard={() => setActiveCard(1)}
        />
        <PlanCard
          type="enterprise"
          active={activeCard === 2}
          setActiveCard={() => setActiveCard(2)}
        />
      </div>
    </div>
  );
};
