import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
};

export default function Accordion({ faq }: Props) {
  const [toggle, setToggle] = useState(false);

  const { id, question, answer } = faq;

  return (
    <div className="bg-white rounded-[1.25rem] text-blackI py-5 px-[1.875rem] w-full h-auto">
      <div className="flex justify-between items-start">
        <div className="flex justify-start items-start text-blackI text-[0.875rem] xl:text-[1.875rem] 2xl:text-[2.5rem] font-semibold uppercase gap-1">
          <p>{id}.{" "}</p>
          <p>{question}</p>
        </div>
        {!toggle ? (
          <button type="button" onClick={() => setToggle(!toggle)}>
            <PlusIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
          </button>
        ) : (
          <button type="button" onClick={() => setToggle(!toggle)}>
            <MinusIcon className="w-6 xl:w-[2.625rem] h-6 xl:h-[2.625rem]" />
          </button>
        )}
      </div>
      <AnimatePresence>
        {toggle ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <p className="text-[0.75rem] xl:text-[1.5rem] 2xl:text-[1.625rem] text-blackI uppercase ml-5 mt-[1.25rem] text-opacity-60">
              {answer}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
