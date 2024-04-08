import { useState } from "react";
import UploadIcon from "../icons/UploadIcon";
import { motion, useAnimation } from "framer-motion";

type Props = {
  resource: {
    id: number;
    title: string;
    img: string;
    description: string;
    resource: string;
  };
};

export default function TrainingCard({ resource }: Props) {
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
      className={`w-full lg:w-[21rem] xl:w-[23.5rem] 2xl:w-[28rem] h-[37.1875rem] px-[1.25rem] py-[2.5rem] bg-cover bg-center bg-no-repeat rounded-2xl cursor-pointer relative flex flex-col justify-end items-start ${resource.img}`}
    >
      <motion.h6
        animate={showCardDeets ? { y: -30 } : { y: 0 }}
        transition={{ ease: "linear", duration: 0.3 }}
        className="text-white text-[2.5rem] font-extrabold uppercase max-w-[18rem]"
      >
        {resource.title}
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
            {resource.description}
          </motion.p>
          <div className="w-full mt-6">
            <motion.a
              href={resource.resource}
              download
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.5 }}
              className="w-full h-14 py-4 px-[0.625rem] bg-white rounded-[1.25rem] flex justify-center items-center text-blackI gap-[0.62rem]"
            >
              <UploadIcon />
              <span className="text-xl font-medium">Download</span>
            </motion.a>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
}
