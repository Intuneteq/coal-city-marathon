import { useState } from "react";
import UploadIcon from "../icons/UploadIcon";

export default function TrainingCard() {
  const [showCardDeets, setShowCardDeets] = useState(false);
  return (
    <div
      onMouseEnter={() => setShowCardDeets(true)}
      onMouseLeave={() => setShowCardDeets(false)}
      className="w-full lg:w-[21rem] xl:w-[23.5rem] 2xl:w-[28rem] h-[37.1875rem] px-[1.25rem] py-[2.5rem] bg-plan bg-cover bg-no-repeat rounded-2xl cursor-pointer relative flex flex-col justify-end items-start"
    >
      <h6 className="text-white text-[2.5rem] font-extrabold uppercase">
        Training <br />
        Plan
      </h6>
      {showCardDeets ? (
        <div className="w-full">
          <p className="text-white text-lg font-medium">
            Whether you're a beginner or experienced runner, we offer customized
            20km marathon training plans. Each plan, tailored for all levels,
            features weekly mileage goals and diverse workouts to boost your
            performance and help you achieve your goals.
          </p>
          <div className="w-full mt-6">
            <button className="w-full h-14 py-4 px-[0.625rem] bg-white rounded-[1.25rem] flex justify-center items-center text-blackI gap-[0.62rem]">
              <UploadIcon />
              <span className="text-xl font-medium">Download</span>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
