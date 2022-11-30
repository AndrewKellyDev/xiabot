import { useRef, useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export const QuestionAnswer = ({ question, answer }) => {
  const answerRef = useRef(null);
  const [accordionStatus, setAccordionShow] = useState(false);

  const onAccordionToggle = () => {
    if (!accordionStatus) {
      answerRef.current.style.maxHeight = answerRef.current.scrollHeight + "px";
    } else {
      answerRef.current.style.maxHeight = null;
    }
    setAccordionShow(!accordionStatus);
  };

  return (
    <div className="w-full mt-2 md:border-gray-200 border-black border-b py-4">
      <div className="flex justify-between items-center sm:text-xl text-lg font-medium text-gray-900">
        <div>{question}</div>
        <button onClick={() => onAccordionToggle()} className="text-primary">
          {accordionStatus ? <FiMinusCircle /> : <FiPlusCircle />}
        </button>
      </div>
      <div
        className="max-h-0 overflow-hidden transition-all duration-500 origin-top text-gray-900 mt-1"
        ref={answerRef}
      >
        {answer}
      </div>
    </div>
  );
};
