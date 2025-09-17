import React, { useEffect } from "react";
import Image from "../assets/img/bg.webp";
import { SiAcclaim } from "react-icons/si";
import icon3 from "../assets/img/linkedin.webp";
import icon1 from "../assets/img/insta.webp";
import icon2 from "../assets/img/git.webp";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import pdfURL from "../assets/certifcate/cv.pdf";

const Banner = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollButton = document.getElementById("scrollToTopButton");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const downloadCustomPDF = (pdfURL) => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.target = "_blank";
    link.download = "custom-cv.pdf";

    link.click();
  };

  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] lg:mt-32   flex items-center mx-auto"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row mx-auto lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[40px] mb-6 font-bold leading-[0.8] lg:text-[30px]"
            >
              Eldeniz <span>Mahmudov</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold  leading-[1]"
            >
              <span className="text-white mr-4">I'm a</span>
              <TypeAnimation
                sequence={[
                  " Front End",
                  2000,
                  " Developer",
                  2000,
                  " Programmer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className={"text-red-800"}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              You can rate as a person who is eager to learn new experiences,
              does everything in his power to achieve his goals, is always
              working on and likes to help people in the team.
            </motion.p>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button
                className="btn-cv btn btn-lg"
                onClick={() => downloadCustomPDF(pdfURL)}
              >
                Download Cv
              </button>
              <a className="text-gradient btn-link">My Portfolio</a>
            </div>
            {/* socials */}
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
              <a
                href="https://www.linkedin.com/in/eldenizmahmudov/"
                target="_blank"
              >
                <img className="w-9" src={icon3} />
              </a>
              <a href="https://github.com/mahmudoffeldeniz" target="_blank">
                <img className="w-9" src={icon2} />{" "}
              </a>
              <a href="https://www.instagram.com/mr_mhmdov/" target="_blank">
                <img className="w-9" src={icon1} />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:flex  flex-1 max-w-[320px] lg:max-w-[482px]">
            <img
              src={Image}
              className="mix-blend-lighten lg:absolute h-[500px] lg:top-24 lg:right-6  w-[750px]"
              alt="img"
            />
          </div>
        </div>
      </div>
      <button
        id="scrollToTopButton"
        className="fixed right-6  bottom-6 p-4 btn text-white rounded-full shadow-md cursor-pointer hidden transition duration-300 ease-in-out transform hover:scale-110"
        onClick={scrollToTop}
      >
        <SiAcclaim />
      </button>
    </section>
  );
};

export default Banner;
