import React, { useEffect } from "react";
// import Titleimage from "../Assest/image5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function Content() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container py-16 mx-auto lg:py-20">
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className="flex flex-col overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto"
      >
        <div className="relative lg:w-1/2">
          <img
            src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/eye.jpg"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <h5 className="block mb-2 text-xl font-semibold text-center lg:text-2xl text-sky-800 font-Helvetica">
            Best Ophthalmologist<span> </span>
            <span className="text-pink-500 capitalize">Home Consultation</span>
          </h5>
          <p className="mb-8 font-semibold text-justify text-gray-800 md:text-xl font-Ubuntu opacity-90">
            <span className="font-bold">The</span> outstanding ophthalmology
            medical care provided by Athulya Home Healthcare allows people who
            experience difficulties to travel to the hospitals to be received at
            home, where they can relax. If you simply search for "best eye
            ophthalmologist near me," the Athulya staff will take care of the
            rest.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
