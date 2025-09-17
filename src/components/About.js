import React from "react";
// countup
import CountUp from "react-countup";
// intersection
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
import IMG from "../assets/img/img1.png";
import { Link } from "react-scroll";

const BIRTH_DATE = new Date(2001, 2, 27); // 27 March 2001

function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) years = years - 1;
  return years;
}

// --- NEW: pop / "pop-out" variant ---
const popVariant = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
      duration: 0.8,
    },
  },
  hover: {
    scale: 1.06,
    y: -8,
    boxShadow: "0 30px 50px rgba(0,0,0,0.35)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const age = calculateAge(BIRTH_DATE);

  return (
    <section className="section mt-0" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* image */}
          <div className="flex-1 mt-5 pt-5 bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top relative">
            {/* motion image with pop effect */}
            <motion.img
              src={IMG}
              alt="img"
              className="mt-4 w-full lg:w-[800px] rounded-lg shadow-lg"
              variants={popVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.6 }}
            />
          </div>

          {/* text */}
          <div className="flex-1">
            <motion.h2
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="h2 text-accent"
            >
              Who I Am — A Bit Cooler
            </motion.h2>

            <motion.h3
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="h4 text-2xl mb-4"
            >
              Creative Front-end Craftsman & Performance-Obsessed Developer
            </motion.h3>

            <motion.p
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 "
            >
              Hello, I am Eldeniz Mahmudov, I am {age} years old I am a
              Front-end developer I can create your site. <br />
              You can definitely trust me and entrust me with your work <br />
              I have worked on more than 100 projects <br /> in this field and
              written more than 10,000 lines of code.
            </motion.p>

            {/* stats */}
            <motion.div
              variants={fadeIn("up", 0.9)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="lg:flex hidden gap-x-6 lg:gap-x-10 mb-12"
            >
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={2} /> : null} +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of work
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={100} duration={4} /> : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? (
                    <CountUp start={0} end={10000} duration={5} separator="," />
                  ) : null}{" "}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Lines of Code
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex gap-x-8 items-center"
            >
              <Link to="contact">
                <button className="btn btn-lg">Let's Talk</button>
              </Link>
              <a href="#portfolio" className="text-gradient btn-link">
                See My Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
