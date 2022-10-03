import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// import user from "../Assest/user.jpg";

function TestimonialNew() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>

      <div className="bg-zinc-100">
        <div
          class="
		md:bg-[url('https://www.athulyahomecare.com/lp/gynecology/Assest/4907157.jpg')]  h-full w-full bg-cover bg-no-repeat  "
        >
          <h2 className="px-4 pt-10 text-2xl font-bold leading-6 text-center capitalize md:text-xl xl:text-2xl text-sky-800 font-Helvetica ">
            Testimonials
          </h2>
          <h1 className="px-4 mt-6 text-2xl font-bold text-center capitalize lg:text-5xl md:text-4xl text-sky-800 font-Helvetica">
            What our<span className="text-pink-500"> client says</span>
          </h1>
          <div data-aos="fade-up"
            data-aos-duration="2000" className="container grid gap-6 px-10 py-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20">
            <div>
              <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-xl cursor-pointer group hover:bg-sky-800 md:p-12 rounded-xl">
                <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
                  <svg
                    width={26}
                    height={27}
                    viewBox="0 0 26 27"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="24.5767"
                          height={27}
                          fill="black"
                          transform="translate(25.2578 27) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="mt-4 mb-8 text-base font-semibold leading-normal text-center md:text-xl font-Ubuntu xl:w-80 ">
                    Swift response. Good support and service by staff. Doctors
                    have great patience and provide good consultation to the
                    elderly.
                  </p>
                </div>
                <div className="absolute bottom-0 -mb-6 text-white group-hover:text-sky-800">
                  <svg
                    width={34}
                    height={28}
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd)">
                      <path
                        d="M17 19L28.2583 3.25H5.74167L17 19Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd"
                        x="0.741699"
                        y="0.25"
                        width="32.5167"
                        height="27.75"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feMorphology
                          radius={1}
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={3} />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy={2} />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow"
                          result="effect2_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <img
                  src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/user.jpg"
                  alt="profile pictre"
                  className="w-12 h-12"
                />
                <p className="text-base font-semibold leading-4 text-center font-Helvetica opacity-90 ">
                  Arivoli A
                </p>
                <div className="mt-2 text-yellow-400">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-xl cursor-pointer group hover:bg-sky-800 md:p-12 rounded-xl">
                <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
                  <svg
                    width={26}
                    height={27}
                    viewBox="0 0 26 27"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="24.5767"
                          height={27}
                          fill="black"
                          transform="translate(25.2578 27) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="mt-4 mb-8 text-base font-semibold leading-normal text-center md:text-xl font-Ubuntu xl:w-80 ">
                    Very good service for senior home care patients. Dr. Janakan,
                    examined my Grandma very well and had much patience to listen
                    elderly people.
                  </p>
                </div>
                <div className="absolute bottom-0 -mb-6 text-white group-hover:text-sky-800">
                  <svg
                    width={34}
                    height={28}
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd)">
                      <path
                        d="M17 19L28.2583 3.25H5.74167L17 19Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd"
                        x="0.741699"
                        y="0.25"
                        width="32.5167"
                        height="27.75"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feMorphology
                          radius={1}
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={3} />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy={2} />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow"
                          result="effect2_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <img
                  src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/user.jpg"
                  alt="profile pictre"
                  className="w-12 h-12"
                />
                <p className="text-base font-semibold leading-4 text-center font-Helvetica opacity-90 ">
                  Vishwa bal
                </p>
                <div className="mt-2 text-yellow-400">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
            </div>
            <div>
              <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-xl cursor-pointer group hover:bg-sky-800 md:p-12 rounded-xl">
                <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
                  <svg
                    width={26}
                    height={27}
                    viewBox="0 0 26 27"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0)">
                      <path
                        d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                        fill="currentColor"
                      />
                      <path
                        d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect
                          width="24.5767"
                          height={27}
                          fill="black"
                          transform="translate(25.2578 27) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="mt-4 mb-8 text-base font-semibold leading-normal text-center md:text-xl font-Ubuntu xl:w-80 ">
                    Took doctor visit in my home for my father. He is recovering
                    well. Happy with the service provided. Thank you.
                  </p>
                </div>
                <div className="absolute bottom-0 -mb-6 text-white group-hover:text-sky-800">
                  <svg
                    width={34}
                    height={28}
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_dd)">
                      <path
                        d="M17 19L28.2583 3.25H5.74167L17 19Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_dd"
                        x="0.741699"
                        y="0.25"
                        width="32.5167"
                        height="27.75"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feMorphology
                          radius={1}
                          operator="erode"
                          in="SourceAlpha"
                          result="effect1_dropShadow"
                        />
                        <feOffset dy={4} />
                        <feGaussianBlur stdDeviation={3} />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        />
                        <feOffset dy={2} />
                        <feGaussianBlur stdDeviation="2.5" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="effect1_dropShadow"
                          result="effect2_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect2_dropShadow"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center mt-10">
                <img
                  src="https://www.athulyahomecare.com/lp/ophthalmology/Assest/user.jpg"
                  alt="profile pictre"
                  className="w-12 h-12"
                />
                <p className="text-base font-semibold leading-4 text-center font-Helvetica opacity-90 ">
                  Sathiya satz
                </p>
                <div className="mt-2 text-yellow-400">
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialNew;
