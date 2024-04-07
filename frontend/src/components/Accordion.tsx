import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Accordion() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-white rounded-[1.25rem] text-blackI py-5 px-[1.875rem] w-full h-auto">
      <div className="flex justify-between items-start">
        <div className="flex justify-start items-start text-blackI text-[2rem] 2xl:text-[2.5rem] font-semibold uppercase">
          <p>1.</p>
          <p>When is the Coal City Marathon scheduled to take place?</p>
        </div>
        {!toggle ? (
          <button type="button" onClick={() => setToggle(!toggle)}>
            <PlusIcon className="w-[2.625rem] h-[2.625rem]" />
          </button>
        ) : (
          <button type="button" onClick={() => setToggle(!toggle)}>
            <MinusIcon className="w-[2.625rem] h-[2.625rem]" />
          </button>
        )}
      </div>
      {toggle ? (
        <p className="text-[1.5rem] 2xl:text-[1.625rem] text-blackI uppercase ml-4 mt-[1.25rem]">
          The Coal City Marathon is scheduled for May 4th, 2024.
        </p>
      ) : null}
    </div>
  );
}
