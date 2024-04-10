import Navbar from "./components/Navbar";
import mile from "./assets/mile.png";
import mileMobile from "./assets/mile-mobile.png"
import map from "./assets/map.png";
import prize from "./assets/prize.png";
import enugu from "./assets/enugu.png";
import prizeMobile from "./assets/prize-mobile.png";
import route from "./assets/route.png";

import "./index.css";
import RegisterForm from "./components/RegisterForm";
import TrainingCard from "./components/TrainingCard";
import Accordion from "./components/Accordion";
import InstagramIcon from "./icons/InstagramIcon";
import FacbookIcon from "./icons/FacbookIcon";
import { useEffect, useState } from "react";

function App() {
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getFullYear(), 4, 4); // April is represented by 3 (zero-based index)
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const [time, setTime] = useState(timeDifference);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  function padToTwoDigits(number: number) {
    return number < 10 ? "0" + number : number;
  }

  const getFormattedDate = () => {
    const total_seconds = Math.floor(time / 1000);
    const total_min = Math.floor(total_seconds / 60);
    const totalHrs = Math.floor(total_min / 60);
    const days = Math.floor(totalHrs / 24);

    const secs = total_seconds % 60;
    const minutes = total_min % 60;
    const hours = totalHrs % 24;

    return {
      secs,
      minutes: padToTwoDigits(minutes),
      hours: padToTwoDigits(hours),
      days: padToTwoDigits(days),
    };
  };

  return (
    <main className="w-full max-w-screen-2xl font-inter scroll-smooth mx-auto">
      <header className="bg-headerImg bg-center bg-no-repeat bg-cover w-full min-h-screen pb-[9.42rem] pt-[16.63rem] flex flex-col justify-center items-center">
        <Navbar />

        <div className="w-72 flex justify-center items-center bg-white bg-opacity-20 rounded-[3.75rem] py-[0.62rem]">
          <p className="text-white text-lg font-medium">
            Coal City Half Marathon
          </p>
        </div>
        <h5 className="text-white text-[2.375rem] xl:text-6xl font-black uppercase mt-[0.44rem] xl:mt-4">
          Run the Extra
        </h5>

        <div className="w-full h-[10.562rem] flex justify-center items-center xl:hidden">
          <img src={mileMobile} alt="mile" className="w-full h-full object-cover" />
        </div>
        <div className="hidden w-full h-[16.25rem] xl:flex justify-center items-center">
          <img src={mile} alt="mile" className="w-full h-full object-cover" />
        </div>

        <a
          href="#register"
          className="flex justify-center items-center w-[23.8125rem] h-[4.125rem] py-4 rounded-xl bg-colorII text-lg font-semibold text-blackI uppercase hover:bg-opacity-80 transition duration-700"
        >
          Join the Race
        </a>
      </header>

      <section id="join-race" className="w-full mt-[-3.5rem]">
        <div className="bg-colorIII rounded-t-[3.75rem] pt-[1.86rem] px-4 xl:px-[4.28rem] pb-[4.25rem] xl:pb-[7.13rem]">
          <article className="flex justify-between xl:justify-center xl:gap-[20px] items-start w-full text-[3.75rem] xl:text-[10rem] xl:h-[18rem]">
            <div className="flex flex-col justify-between items-center h-full">
              <h2 className="text-center stroke-3 font-black xl:text-[12rem] 2xl:text-[16.25rem]">
                {getFormattedDate().days}
              </h2>
              <h5 className="text-black text-xl xl:text-[3.75rem] font-black uppercase h-auto">
                Days
              </h5>
            </div>
            <h2 className="text-center stroke-3 font-black h-full">:</h2>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center stroke-3 font-black xl:text-[12rem] 2xl:text-[16.25rem]">
                {getFormattedDate().hours}
              </h2>
              <p className="text-black text-xl xl:text-[3.75rem] font-black uppercase">
                Hours
              </p>
            </div>
            <h2 className="text-center stroke-3 font-black h-full">:</h2>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center stroke-3 font-black xl:text-[12rem] 2xl:text-[16.25rem]">
                {getFormattedDate().minutes}
              </h2>
              <p className="text-black text-xl xl:text-[3.75rem] font-black uppercase">
                Minutes
              </p>
            </div>
          </article>

          <article className="w-full flex flex-col xl:flex-row justify-between items-start gap-[3.31rem] mt-12 xl:mt-[17.75rem]">
            <h1 className="text-black text-[2.5rem] xl:text-[10rem] max-w-[10rem] xl:max-w-none font-black uppercase flex-1">
              About Mara <br /> thon
            </h1>
            <p className="flex-1 text-black text-base xl:text-[1.75rem] font-semibold xl:leading-[3.15188rem] uppercase leading-[1.68rem]">
              The Coal City Marathon, <b>established in 2018</b>, has become a
              standout event in our region. fueled by a vision of{" "}
              <b>inspiring a healthier lifestyle</b> and{" "}
              <b>fostering a strong sense of community.</b> Our mission is to
              create a lasting experience that promotes not only physical
              fitness but also <b>unity</b> and a deep appreciation for the{" "}
              <b>rich cultural heritage</b> of Enugu State.
            </p>
          </article>

          <article className="w-full mt-[1.55rem] xl:mt-[5.37rem] flex flex-col items-center justify-center">
            <div className="h-auto xl:h-[43.8rem] w-full">
              <img
                src={map}
                alt="route map"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full mt-[0.63rem] xl:mt-[1.57rem] h-[3.8rem]">
              <img
                src={route}
                alt="route image"
                className="w-full h-full object-contain"
              />
            </div>
          </article>
        </div>
      </section>

      <section id="register" className="w-full bg-colorIII">
        <div className="w-full bg-colorII rounded-t-[3.75rem] pt-[4.63rem] xl:pt-[7.5rem] px-[1.12rem] xl:px-[3.875rem] pb-[3.38rem] flex flex-col xl:flex-row justify-between items-start gap-12 xl:gap-3">
          <h1 className="text-black font-black uppercase text-[2.5rem] xl:text-[10rem] flex-1">
            Regis
            <br />
            ter
          </h1>
          <div className="flex-1 w-full xl:w-auto">
            <RegisterForm />
          </div>
        </div>
      </section>

      <section className="w-full bg-colorII">
        <div className="w-full bg-colorI rounded-t-[3.75rem] pt-[4.63rem] xl:pt-[7.5rem] px-[1.12rem] xl:px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[2.5rem] xl:text-[5.625rem] uppercase font-black xl:text-center max-w-[10rem] xl:max-w-none mb-[3.29rem] xl:mb-[6rem] 2xl:mb-[9.2rem]">
            Prizes to be won
          </h2>

          <div className="w-full hidden xl:flex flex-col xl:flex-row justify-start items-center">
            <div className="w-full xl:w-[66%] h-[43rem]">
              <img
                src={prize}
                alt="prize"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full xl:w-[34%]">
              <div className="mb-[3.15rem]">
                <small className="text-blackI text-[1.4869rem] font-bold uppercase">
                  First PLACE
                </small>
                <p className="text-blackI font-extrabold uppercase text-[3.125rem]">
                  ₦1,000,000
                </p>
              </div>
              <div className="mb-[3.15rem]">
                <small className="text-blackI text-[1.4869rem] font-bold uppercase">
                  second PLACE
                </small>
                <p className="text-blackI font-extrabold uppercase text-[3.125rem]">
                  ₦500,000
                </p>
              </div>
              <div>
                <small className="text-blackI text-[1.4869rem] font-bold uppercase">
                  third PLACE
                </small>
                <p className="text-blackI font-extrabold uppercase text-[3.125rem]">
                  ₦300,000
                </p>
              </div>
            </div>
          </div>

          <div className="xl:hidden h-[18rem] w-full mt-12 mb-20">
            <img
              src={prizeMobile}
              alt="prize"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      <section id="training-resource" className="w-full bg-colorI">
        <div className="w-full bg-colorIV rounded-t-[3.75rem] pt-[4.7rem] xl:pt-[8.81rem] px-4 xl:px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[2.4rem] xl:text-[5.625rem] uppercase font-black xl:text-center mb-[4.8rem]">
            Training RESOURCES
          </h2>

          <div className="flex justify-between items-start flex-wrap gap-y-[1.88rem]">
            {trainingResources.map((item) => (
              <TrainingCard key={item.id} resource={item} />
            ))}
          </div>

          <div></div>
        </div>
      </section>

      <section className="w-full bg-colorI">
        <div className="w-full bg-colorIV rounded-t-[3.75rem] pt-[4.7rem] xl:pt-[8.81rem] px-4 xl:px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[2.5rem] xl:text-[5.625rem] uppercase font-black text-left mb-[1.25rem]">
            Frequently asked Questions
          </h2>

          <article className="w-full flex flex-col justify-start items-start gap-y-3 xl:gap-y-[1.25rem]">
            {faqs.map((item) => (
              <Accordion key={item.id} faq={item} />
            ))}
          </article>
        </div>
      </section>

      <section id="faqs" className="w-full bg-colorIV">
        <div className="w-full bg-white rounded-t-[3.75rem] pt-[4.7rem] xl:pt-[8.81rem] px-4 xl:px-[3.875rem] pb-[3.38rem]">
          <article className="w-full flex flex-col xl:flex-row items-start justify-start h-auto xl:h-[30rem]">
            <div className="xl:w-1/2 border-black xl:border-l-[1px] xl:border-t-[1px] xl:border-b-[1px] h-full mb-12 xl:mb-0">
              <h5 className="text-black text-[2.5rem] xl:text-[6.875rem] font-black uppercase">
                Still need help?
              </h5>
            </div>
            <div className="w-full xl:w-1/2 h-auto xl:h-full flex flex-col xl:flex-row justify-start items-start flex-wrap border border-black">
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 px-[1.44rem] py-[1.25rem] border-black border-b-[1px] xl:border-b-0 xl:border-r-[1px]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  Location
                </h6>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  The Marathon starts from Okpara Square and ends at Nnamdi
                  Azikwe Stadium Gate.
                </p>
              </div>
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 border-black border-b-[1px] px-[1.44rem] py-[1.25rem]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  Call Us
                </h6>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  08035537369
                </p>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  08063270616
                </p>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  08032744778
                </p>
              </div>
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 border-black xl:border-t-[1px] border-b-[1px] xl:border-b-0 px-[1.44rem] py-[1.25rem]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  MAil Us
                </h6>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify w-full text-wrap break-words">
                  ministryofyouthandsports@enugustate.gov.ng
                </p>
              </div>
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 border-black xl:border-l-[1px] border-l-0 px-[1.44rem] py-[1.25rem]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  FInd Us OnLine
                </h6>
                <a href="https://www.instagram.com/coalcitymarathon_/?igsh=aXR3MGM5cnpjY3B1" target="_blank" rel="noopener" className="flex justify-start items-center gap-[0.62rem]">
                  <InstagramIcon />
                  <p className="text-black text-[1.125rem] font-medium uppercase text-justify underline">
                    Instagram
                  </p>
                </a>
                <a href="https://www.facebook.com/coalcitymaratho?mibextid=LQQJ4d" target="_blank" rel="noopener" className="flex justify-start items-center gap-[0.62rem] mt-[0.75rem]">
                  <FacbookIcon />
                  <p className="text-black text-[1.125rem] font-medium uppercase text-justify underline">
                    Facebook
                  </p>
                </a>
              </div>
            </div>
          </article>

          <div className="w-full mt-1 xl:mt-0">
            <img src={enugu} alt="enugu logo" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

const trainingResources = [
  {
    id: 1,
    title: "Training PLAN",
    img: "bg-plan",
    description:
      "Whether you're a beginner or experienced runner, we offer customized 20km marathon training plans. Each plan, tailored for all levels, features weekly mileage goals and diverse workouts to boost your performance and help you achieve your goals.",
    resource: "/src/assets/Training_Plans.pdf",
  },
  {
    id: 2,
    title: "INJURY PREVENTION",
    img: "bg-injury",
    description:
      "Stay injury-free with our injury prevention tips. Learn to prevent common running injuries, including stretching, cross-training, and recovery techniques. Train smarter, stronger, and safer with our guidance.",
    resource: "/src/assets/Injury_Prevention.pdf",
  },
  {
    id: 3,
    title: "Nutrition & HYDRATION",
    img: "bg-nutrition",
    description:
      "Proper nutrition is key for marathon success. Get expert advice on pre-race nutrition, hydration strategies, and in-race fueling techniques. Explore energy-boosting recipes to fuel your training and race day.",
    resource: "/src/assets/Nutrition_Guidelines.pdf",
  },
];

const faqs = [
  {
    id: 1,
    question: "When is the Coal City Marathon scheduled to take place?",
    answer: "The Coal City Marathon is scheduled for May 4th, 2024.",
  },
  // {
  //   id: 2,
  //   question: "Where does the marathon start and finish?",
  //   answer:
  //     "The marathon starts at Okpara Square and finishes at Nnamdi Azikwe Stadium Gate in Enugu Metropolis.",
  // },
  {
    id: 2,
    question: "How can I register for the marathon?",
    answer:
      "You can register for the marathon online through our website registration form.",
  },
  {
    id: 3,
    question: "What are the registration fees for the marathon?",
    answer:
      "Registration attracts a flat fee of N2,000 only. Please visit our Registration section for more information.",
  },
  {
    id: 4,
    question:
      "Are there any age restrictions for participating in the marathon?",
    answer:
      "Participants must be at least 18 years old on the day of the race.",
  },
  // {
  //   id: 6,
  //   question:
  //     "Can I transfer my registration to another person if I am unable to participate?",
  //   answer: "No, registration transfers are not allowed",
  // },
  {
    id: 5,
    question: "Will there be aid stations along the marathon route?",
    answer:
      "Yes, there will be aid stations at regular intervals along the marathon route providing water and medical assistance.",
  },
  // {
  //   id: 8,
  //   question: "How can I volunteer to help with the marathon?",
  //   answer:
  //     "If you're interested in volunteering, please visit our Volunteer section for more information on how to get involved.",
  // },
  // {
  //   id: 9,
  //   question:
  //     "Where can I find more information about the marathon route and elevation?",
  //   answer:
  //     "Detailed information about the marathon route, including elevation profiles, can be found on our Route Details page.",
  // },
  {
    id: 6,
    question:
      "What prizes are available for participants in the Coal City Marathon?",
    answer:
      "Prizes will be awarded to top finishers, including cash prizes, medals, and sponsor-provided gifts. Specific details about prizes are in the Prizes page.",
  },
];
