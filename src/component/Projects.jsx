import React, { useState } from "react";

const Projects = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <section className="py-16 md:py-24 w-[90%] md:w-[80%] mx-auto" id="work">
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
            <h2 className="font-semibold text-[26px]/normal mt-7">
              Showcasing My Remarkable Projects
            </h2>
            <p className="mt-5 text-gray max-w-[708px] mx-auto">
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-14 gap-7">
          <div
            className="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%] aos-init"
            data-aos="fade-up"
          >
            <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
              <p className="text-warning text-[22px] font-bold">Sight</p>
              <a
                className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5"
                href="/#"
              >
                Your Trusted Financial Companion for Smart Money Management
              </a>
              <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="flex items-center gap-4 mt-5 md:mt-8">
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/figma-ex.94a93458.svg"
                  />
                </div>
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/sketch-ex.d7257ef3.svg"
                  />
                </div>
              </div>
              <div className="inline-block mt-8">
                <a
                  className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                  href="/#"
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
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-1.bb7842ac.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-1.bb7842ac.png&w=2048&q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-1.bb7842ac.png&w=2048&q=75"
              />
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%] aos-init"
            data-aos="fade-up"
          >
            <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
              <p className="text-purple text-[22px] font-bold">Artisan</p>
              <a
                className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5"
                href="/#"
              >
                An app to empower women in their fertility journey.
              </a>
              <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="flex items-center gap-4 mt-5 md:mt-8">
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/figma-ex.94a93458.svg"
                  />
                </div>
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/sketch-ex.d7257ef3.svg"
                  />
                </div>
              </div>
              <div className="inline-block mt-8">
                <a
                  className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                  href="/#"
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
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-2.2a41806c.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-2.2a41806c.png&w=2048&q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-2.2a41806c.png&w=2048&q=75"
              />
            </div>
          </div>
          <div
            className="flex flex-wrap lg:flex-nowrap items-stretch border-2 border-gray/20 dark:border-white/[12%] aos-init"
            data-aos="fade-up"
          >
            <div className="order-2 p-10 md:p-12 lg:flex-1 lg:order-1">
              <p className="text-[#453DB1] text-[22px] font-bold">
                Poker Queen
              </p>
              <a
                className="font-bold text-lg/normal md:text-2xl/normal lg:text-[30px]/normal inline-block mt-5"
                href="/#"
              >
                Unlock the Mysteries of Fun and Strategy
              </a>
              <p className="text-gray max-w-[420px] mt-3 md:mt-5">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
              <div className="flex items-center gap-4 mt-5 md:mt-8">
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/figma-ex.94a93458.svg"
                  />
                </div>
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/ai-ex.9b709301.svg"
                  />
                </div>
                <div className="border-2 border-gray/[14%] h-14 w-14 rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    style={{ color: "transparent" }}
                    src="/_next/static/media/ps-ex.6a5a7270.svg"
                  />
                </div>
              </div>
              <div className="inline-block mt-8">
                <a
                  className="flex items-center gap-2.5 py-3.5 text-sm font-semibold px-5 border-2 border-black duration-300 hover:bg-black hover:text-white "
                  href="/#"
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
                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-3.2e84801d.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-3.2e84801d.png&w=2048&q=75 2x"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwork-3.2e84801d.png&w=2048&q=75"
              />
            </div>
          </div>
          <div className="text-center aos-init" data-aos="fade-up">
            <button
              onClick={() => {
                setViewAll(!viewAll);
              }}
              className=" bg-black text-white py-4 px-5"
              href="/#"
            >
              {viewAll ? " View Less Project" : " View All Project"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
