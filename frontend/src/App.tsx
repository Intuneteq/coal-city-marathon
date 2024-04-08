import Navbar from "./components/Navbar";
import mile from "./assets/mile.png";
import map from "./assets/map.png";
import prize from "./assets/prize.png";
import enugu from "./assets/enugu.png";
import prizeMobile from "./assets/prize-mobile.png"

import "./index.css";
import RegisterForm from "./components/RegisterForm";
import TrainingCard from "./components/TrainingCard";
import Accordion from "./components/Accordion";
import InstagramIcon from "./icons/InstagramIcon";
import FacbookIcon from "./icons/FacbookIcon";

function App() {
  return (
    <main className="w-full max-w-screen-2xl font-inter">
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
        <div className="w-full h-[16.25rem] flex justify-center items-center">
          <img src={mile} alt="mile" className="w-[100%] h-full object-cover" />
        </div>
        <button className="w-[23.8125rem] h-[4.125rem] py-4 rounded-xl bg-colorII text-lg font-semibold text-blackI uppercase">
          Join the Race
        </button>
      </header>

      <section id="join-race" className="w-full mt-[-3.5rem]">
        <div className="bg-colorIII rounded-t-[3.75rem] pt-[1.86rem] px-4 xl:px-[4.28rem] pb-[4.25rem] xl:pb-[7.13rem]">
          <article className="flex justify-between xl:justify-center xl:gap-[20px] items-start w-full text-[3.75rem] xl:text-[10rem]">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center stroke-3 font-black">00</h2>
              <p className="text-black text-xl xl:text-[3.75rem] font-black uppercase">
                Days
              </p>
            </div>
            <h2 className="text-center stroke-3 font-black">:</h2>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center stroke-3 font-black">00</h2>
              <p className="text-black text-xl xl:text-[3.75rem] font-black uppercase">
                Hours
              </p>
            </div>
            <h2 className="text-center stroke-3 font-black">:</h2>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-center stroke-3 font-black">00</h2>
              <p className="text-black text-xl xl:text-[3.75rem] font-black uppercase">
                Minutes
              </p>
            </div>
          </article>

          <article className="w-full flex flex-col xl:flex-row justify-between items-start liner gap-[3.31rem] mt-12 xl:mt-[17.75rem]">
            <h1 className="text-black text-[2.5rem] xl:text-[10rem] max-w-[10rem] xl:max-w-none font-black uppercase flex-1 liner">
              About Mara <br /> thon
            </h1>
            <p className="flex-1 liner text-black text-base xl:text-[1.75rem] font-semibold xl:leading-[3.15188rem] uppercase leading-[1.68rem]">
              The Coal City Marathon, <b>established in 2018</b>, has become a
              standout event in our region. fueled by a vision of{" "}
              <b>inspiring a healthier lifestyle</b> and{" "}
              <b>fostering a strong sense of community.</b> Our mission is to
              create a lasting experience that promotes not only physical
              fitness but also <b>unity</b> and a deep appreciation for the{" "}
              <b>rich cultural heritage</b> of Enugu State.
            </p>
          </article>

          <article className="w-full mt-[1.55rem] xl:mt-[5.37rem] flex flex-col items-center justify-center liner">
            <div className="h-auto xl:h-[43.8rem] w-full">
              <img
                src={map}
                alt="route map"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="mt-[0.63rem] xl:mt-[1.57rem] text-blackI text-[3.125rem] font-extrabold uppercase">
              ROUTE
            </h3>
          </article>
        </div>
      </section>

      <section className="w-full bg-colorIII">
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
        <div className="w-full bg-colorI rounded-t-[3.75rem] pt-[4.63rem] xl:pt-[7.5rem] px-[1.12rem] xl:px-[3.875rem] pb-[3.38rem] liner">
          <h2 className="text-black text-[2.5rem] xl:text-[5.625rem] uppercase font-black  xl:text-center max-w-[10rem] xl:max-w-0 mb-[3.29rem] xl:mb-[9.2rem]">
            Prizes to be won
          </h2>

          <div className="w-full hidden xl:flex flex-col xl:flex-row justify-start items-center">
            <div className="w-full xl:w-[75%] h-[43rem] liner">
              <img
                src={prize}
                alt="prize"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="liner w-full xl:w-[25%]">
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
            <img src={prizeMobile} alt="prize" className="w-full h-full object-contain"/>
          </div>
        </div>
      </section>

      <section className="w-full bg-colorI">
        <div className="w-full bg-colorIV rounded-t-[3.75rem] pt-[4.7rem] xl:pt-[8.81rem] px-4 xl:px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[2.4rem] xl:text-[5.625rem] uppercase font-black xl:text-center mb-[4.8rem]">
            Training RESOURCES
          </h2>

          <div className="flex justify-between items-start flex-wrap gap-y-[1.88rem]">
            {[1, 2, 3].map((item) => (
              <TrainingCard key={item} />
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
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
          </article>
        </div>
      </section>

      <section className="w-full bg-colorIV">
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
                  727-802-2802
                </p>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  727-802-2802
                </p>
              </div>
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 border-black xl:border-t-[1px] border-b-[1px] xl:border-b-0 px-[1.44rem] py-[1.25rem]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  MAil Us
                </h6>
                <p className="text-black text-[1.125rem] font-medium uppercase text-justify">
                  ccm@gmail.com
                </p>
              </div>
              <div className="w-full xl:w-1/2 h-auto xl:h-1/2 border-black xl:border-l-[1px] border-l-0 px-[1.44rem] py-[1.25rem]">
                <h6 className="text-black text-[1.875rem] font-black uppercase">
                  FInd Us OnLine
                </h6>
                <div className="flex justify-start items-center gap-[0.62rem]">
                  <InstagramIcon />
                  <p className="text-black text-[1.125rem] font-medium uppercase text-justify underline">
                    Instagram
                  </p>
                </div>
                <div className="flex justify-start items-center gap-[0.62rem] mt-[0.75rem]">
                  <FacbookIcon />
                  <p className="text-black text-[1.125rem] font-medium uppercase text-justify underline">
                    Facebook
                  </p>
                </div>
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
