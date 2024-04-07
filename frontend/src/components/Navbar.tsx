import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/16/solid";
import ccmLogo from "../assets/ccm-logo.png";
import enuguLogo from "../assets/enugu-logo.png";
import { useState } from "react";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="xl:px-[2.38rem] fixed w-full top-2 xl:top-[1.63rem] z-10">
      <nav className="w-full bg-colorI h-[3.6rem] xl:h-[6.2rem] xl:rounded-[0.375rem] px-4 xl:px-12 flex justify-center items-center">
        <div className="mx-auto flex justify-center items-center">
          <div className="w-[2.8rem] xl:w-[6.5rem] h-4 xl:h-[2.3rem]">
            <img
              src={ccmLogo}
              alt="ccmLogo"
              className="w-full h-full object-contain "
              color="black"
            />
          </div>
          <div className="w-24 xl:w-[14.5rem] h-[1.4rem] xl:h-[3.4rem]">
            <img
              src={enuguLogo}
              alt="enugu-state-logo"
              className="w-full h-full object-contain "
              color="black"
            />
          </div>
        </div>
        <button onClick={() => setShowNav(true)} className="" type="button">
          <Bars3BottomRightIcon
            className="w-6 xl:w-8 h-6 xl:h-8"
            color="black"
          />
        </button>

        {showNav ? (
          <section className="top-0 right-0 bottom-0 left-0 bg-black bg-opacity-75 fixed z-30 flex justify-end items-start">
            <div className="w-[16rem] xl:w-[29.43rem] h-full bg-colorI">
              <button
                onClick={() => setShowNav(false)}
                className="absolute top-[1.45rem] xl:top-[2.5rem] right-4 xl:right-[3.75rem]"
              >
                <XMarkIcon className="w-[2.625rem] h-[2.625rem]" />
              </button>
              <ul className="mt-[5.04rem] xl:mt-[8.16rem] w-full pl-[1.34rem] xl:pl-[3.75rem] pr-0 xl:pr-[3.38rem] font-bold text-blackI text-lg xl:text-3xl uppercase flex flex-col justify-start items-start gap-[1.83rem] xl:gap-[2.93rem]">
                <li>Training Resources</li>
                <li>Register</li>
                <li>FAQs</li>
              </ul>
            </div>
          </section>
        ) : null}
      </nav>
    </div>
  );
}
