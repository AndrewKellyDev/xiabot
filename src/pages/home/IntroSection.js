import { GoTriangleUp } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { ProgressBar } from "../../components/ProgressBar";

export const IntroSection = () => {
  return (
    <div className="xl:px-20 lg:px-10 px-0 flex md:flex-row flex-col-reverse pt-40 pb-10 gap-10 md:items-start items-center">
      <div className="bg-[#181818] rounded-2xl p-8 text-white max-w-md shadow w-full">
        <div className="flex justify-between">
          <div className="text-sm font-medium">Profit this month</div>
          <div className="text-xs text-primary flex items-center font-bold">
            <GoTriangleUp />
            +22.45%
          </div>
        </div>
        <div className="text-bold text-4xl mt-4">£682.5</div>
        <div className="text-primary flex items-center gap-1 font-bold mt-3">
          <FaCheckCircle />
          On track
        </div>
        <div className="flex mt-16 justify-between">
          {[60, 40, 80, 50, 70, 85, 20].map((percent, index) => (
            <ProgressBar percent={percent} key={index} />
          ))}
        </div>
      </div>

      <div className="w-full md:text-left text-center">
        <div className="font-extrabold font-Jakarta md:text-5xl text-3xl mt-4 mb-5 text-[#090909]">
          A Premium trading Experience
        </div>
        <div className="md:text-3xl text-xl text-[#171717]">
          XIABOT is the most effective bot on the market, This software is the
          Life’s work of our development team and it provides traders of all
          skill levels an automated trading opportunity that can both be safe
          and aggressive.
        </div>
      </div>
    </div>
  );
};
