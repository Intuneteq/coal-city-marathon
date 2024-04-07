import { useState } from "react";

export default function TrainingCard() {
  const [showCardDeets, setShowCardDeets] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowCardDeets(true)}
      onMouseLeave={() => setShowCardDeets(false)}
      className="w-[21rem] xl:w-[23.5rem] 2xl:w-[28rem] h-[37.1875rem] px-[1.25rem] py-[2.5rem] bg-plan bg-cover bg-no-repeat rounded-2xl cursor-pointer relative flex justify-start items-end"
    >
      <h6 className="text-white text-[2.5rem] font-extrabold uppercase">
        Training <br />
        Plan
      </h6>
      {showCardDeets ? (
        <div className="">
          <p className="text-white text-2xl">wow</p>
        </div>
      ) : null}
    </div>
  );
}
