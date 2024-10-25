import React from "react";

const EducationAndExperience = () => {
  return (
    <div className="section" id="experience">
      <section className="py-16 md:py-24 w-[95%]  md:max-xl:w-[90%] 2xl:w-[80%] mx-auto">
        <div className="container">
          <div
            className="grid grid-cols-1 aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="inline-block">
                <p className="bg-[#994FF5] text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
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
                  Experience &amp; Education
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-14">
            <div
              className="relative space-y-12 md:space-y-8 aos-init"
              data-aos="fade-up"
            >
              <div
                className="block shrink-0 w-[2px] bg-center bg-cover absolute h-full left-0 md:left-1/2  transform md:-translate-x-1/2"
                style={{
                  backgroundImage: `url('/images/dotline.svg')`,
                }}
              ></div>

              <div className="relative hidden w-full md:block">
                <div className="absolute w-full left-1 rtl:right-1 -top-36">
                  <img
                    alt=""
                    loading="lazy"
                    width={1087}
                    height={256}
                    decoding="async"
                    data-nimg={1}
                    className="mx-auto dark:hidden"
                    style={{ color: "transparent" }}
                    src="/images/point.png"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full md:w-1/2 pl-7 rtl:pr-7 md:pr-8 rtl:md:pl-8 lg:pr-14 rtl:lg:pl-14">
                      <div className="space-y-5 text-left rtl:text-right md:text-right rtl:md:text-left">
                        <div>
                          <svg
                            className="inline-block"
                            width={34}
                            height={34}
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M18.0625 4.24999V28.6875H5.3125V11.3355C5.31239 11.1606 5.35549 10.9883 5.43797 10.834C5.52045 10.6797 5.63976 10.5481 5.78531 10.451L16.4103 3.36811C16.5702 3.26145 16.756 3.20015 16.9479 3.19073C17.1399 3.18131 17.3308 3.22413 17.5003 3.31462C17.6699 3.40511 17.8117 3.5399 17.9107 3.70461C18.0097 3.86933 18.0621 4.05781 18.0625 4.24999Z"
                              fill="url(#paint0_radial_122_112)"
                            />
                            <path
                              d="M31.875 27.625H29.75V12.75C29.75 12.1864 29.5261 11.6459 29.1276 11.2474C28.7291 10.8489 28.1886 10.625 27.625 10.625H19.125V4.25001C19.1252 3.8652 19.021 3.48755 18.8234 3.15736C18.6258 2.82717 18.3422 2.55684 18.003 2.37521C17.6637 2.19359 17.2815 2.1075 16.8972 2.12612C16.5128 2.14474 16.1407 2.26738 15.8206 2.48095L5.19562 9.56251C4.90415 9.75697 4.66529 10.0205 4.50031 10.3296C4.33532 10.6387 4.24933 10.9838 4.25 11.3342V27.625H2.125C1.84321 27.625 1.57296 27.7369 1.3737 27.9362C1.17444 28.1355 1.0625 28.4057 1.0625 28.6875C1.0625 28.9693 1.17444 29.2396 1.3737 29.4388C1.57296 29.6381 1.84321 29.75 2.125 29.75H31.875C32.1568 29.75 32.427 29.6381 32.6263 29.4388C32.8256 29.2396 32.9375 28.9693 32.9375 28.6875C32.9375 28.4057 32.8256 28.1355 32.6263 27.9362C32.427 27.7369 32.1568 27.625 31.875 27.625ZM27.625 12.75V27.625H19.125V12.75H27.625ZM6.375 11.3342L17 4.25001V27.625H6.375V11.3342ZM14.875 14.875V17C14.875 17.2818 14.7631 17.5521 14.5638 17.7513C14.3645 17.9506 14.0943 18.0625 13.8125 18.0625C13.5307 18.0625 13.2605 17.9506 13.0612 17.7513C12.8619 17.5521 12.75 17.2818 12.75 17V14.875C12.75 14.5932 12.8619 14.323 13.0612 14.1237C13.2605 13.9244 13.5307 13.8125 13.8125 13.8125C14.0943 13.8125 14.3645 13.9244 14.5638 14.1237C14.7631 14.323 14.875 14.5932 14.875 14.875ZM10.625 14.875V17C10.625 17.2818 10.5131 17.5521 10.3138 17.7513C10.1145 17.9506 9.84429 18.0625 9.5625 18.0625C9.28071 18.0625 9.01046 17.9506 8.8112 17.7513C8.61194 17.5521 8.5 17.2818 8.5 17V14.875C8.5 14.5932 8.61194 14.323 8.8112 14.1237C9.01046 13.9244 9.28071 13.8125 9.5625 13.8125C9.84429 13.8125 10.1145 13.9244 10.3138 14.1237C10.5131 14.323 10.625 14.5932 10.625 14.875ZM10.625 22.3125V24.4375C10.625 24.7193 10.5131 24.9896 10.3138 25.1888C10.1145 25.3881 9.84429 25.5 9.5625 25.5C9.28071 25.5 9.01046 25.3881 8.8112 25.1888C8.61194 24.9896 8.5 24.7193 8.5 24.4375V22.3125C8.5 22.0307 8.61194 21.7605 8.8112 21.5612C9.01046 21.3619 9.28071 21.25 9.5625 21.25C9.84429 21.25 10.1145 21.3619 10.3138 21.5612C10.5131 21.7605 10.625 22.0307 10.625 22.3125ZM14.875 22.3125V24.4375C14.875 24.7193 14.7631 24.9896 14.5638 25.1888C14.3645 25.3881 14.0943 25.5 13.8125 25.5C13.5307 25.5 13.2605 25.3881 13.0612 25.1888C12.8619 24.9896 12.75 24.7193 12.75 24.4375V22.3125C12.75 22.0307 12.8619 21.7605 13.0612 21.5612C13.2605 21.3619 13.5307 21.25 13.8125 21.25C14.0943 21.25 14.3645 21.3619 14.5638 21.5612C14.7631 21.7605 14.875 22.0307 14.875 22.3125Z"
                              fill="url(#paint1_radial_122_112)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_122_112"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(11.6875 15.9385) rotate(116.567) scale(14.2541 11.4038)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_122_112"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17 15.9368) rotate(139.084) scale(21.0905 20.8765)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="mt-7">
                          <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                            <span className="text-xl font-semibold">
                              Assosiate Software Engineer in Tale Wallet
                            </span>
                          </div>
                          <p>
                            <span className="font-semibold text-purple">
                              May,2023 - July-2024
                            </span>
                          </p>
                          <p className="mt-5 text-gray">
                            Contributed on three major projects of Tale Wallet
                            and also crated some web and mobile app from scratch
                            as per requirements.
                          </p>
                          <p className="mt-6 font-semibold">
                            Bangalore , Karnataka, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#994FF5] to-[#FFC41F] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px rtl:right-px -translate-x-1/2 rtl:translate-x-1/2 md:left-1/2 rtl:md:right-1/2 transform md:-translate-x-1/2 rtl:md:translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full md:w-1/2 pl-7 rtl:pr-7 md:pl-8 rtl:md:pr-8 lg:pl-14 rtl:lg:pr-14">
                      <div className="space-y-5 text-left rtl:text-right">
                        <div>
                          <svg
                            className="inline-block"
                            width={34}
                            height={34}
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M18.0625 4.24999V28.6875H5.3125V11.3355C5.31239 11.1606 5.35549 10.9883 5.43797 10.834C5.52045 10.6797 5.63976 10.5481 5.78531 10.451L16.4103 3.36811C16.5702 3.26145 16.756 3.20015 16.9479 3.19073C17.1399 3.18131 17.3308 3.22413 17.5003 3.31462C17.6699 3.40511 17.8117 3.5399 17.9107 3.70461C18.0097 3.86933 18.0621 4.05781 18.0625 4.24999Z"
                              fill="url(#paint0_radial_122_112)"
                            />
                            <path
                              d="M31.875 27.625H29.75V12.75C29.75 12.1864 29.5261 11.6459 29.1276 11.2474C28.7291 10.8489 28.1886 10.625 27.625 10.625H19.125V4.25001C19.1252 3.8652 19.021 3.48755 18.8234 3.15736C18.6258 2.82717 18.3422 2.55684 18.003 2.37521C17.6637 2.19359 17.2815 2.1075 16.8972 2.12612C16.5128 2.14474 16.1407 2.26738 15.8206 2.48095L5.19562 9.56251C4.90415 9.75697 4.66529 10.0205 4.50031 10.3296C4.33532 10.6387 4.24933 10.9838 4.25 11.3342V27.625H2.125C1.84321 27.625 1.57296 27.7369 1.3737 27.9362C1.17444 28.1355 1.0625 28.4057 1.0625 28.6875C1.0625 28.9693 1.17444 29.2396 1.3737 29.4388C1.57296 29.6381 1.84321 29.75 2.125 29.75H31.875C32.1568 29.75 32.427 29.6381 32.6263 29.4388C32.8256 29.2396 32.9375 28.9693 32.9375 28.6875C32.9375 28.4057 32.8256 28.1355 32.6263 27.9362C32.427 27.7369 32.1568 27.625 31.875 27.625ZM27.625 12.75V27.625H19.125V12.75H27.625ZM6.375 11.3342L17 4.25001V27.625H6.375V11.3342ZM14.875 14.875V17C14.875 17.2818 14.7631 17.5521 14.5638 17.7513C14.3645 17.9506 14.0943 18.0625 13.8125 18.0625C13.5307 18.0625 13.2605 17.9506 13.0612 17.7513C12.8619 17.5521 12.75 17.2818 12.75 17V14.875C12.75 14.5932 12.8619 14.323 13.0612 14.1237C13.2605 13.9244 13.5307 13.8125 13.8125 13.8125C14.0943 13.8125 14.3645 13.9244 14.5638 14.1237C14.7631 14.323 14.875 14.5932 14.875 14.875ZM10.625 14.875V17C10.625 17.2818 10.5131 17.5521 10.3138 17.7513C10.1145 17.9506 9.84429 18.0625 9.5625 18.0625C9.28071 18.0625 9.01046 17.9506 8.8112 17.7513C8.61194 17.5521 8.5 17.2818 8.5 17V14.875C8.5 14.5932 8.61194 14.323 8.8112 14.1237C9.01046 13.9244 9.28071 13.8125 9.5625 13.8125C9.84429 13.8125 10.1145 13.9244 10.3138 14.1237C10.5131 14.323 10.625 14.5932 10.625 14.875ZM10.625 22.3125V24.4375C10.625 24.7193 10.5131 24.9896 10.3138 25.1888C10.1145 25.3881 9.84429 25.5 9.5625 25.5C9.28071 25.5 9.01046 25.3881 8.8112 25.1888C8.61194 24.9896 8.5 24.7193 8.5 24.4375V22.3125C8.5 22.0307 8.61194 21.7605 8.8112 21.5612C9.01046 21.3619 9.28071 21.25 9.5625 21.25C9.84429 21.25 10.1145 21.3619 10.3138 21.5612C10.5131 21.7605 10.625 22.0307 10.625 22.3125ZM14.875 22.3125V24.4375C14.875 24.7193 14.7631 24.9896 14.5638 25.1888C14.3645 25.3881 14.0943 25.5 13.8125 25.5C13.5307 25.5 13.2605 25.3881 13.0612 25.1888C12.8619 24.9896 12.75 24.7193 12.75 24.4375V22.3125C12.75 22.0307 12.8619 21.7605 13.0612 21.5612C13.2605 21.3619 13.5307 21.25 13.8125 21.25C14.0943 21.25 14.3645 21.3619 14.5638 21.5612C14.7631 21.7605 14.875 22.0307 14.875 22.3125Z"
                              fill="url(#paint1_radial_122_112)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_122_112"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(11.6875 15.9385) rotate(116.567) scale(14.2541 11.4038)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_122_112"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17 15.9368) rotate(139.084) scale(21.0905 20.8765)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="mt-7">
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12">
                            <span className="text-xl font-semibold">
                              Software Development Intern in Tale Wallet
                            </span>
                          </div>
                          <p>
                            <span className="font-semibold text-purple">
                              March,2023 - April,2023
                            </span>
                          </p>
                          <p className="mt-5 text-gray">
                            Learned lot of technology related to web development
                            and Developed some interactive website during
                            Internship period.
                          </p>

                          <p className="mt-6 font-semibold">
                            Bangalore , Karnataka, India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#994FF5] to-[#FFC41F] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px rtl:right-px -translate-x-1/2 rtl:translate-x-1/2 md:left-1/2 rtl:md:right-1/2 transform md:-translate-x-1/2 rtl:md:translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="relative !mt-0">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full md:w-1/2 pl-7  md:pr-8 lg:pr-14 ">
                      <div className="space-y-5 text-left  md:text-right ">
                        <div>
                          <svg
                            className="inline-block"
                            width={34}
                            height={34}
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M29.75 8.5L17 12.75L4.25 8.5L17 4.25L29.75 8.5Z"
                              fill="url(#paint0_radial_96_398)"
                            />
                            <path
                              d="M30.086 7.49197L17.336 3.24197C17.1179 3.16926 16.8821 3.16926 16.664 3.24197L3.91398 7.49197C3.72114 7.55702 3.55102 7.67608 3.42388 7.83501C3.29674 7.99393 3.21792 8.18603 3.1968 8.38846C3.19056 8.42531 3.18745 8.46264 3.1875 8.50002V19.125C3.1875 19.4068 3.29944 19.6771 3.4987 19.8763C3.69796 20.0756 3.96821 20.1875 4.25 20.1875C4.53179 20.1875 4.80204 20.0756 5.0013 19.8763C5.20056 19.6771 5.3125 19.4068 5.3125 19.125V9.97424L9.77367 11.4604C8.5884 13.3753 8.21149 15.6823 8.7257 17.8749C9.23991 20.0674 10.6032 21.9663 12.5163 23.1546C10.1256 24.0922 8.05906 25.7882 6.54766 28.1071C6.46905 28.224 6.41445 28.3552 6.38703 28.4934C6.35962 28.6315 6.35992 28.7737 6.38794 28.9116C6.41595 29.0496 6.47112 29.1807 6.55023 29.2972C6.62933 29.4137 6.73081 29.5133 6.84875 29.5902C6.96669 29.6671 7.09874 29.7198 7.23723 29.7453C7.37572 29.7707 7.51789 29.7684 7.65547 29.7384C7.79305 29.7084 7.92329 29.6514 8.03863 29.5706C8.15398 29.4898 8.25211 29.3869 8.32734 29.2679C10.3288 26.1973 13.4898 24.4375 17 24.4375C20.5102 24.4375 23.6712 26.1973 25.6727 29.2679C25.8285 29.4995 26.0692 29.6605 26.3428 29.716C26.6164 29.7716 26.9008 29.7172 27.1346 29.5647C27.3685 29.4122 27.5329 29.1738 27.5923 28.9011C27.6518 28.6283 27.6015 28.3431 27.4523 28.1071C25.9409 25.7882 23.8664 24.0922 21.4837 23.1546C23.395 21.9663 24.757 20.0687 25.2711 17.8778C25.7852 15.6868 25.4095 13.3814 24.2263 11.467L30.086 9.51471C30.2976 9.44422 30.4817 9.30893 30.6121 9.12801C30.7425 8.94708 30.8127 8.7297 30.8127 8.50666C30.8127 8.28362 30.7425 8.06624 30.6121 7.88531C30.4817 7.70439 30.2976 7.5691 30.086 7.49861V7.49197ZM23.375 15.9375C23.3753 16.9454 23.1366 17.9389 22.6786 18.8367C22.2205 19.7344 21.5561 20.5108 20.7399 21.1021C19.9237 21.6933 18.979 22.0826 17.9832 22.2381C16.9874 22.3935 15.9689 22.3106 15.0113 21.9962C14.0538 21.6818 13.1844 21.1449 12.4745 20.4294C11.7647 19.714 11.2346 18.8404 10.9277 17.8804C10.6208 16.9204 10.5459 15.9013 10.7092 14.9068C10.8724 13.9122 11.2691 12.9705 11.8668 12.159L16.664 13.7528C16.8821 13.8255 17.1179 13.8255 17.336 13.7528L22.1332 12.159C22.9404 13.2534 23.3756 14.5777 23.375 15.9375ZM17 11.6304L7.61016 8.50002L17 5.36963L26.3898 8.50002L17 11.6304Z"
                              fill="url(#paint1_radial_96_398)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_96_398"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17 8.5) rotate(161.565) scale(13.4397 8.06381)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_96_398"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17.0001 16.4751) rotate(136.11) scale(19.1664 19.152)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>

                        <div className="mt-7">
                          <div className="flex flex-col justify-end gap-4 lg:flex-row lg:items-center lg:gap-12">
                            <span className="text-xl font-semibold">
                              Bechelor in Computer Science & Engineering
                            </span>
                          </div>
                          <p>
                            <span className="font-semibold text-purple">
                              2018 - 2022
                            </span>
                          </p>
                          <p className="mt-5 text-gray"></p>
                          <p className="mt-6 font-semibold">
                            Port City International University, Chittagong,
                            Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#994FF5] to-[#FFC41F] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px rtl:right-px -translate-x-1/2 md:left-1/2 rtl:md:right-1/2 transform md:-translate-x-1/2  top-1/2 -translate-y-1/2" />
                </div>
              </div>
              <div className="relative">
                <div className="flex flex-col items-center md:flex-row">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full md:w-1/2 pl-7  md:pl-8  lg:pl-14 ">
                      <div className="space-y-5 text-left ">
                        <div>
                          <svg
                            className="inline-block"
                            width={34}
                            height={34}
                            viewBox="0 0 34 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.2"
                              d="M28.6875 15.0171V22.0854C28.6881 22.345 28.5936 22.5959 28.4219 22.7906C26.9211 24.4627 23.2555 27.625 17 27.625C10.7445 27.625 7.08157 24.4627 5.57813 22.7906C5.40639 22.5959 5.3119 22.345 5.3125 22.0854V15.0171L17 21.25L28.6875 15.0171Z"
                              fill="url(#paint0_radial_92_357)"
                            />
                            <path
                              d="M33.4369 11.8124L17.4994 3.31235C17.3457 3.23049 17.1742 3.18768 17 3.18768C16.8258 3.18768 16.6544 3.23049 16.5006 3.31235L0.563129 11.8124C0.393134 11.9029 0.250967 12.0381 0.151835 12.2032C0.0527028 12.3684 0.000335693 12.5574 0.000335693 12.75C0.000335693 12.9426 0.0527028 13.1316 0.151835 13.2968C0.250967 13.462 0.393134 13.5971 0.563129 13.6877L4.25 15.6546V22.0854C4.2489 22.6073 4.44097 23.1111 4.78922 23.4999C6.52907 25.4376 10.4271 28.6875 17 28.6875C19.1794 28.7055 21.3425 28.3108 23.375 27.5241V31.875C23.375 32.1568 23.4869 32.4271 23.6862 32.6263C23.8855 32.8256 24.1557 32.9375 24.4375 32.9375C24.7193 32.9375 24.9895 32.8256 25.1888 32.6263C25.3881 32.4271 25.5 32.1568 25.5 31.875V26.4974C26.8855 25.6976 28.1375 24.6862 29.2108 23.4999C29.559 23.1111 29.7511 22.6073 29.75 22.0854V15.6546L33.4369 13.6877C33.6069 13.5971 33.749 13.462 33.8482 13.2968C33.9473 13.1316 33.9997 12.9426 33.9997 12.75C33.9997 12.5574 33.9473 12.3684 33.8482 12.2032C33.749 12.0381 33.6069 11.9029 33.4369 11.8124ZM17 26.5625C11.2532 26.5625 7.87313 23.7548 6.375 22.0854V16.7875L16.5006 22.1877C16.6544 22.2695 16.8258 22.3123 17 22.3123C17.1742 22.3123 17.3457 22.2695 17.4994 22.1877L23.375 19.0546V25.2091C21.7016 25.9901 19.5925 26.5625 17 26.5625ZM27.625 22.0801C26.9881 22.7868 26.2755 23.4215 25.5 23.9727V17.9204L27.625 16.7875V22.0801ZM24.9688 15.7967L24.9395 15.7795L17.502 11.8124C17.2539 11.6856 16.9659 11.6614 16.7001 11.745C16.4343 11.8285 16.2119 12.0132 16.0809 12.2591C15.95 12.5051 15.9208 12.7926 15.9998 13.0598C16.0788 13.327 16.2596 13.5525 16.5033 13.6877L22.7109 17L17 20.0454L3.32032 12.75L17 5.45462L30.6797 12.75L24.9688 15.7967Z"
                              fill="url(#paint1_radial_92_357)"
                            />
                            <defs>
                              <radialGradient
                                id="paint0_radial_92_357"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17 21.321) rotate(151.659) scale(13.2792 11.0967)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                              <radialGradient
                                id="paint1_radial_92_357"
                                cx={0}
                                cy={0}
                                r={1}
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(17 18.0626) rotate(138.814) scale(22.5888 22.3889)"
                              >
                                <stop stopColor="#994FF5" />
                                <stop offset={1} stopColor="#FFC41F" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="mt-7">
                          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-12">
                            <span className="text-xl font-semibold">
                              Higher Secondary School Certificate
                            </span>
                          </div>
                          <p>
                            <span className="font-semibold text-purple">
                              2016 - 2018
                            </span>
                          </p>
                          <p className="mt-5 text-gray"></p>
                          <p className="mt-6 font-semibold">
                            Patiya Government College, Chittagong, Bangladesh
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#994FF5] to-[#FFC41F] shrink-0 rounded-full w-2.5 h-2.5 block absolute left-px rtl:right-px -translate-x-1/2 rtl:translate-x-1/2 md:left-1/2 rtl:md:right-1/2 transform md:-translate-x-1/2 rtl:md:translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationAndExperience;
