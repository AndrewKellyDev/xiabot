import { QuestionAnswer } from "../../components/QuestionAnswer";
import AvatarGroupImage from "../../assets/images/avatar_group.png";
import ArrowDownImage from "../../assets/images/arrow_down.png";
import { faqData } from "../../utility/data";

export const FaqSection = () => {
  return (
    <div className="py-20 font-Inter" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-gray-900 md:text-4xl text-3xl font-semibold text-center">
          Frequently asked questions
        </div>
        <div className="flex justify-between mb-10">
          <img
            width="60"
            className="invisible"
            src={ArrowDownImage}
            alt="arrow"
          />
          <div className="text-gray-500 text-xl mt-4 text-center relative">
            Everything you need to know about the XIABOT
          </div>
          <img width="60" className="mt-5" src={ArrowDownImage} alt="arrow" />
        </div>

        {faqData.map((data, index) => (
          <QuestionAnswer
            question={data.question}
            answer={data.answer}
            key={index}
          />
        ))}
      </div>

      <div className="bg-black rounded-xl flex flex-col items-center justify-center p-10 mt-32">
        <div>
          <img src={AvatarGroupImage} alt="Avatar Group" />
        </div>
        <div className="text-white font-medium text-xl mt-6">
          Still have questions?
        </div>
        <div className="text-secondary font-lg mt-3 mb-8 text-center">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </div>
        <div>
          <button className="bg-primary rounded py-2 px-5 text-xl font-medium">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};
