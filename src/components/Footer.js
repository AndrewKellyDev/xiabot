import LogoImage from "../assets/images/Logo.png";

export const Footer = ({ scrollClick }) => {
  return (
    <div className="border-t border-primary flex justify-center flex-col items-center py-10">
      <div>
        <img width="250px" src={LogoImage} alt="XIABOT" />
      </div>
      <div className="font-Montserrat font-xl font-medium flex gap-10 mt-10 flex-wrap">
        <div className="cursor-pointer" onClick={() => scrollClick("work")}>
          How it works
        </div>
        <div className="cursor-pointer" onClick={() => scrollClick("pricing")}>
          Pricing
        </div>
        <div className="cursor-pointer" onClick={() => scrollClick("faq")}>
          FAQ’S
        </div>
      </div>
    </div>
  );
};
