import ArrowSquareIcon from "../../assets/images/arrow_square.png";
import BookIcon from "../../assets/images/book.png";
import DiagramIcon from "../../assets/images/diagram.png";

export const WorkSection = () => {
  return (
    <div className="py-20">
      <div className="font-extrabold font-Jakarta md:text-5xl text-3xl mt-4 mb-5 text-[#090909] text-center">
        How does it work?
      </div>
      <div className="bg-[#181818] grid sm:grid-cols-3 grid-cols-1 text-white py-20 rounded-2xl mt-20 text-center gap-4">
        <div className="flex flex-col items-center px-10">
          <img className="sm:w-20 w-16" src={ArrowSquareIcon} alt="arrow" />
          <div className="xl:text-3xl md:text-xl text-base mt-4">
            Select a price package and purchase directly via our website
          </div>
        </div>
        <div className="flex flex-col items-center px-10">
          <img className="sm:w-20 w-16" src={BookIcon} alt="book" />
          <div className="xl:text-3xl md:text-xl text-base mt-4">
            You will then recieve installation instructions (15 mins)
          </div>
        </div>
        <div className="flex flex-col items-center px-10">
          <img className="sm:w-20 w-16" src={DiagramIcon} alt="diagram" />
          <div className="xl:text-3xl md:text-xl text-base mt-4">
            Deposit funds and sit back, let the bot work and earn!
          </div>
        </div>
      </div>
    </div>
  );
};
