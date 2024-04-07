import Navbar from "./components/Navbar";
import mile from "./assets/mile.png";
import map from "./assets/map.png";
import prize from "./assets/prize.png";

import "./index.css";
import RegisterForm from "./components/RegisterForm";
import TrainingCard from "./components/TrainingCard";

function App() {
  return (
    <main className="bg-headerImg bg-center bg-no-repeat bg-cover w-full max-w-screen-2xl font-inter">
      <header className="w-full min-h-screen pb-[9.42rem] pt-[16.63rem] flex flex-col justify-center items-center">
        <Navbar />

        <div className="w-72 flex justify-center items-center bg-white bg-opacity-20 rounded-[3.75rem] py-[0.62rem]">
          <p className="text-white text-lg font-medium">
            Coal City Half Marathon
          </p>
        </div>
        <h5 className="text-white text-6xl font-black uppercase mt-4">
          Run the Extra
        </h5>
        <div className="w-full h-[16.25rem]">
          <img src={mile} alt="mile" className="w-full h-full object-contain" />
        </div>
        <button className="w-[23.8125rem] h-[4.125rem] py-4 rounded-xl bg-colorII text-lg font-semibold text-blackI uppercase">
          Join the Race
        </button>
      </header>

      <section className="bg-colorIII rounded-t-[3.75rem] pt-[1.86rem] px-[4.28rem] pb-[7.13rem]">
        <article className="flex justify-center gap-[20px] items-start w-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-[10rem] stroke-3 font-black">00</h2>
            <p className="text-black text-[3.75rem] font-black uppercase">
              Days
            </p>
          </div>
          <h2 className="text-center text-[10rem] stroke-3 font-black">:</h2>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-[10rem] stroke-3 font-black">00</h2>
            <p className="text-black text-[3.75rem] font-black uppercase">
              Hours
            </p>
          </div>
          <h2 className="text-center text-[10rem] stroke-3 font-black">:</h2>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-[10rem] stroke-3 font-black">00</h2>
            <p className="text-black text-[3.75rem] font-black uppercase">
              Minutes
            </p>
          </div>
        </article>

        <article className="w-full flex justify-between items-start liner gap-[3.31rem] mt-[17.75rem]">
          <h1 className="text-black text-[10rem] font-black uppercase flex-1 liner">
            About Mara <br /> thon
          </h1>
          <p className="flex-1 liner text-black text-[1.75rem] font-semibold leading-[3.15188rem] uppercase">
            The Coal City Marathon, <b>established in 2018</b>, has become a
            standout event in our region. fueled by a vision of{" "}
            <b>inspiring a healthier lifestyle</b> and{" "}
            <b>fostering a strong sense of community.</b> Our mission is to
            create a lasting experience that promotes not only physical fitness
            but also <b>unity</b> and a deep appreciation for the{" "}
            <b>rich cultural heritage</b> of Enugu State.
          </p>
        </article>

        <article className="w-full mt-[5.37rem] flex flex-col items-center justify-center">
          <div className="h-[43.8rem] w-full">
            <img
              src={map}
              alt="route map"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="mt-[1.57rem] text-blackI text-[3.125rem] font-extrabold uppercase">
            ROUTE
          </h3>
        </article>
      </section>

      <section className="w-full bg-colorIII">
        <div className="w-full bg-colorII rounded-t-[3.75rem] pt-[7.5rem] px-[3.875rem] pb-[3.38rem] flex justify-between items-start gap-3">
          <h1 className="text-black font-black uppercase text-[10rem] flex-1">
            Regis
            <br />
            ter
          </h1>
          <div className="flex-1">
            <RegisterForm />
          </div>
        </div>
      </section>

      <section className="w-full bg-colorII">
        <div className="w-full bg-colorI rounded-t-[3.75rem] pt-[8.81rem] px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[5.625rem] uppercase font-black text-center mb-[9.2rem]">
            Prizes to be won
          </h2>

          <div className="w-full flex justify-start items-center">
            <div className="w-[75%] h-[43rem] liner">
              <img
                src={prize}
                alt="prize"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="liner w-[25%]">
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
        </div>
      </section>

      <section className="w-full bg-colorI">
        <div className="w-full bg-colorIV rounded-t-[3.75rem] pt-[8.81rem] px-[3.875rem] pb-[3.38rem]">
          <h2 className="text-black text-[5.625rem] uppercase font-black text-center mb-[9.2rem]">
            Training RESOURCES
          </h2>

          <div>
            <TrainingCard />
          </div>

          <div></div>
        </div>
      </section>

      <section></section>
    </main>
  );
}

export default App;
