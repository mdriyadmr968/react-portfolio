import React, { useState } from "react";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <div className="section" id="projects">
      <section className="py-16 md:py-24 w-[95%]  md:max-xl:w-[90%] 2xl:w-[80%] mx-auto">
        <div className="container">
          <div
            className="grid grid-cols-1 aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="inline-block">
                <p className="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                  <span>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Selected work
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-14 gap-7">
            <div
              className="flex flex-wrap lg:flex-nowrap items-stretch border border-gray-300 aos-init"
              data-aos="fade-up"
            >
              <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
                <p className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5">
                  Tale Wallet
                </p>
                <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                  A multi-chain crypto wallet with ability to Buy, sell, and
                  swap thousands of crypto tokens. Users can discover and invest
                  in instruments like Crypto Baskets and Indexes. Users can
                  track the current market condition. The Wallet Support’s more
                  than five chains and 500+ verified tokens which gives a bird’s
                  eye view to users about the current market condition.
                </p>
                <p className="text-gray max-w-[420px] mt-2">
                  <span className="font-semibold">
                    Technology used in this app:
                  </span>{" "}
                  React, Bootstrap, Web3.js, Ethers and many more
                </p>

                <div className="inline-block mt-8">
                  <a
                    className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                    href="https://talewallet.com/"
                    target="__blank"
                    rel="noreferrer"
                  >
                    View Project
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
                <img
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={683}
                  decoding="async"
                  data-nimg={1}
                  className="object-cover w-full h-full mx-auto"
                  style={{ color: "transparent" }}
                  src="/images/talewallet.PNG"
                />
              </div>
            </div>
            <div
              className="flex flex-wrap lg:flex-nowrap items-stretch border border-gray-300 aos-init"
              data-aos="fade-up"
            >
              <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
                <p className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5">
                  Tale Invest
                </p>
                <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                  This web app brings the investors and fund-managers under the
                  same hud where fund-managers can create and manage different
                  investment plans like crypto- funds, crypto- baskets for the
                  user and also perform trade on those funds for maximizing the
                  profit.
                </p>
                <p className="text-gray max-w-[420px] mt-2">
                  <span className="font-semibold">
                    Technology used in this app:
                  </span>{" "}
                  React, Bootstrap, Web3.js, Ethers and many more
                </p>

                <div className="inline-block mt-8">
                  <a
                    className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                    href="https://taleinvest.io/"
                    target="__blank"
                    rel="noreferrer"
                  >
                    View Project
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
                <img
                  alt=""
                  loading="lazy"
                  width={1000}
                  height={750}
                  decoding="async"
                  data-nimg={1}
                  className="object-cover w-full h-full mx-auto"
                  style={{ color: "transparent" }}
                  src="/images/taleinvest.PNG"
                />
              </div>
            </div>
            <div
              className="flex flex-wrap lg:flex-nowrap items-stretch border border-gray-300 aos-init"
              data-aos="fade-up"
            >
              <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
                <p className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5">
                  TaleWallet Mobile app
                </p>
                <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                  A full pledge mobile app where all the features of tale-wallet
                  have been reflected.
                </p>
                <p className="text-gray max-w-[420px] mt-2">
                  <span className="font-semibold">
                    Technology used in this app:
                  </span>{" "}
                  React-native, tailwind-css, expo and many more
                </p>

                <div className="inline-block mt-8">
                  <a
                    className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                    href="https://play.google.com/store/apps/details?id=com.talewallet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.0035 7.4083L5.41176 16L4 14.5882L12.5917 5.99654H5.01905V4H16V14.981H14.0035V7.4083Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="xl:max-w-[670px] lg:max-w-[400px] w-full lg:order-2 order-1">
                <img
                  alt=""
                  fetchpriority="high"
                  width={1000}
                  height={750}
                  decoding="async"
                  data-nimg={1}
                  className="object-cover w-full h-full mx-auto"
                  style={{ color: "transparent" }}
                  src="/images/talewalletmobile.PNG"
                />
              </div>
            </div>
            <div className="text-center aos-init" data-aos="fade-up">
              <button
                onClick={() => {
                  setViewAll(!viewAll);
                }}
                className=" bg-black text-white py-4 px-5"
              >
                {viewAll ? " View Less Project" : " View All Project"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
