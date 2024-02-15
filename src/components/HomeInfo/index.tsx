// import { Link } from "react-router-dom";

import arrow from "@/../public/arrow.svg";
import Link from "next/link";

const HomeInfo = ({ currentStage }: { currentStage: number }) => {
  if (currentStage === 1)
    return (
      <h1 className="neo-brutalism-blue mx-5 px-8 py-4 text-center text-white sm:text-xl sm:leading-snug">
        Hi, I'm
        <span className="mx-2 font-semibold text-white">Adrian</span>
        👋
        <br />A Software Engineer from Croatia 🇭🇷
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Worked with many companies <br /> and picked up many skills along the
          way
        </p>

        <Link href="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about
          the impact?
        </p>

        <Link href="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="text-center font-medium sm:text-xl">
          Need a project done or looking for a dev? <br /> I'm just a few
          keystrokes away
        </p>

        <Link href="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="h-4 w-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
