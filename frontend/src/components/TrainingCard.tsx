import { useState } from "react";
import UploadIcon from "../icons/UploadIcon";
import { motion, useAnimation } from "framer-motion";

export default function TrainingCard() {
  const [showCardDeets, setShowCardDeets] = useState(false);
  const h6Controls = useAnimation();

  const handleHoverStart = () => {
    setShowCardDeets(true);
    h6Controls.start({ y: -30 });
  };

  const handleHoverEnd = () => {
    setShowCardDeets(false);
    h6Controls.start({ y: 0 });
  };

  return (
    <div
    onMouseEnter={handleHoverStart}
    onMouseLeave={handleHoverEnd}
      className="w-full lg:w-[21rem] xl:w-[23.5rem] 2xl:w-[28rem] h-[37.1875rem] px-[1.25rem] py-[2.5rem] bg-plan bg-cover bg-no-repeat rounded-2xl cursor-pointer relative flex flex-col justify-end items-start"
    >
      <motion.h6
       animate={showCardDeets ? { y: -30 } : { y: 0 }}
       transition={{ ease: "linear", duration: 0.3 }}
        className="text-white text-[2.5rem] font-extrabold uppercase"
      >
        Training <br />
        Plan
      </motion.h6>
      {showCardDeets ? (
        <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
          className="w-full"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "linear", duration: 0.5 }}
            className="text-white text-lg font-medium"
          >
            Whether you're a beginner or experienced runner, we offer customized
            20km marathon training plans. Each plan, tailored for all levels,
            features weekly mileage goals and diverse workouts to boost your
            performance and help you achieve your goals.
          </motion.p>
          <div className="w-full mt-6">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="w-full h-14 py-4 px-[0.625rem] bg-white rounded-[1.25rem] flex justify-center items-center text-blackI gap-[0.62rem]"
            >
              <UploadIcon />
              <span className="text-xl font-medium">Download</span>
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
