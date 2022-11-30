import ResultImageOne from "../../assets/images/result_1.png";
import ResultImageTwo from "../../assets/images/result_2.png";
import ResultImageThree from "../../assets/images/result_3.png";
import ArrowDown from "../../assets/images/arrow_down_left.png";

export const JudgeSection = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="text-center flex justify-between">
        <img width="30" className="mt-10" src={ArrowDown} alt="arrow down" />
        <div className="text-center">
          <div className="font-Jakarta font-bold md:text-5xl sm:text-3xl text-2xl">
            Judge us on our Results
          </div>
          <div className="font-Inter sm:text-xl text-md text-gray-500 mt-8">
            Opt for low risk or high perfomance settings
          </div>
        </div>
        <img
          width="30"
          className="invisible"
          src={ArrowDown}
          alt="arrow down"
        />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-20">
        <img src={ResultImageOne} alt="result" />
        <img src={ResultImageTwo} alt="result" />
        <img className="w-full" src={ResultImageThree} alt="result" />
      </div>
    </div>
  );
};
