import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LogoImage from "../assets/images/Logo.png";

export const Navbar = ({ scrollClick }) => {
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  return (
    <div className="flex justify-between items-center py-4">
      <img width="200" src={LogoImage} alt="XIABOT" />
      <div className="font-Montserrat font-xl font-medium gap-10 md:flex hidden">
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
      <button className="bg-primary rounded py-2 px-5 text-xl font-medium md:block hidden">
        Get started
      </button>
      <button
        className="md:hidden block z-20 text-2xl text-primary"
        onClick={() => {
          setHamburgerStatus(!hamburgerStatus);
        }}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className={
          "md:hidden flex flex-col fixed right-0 bg-white top-0 bottom-0 justify-center items-center text-center transition-all duration-500 overflow-hidden " +
          (!hamburgerStatus ? "left-full -right-40" : "left-0 right-0")
        }
        onClick={() => setHamburgerStatus(false)}
      >
        <div className="cursor-pointer" onClick={() => scrollClick("work")}>
          How it works
        </div>
        <div
          className="cursor-pointer mt-4"
          onClick={() => scrollClick("pricing")}
        >
          Pricing
        </div>
        <div className="cursor-pointer mt-4" onClick={() => scrollClick("faq")}>
          FAQ’S
        </div>
        <button className="bg-primary rounded py-2 px-5 text-xl font-medium mt-4">
          Get started
        </button>
      </div>
    </div>
  );
};
