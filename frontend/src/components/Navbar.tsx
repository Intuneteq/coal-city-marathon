import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import ccmLogo from "../assets/ccm-logo.png";
import enuguLogo from "../assets/enugu-logo.png";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="px-[2.38rem] fixed w-full top-[1.63rem] z-10">
      <nav className="w-full bg-colorI h-[6.2rem] rounded-[0.375rem] px-12 flex justify-center items-center">
        <div className="mx-auto flex justify-center items-center">
          <div className=" w-[6.5rem] h-[2.3rem]">
            <img
              src={ccmLogo}
              alt="ccmLogo"
              className="w-full h-full object-contain "
              color="black"
            />
          </div>
          <div className=" w-[14.5rem] h-[3.4rem]">
            <img
              src={enuguLogo}
              alt="enugu-state-logo"
              className="w-full h-full object-contain "
              color="black"
            />
          </div>
        </div>
        <button onClick={() => setShowNav(true)} className="" type="button">
          <Bars3BottomRightIcon className="w-8 h-8" color="black" />
        </button>

        {showNav ? (
          <section className="absolute w-[29.43rem] h-screen top-0 right-0 bg-colorI">
            <button onClick={() => setShowNav(false)} className="absolute top-[2.5rem] right-[3.75rem]">
              <XMarkIcon className="w-[2.625rem] h-[2.625rem]" />
            </button>
            <ul className="mt-[8.16rem] w-full pl-[3.75rem] pr-[3.38rem] font-bold text-blackI text-3xl uppercase flex flex-col justify-start items-start gap-[2.93rem]">
              <li>Training Resources</li>
              <li>Register</li>
              <li>FAQs</li>
            </ul>
          </section>
        ) : null}
      </nav>
    </div>
  );
}
