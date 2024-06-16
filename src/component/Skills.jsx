import React from "react";

const Skills = () => {
  const skillData = [
    { name: "Html", icon: "/images/html.png" },
    { name: "CSS", icon: "/images/css.png" },
    { name: "JavaScript", icon: "/images/js.png" },
    { name: "Java", icon: "/images/java.png" },
    { name: "ReactJS", icon: "/images/react.png" },
    {
      name: "React Native",
      icon: "/images/react-native.png",
    },
    { name: "Next JS", icon: "/images/nextjs.png" },
    { name: "Bootstrap", icon: "/images/bootstrap.png" },
    {
      name: "Tailwind CSS",
      icon: "/images/tailwind.png",
    },
    { name: "Material UI", icon: "/images/mui.png" },
    { name: "Three.js", icon: "/images/three.png" },
    { name: "Web3.js", icon: "/images/web3.png" },
    { name: "Ethers", icon: "/images/ethers.png" },
    { name: "Metamask", icon: "/images/metamask.png" },

    { name: "Redux", icon: "/images/redux.png" },
    { name: "Typescript", icon: "/images/ts.png" },
    { name: "Node JS", icon: "/images/node.png" },
    { name: "SQL", icon: "/images/sql.png" },
    { name: "Express JS", icon: "/images/express.png" },
    { name: "MongoDB", icon: "/images/mongodb.svg" },
    { name: "Mongoose", icon: "/images/mongose.png" },
    { name: "Firebase", icon: "/images/firebase.png" },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA] ">
      <div className="container w-[90%] md:w-[80%] mx-auto">
        <div className="grid grid-cols-1 aos-init" data-aos="fade-up">
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
                Skills
              </p>
            </div>
            <h2 className="font-semibold text-[26px]/normal mt-7">
              Masterful Talents
            </h2>
            <p className="mt-5 text-gray max-w-[708px] mx-auto">
              We craft digital, graphic and dimensional thinking, to create
              category leading brand experiences that have meaning .
            </p>
          </div>
        </div>
        <div className="grid  grid-cols-1  mt-14">
          <div data-aos="fade-up" className="aos-init">
            <div className="flex  flex-wrap items-start gap-2 md:gap-7">
              {skillData?.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row gap-2 items-center border-2 rounded-l-full rounded-r-full  border-gray/20 px-5 py-2 "
                >
                  <img
                    alt=""
                    loading="lazy"
                    width={24}
                    height={24}
                    decoding="async"
                    data-nimg={1}
                    className="w-[30px] h-[30px] inline-block"
                    style={{ color: "transparent" }}
                    src={item.icon}
                  />
                  <p className="text-sm font-semibold whitespace-nowrap">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
